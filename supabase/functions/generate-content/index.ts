import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing required environment variables');
    }

    // Verify authentication
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { gapId } = await req.json();

    // Validate input
    if (!gapId || typeof gapId !== 'string') {
      return new Response(JSON.stringify({ error: 'Valid Gap ID is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(gapId)) {
      return new Response(JSON.stringify({ error: 'Invalid Gap ID format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Generating content for gap:', gapId);

    // Get gap details
    const { data: gap, error: gapError } = await supabase
      .from('content_gaps')
      .select('*')
      .eq('id', gapId)
      .single();

    if (gapError || !gap) {
      throw new Error('Gap not found');
    }

    // Get SEO parameters
    const { data: seoParams } = await supabase
      .from('seo_parameters')
      .select('*')
      .eq('is_active', true);

    // Prepare content generation prompt
    const contentPrompt = `You are a professional content writer specializing in commercial make good services in Melbourne, Australia.

CONTENT GAP TO ADDRESS:
Type: ${gap.gap_type}
Title: ${gap.title}
Description: ${gap.description}
Target Keywords: ${gap.suggested_keywords?.join(', ')}
Target Location: ${gap.target_location || 'Melbourne'}

SEO GUIDELINES:
${JSON.stringify(seoParams, null, 2)}

BRAND VOICE & CONTEXT:
- Professional, trustworthy, and service-focused
- Company: Make Good Melbourne
- Services: Commercial and industrial end of lease restoration, make safe solutions, building remediation
- Target audience: Property managers, landlords, tenants, real estate agents
- Service area: Melbourne and Victoria

Task: Write comprehensive, SEO-optimized content for this gap.

Requirements:
1. Word count: 1200-1800 words (this is critical for SEO)
2. Include proper H1, H2, H3 structure with target keywords
3. Write engaging introduction with primary keyword in first paragraph
4. Include service details, benefits, process, and call-to-action
5. Natural keyword integration (avoid keyword stuffing)
6. Include FAQ section if appropriate
7. Location-specific information if targeting a suburb
8. Meta description (150-160 characters)
9. Write in markdown format - DO NOT use bold (**text**) or italic formatting within sentences. Write naturally flowing text without emphasis formatting.
10. Specify if this is a "page" or "blog" - pages are standalone service/location pages, blogs are articles
11. If it's a page, provide navigation structure showing where it should appear in the site menu

Return ONLY a valid JSON object, no markdown code blocks:
{
  "title": "Page title with primary keyword",
  "slug": "url-friendly-slug",
  "meta_description": "Compelling 150-160 char description with keyword",
  "content": "Full markdown content here...",
  "target_keywords": ["primary keyword", "secondary keyword", "tertiary keyword"],
  "word_count": 1500,
  "seo_score": 85,
  "is_page_or_blog": "page" or "blog",
  "navigation_structure": {
    "parent_menu": "Services" or "Locations" or null,
    "menu_label": "Label for navigation",
    "position": "Where in menu",
    "changes_needed": "Description of any navigation changes needed"
  }
}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are an expert SEO content writer for service businesses. You create comprehensive, engaging content that ranks well and converts visitors.'
          },
          {
            role: 'user',
            content: contentPrompt
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add credits to your workspace.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error('Failed to generate content');
    }

    const data = await response.json();
    const contentText = data.choices?.[0]?.message?.content;

    if (!contentText) {
      throw new Error('No response from AI');
    }

    console.log('AI Response received, parsing...');

    // Parse JSON response
    let contentData;
    try {
      const jsonMatch = contentText.match(/\{[\s\S]*\}/);
      let jsonString = jsonMatch ? jsonMatch[0] : contentText;
      
      // Clean up control characters that break JSON parsing
      jsonString = jsonString
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
        .replace(/\n/g, '\\n') // Escape newlines
        .replace(/\r/g, '\\r') // Escape carriage returns
        .replace(/\t/g, '\\t'); // Escape tabs
      
      contentData = JSON.parse(jsonString);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      console.error('Raw response:', contentText.substring(0, 500));
      throw new Error('Invalid JSON response from AI');
    }

    // Images will be added manually by user after approval

    // Insert content draft into database
    const { data: draft, error: insertError } = await supabase
      .from('content_drafts')
      .insert({
        title: contentData.title,
        slug: contentData.slug,
        content: contentData.content,
        meta_description: contentData.meta_description,
        target_keywords: contentData.target_keywords,
        content_type: gap.gap_type === 'missing_location' ? 'location_page' : 
                      gap.gap_type === 'missing_service' ? 'service_page' : 'blog_post',
        target_location: gap.target_location,
        word_count: contentData.word_count,
        generated_images: [],
        seo_score: contentData.seo_score,
        gap_id: gapId,
        status: 'pending',
        navigation_structure: contentData.navigation_structure || null
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    // Update gap status
    await supabase
      .from('content_gaps')
      .update({ 
        status: 'in_progress',
        content_draft_id: draft.id 
      })
      .eq('id', gapId);

    console.log('Content draft created successfully:', draft.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        draft 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error generating content:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});