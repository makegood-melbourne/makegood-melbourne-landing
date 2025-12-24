import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify user is admin
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .single();

    if (!roleData) {
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { title, content_type, keywords, location } = await req.json();

    if (!title || !content_type) {
      return new Response(JSON.stringify({ error: "Title and content_type are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert SEO content writer for Make Good Melbourne, a commercial and industrial property restoration company specializing in end-of-lease make good services across Melbourne, Australia.

Your task is to write high-quality, SEO-optimized content that:
- Is informative and helpful to property managers, tenants, and landlords
- Naturally incorporates target keywords without keyword stuffing
- Follows E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness)
- Uses proper heading structure (H1, H2, H3)
- Includes relevant internal linking opportunities marked as [LINK: anchor text | /path]
- Has a compelling meta description (under 160 characters)
- Is written in Australian English

Services offered by Make Good Melbourne include:
- Office strip outs and commercial make good
- Warehouse make good and floor restoration
- Concrete slab restoration and epoxy flooring
- Pallet racking removal and relocation
- Commercial cleaning and high-pressure washing
- Structural remediation and waterproofing
- Ceiling tile replacement
- Line marking restoration
- Polycarbonate roofing and skylight replacement

Format your response as JSON with these fields:
- title: SEO-optimized page title
- meta_description: Under 160 characters
- content: Full article with markdown formatting
- word_count: Approximate word count
- seo_score: Your assessment 1-100`;

    const userPrompt = `Write a ${content_type.replace('_', ' ')} about: "${title}"
${keywords?.length ? `Target keywords: ${keywords.join(', ')}` : ''}
${location ? `Target location: ${location}` : ''}

The content should be comprehensive (800-1500 words for blog posts, 500-800 for location/service pages) and provide real value to readers looking for make good services in Melbourne.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits required. Please add credits to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const generatedContent = JSON.parse(aiData.choices[0].message.content);

    // Create slug from title
    const slug = generatedContent.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Save to database
    const { data: draft, error: insertError } = await supabase
      .from("content_drafts")
      .insert({
        title: generatedContent.title,
        slug,
        content: generatedContent.content,
        content_type,
        meta_description: generatedContent.meta_description,
        word_count: generatedContent.word_count || 0,
        seo_score: generatedContent.seo_score || 75,
        target_keywords: keywords || [],
        target_location: location || null,
        status: "pending",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw new Error("Failed to save content draft");
    }

    return new Response(JSON.stringify({ success: true, draft }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    console.error("generate-content error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
