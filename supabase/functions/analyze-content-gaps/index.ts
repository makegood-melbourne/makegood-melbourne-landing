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

    const { siteContent, competitorData } = await req.json();

    // Validate inputs
    if (!siteContent || typeof siteContent !== 'string') {
      return new Response(JSON.stringify({ error: 'Valid site content is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (siteContent.length > 100000) {
      return new Response(JSON.stringify({ error: 'Site content too large (max 100,000 characters)' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!Array.isArray(competitorData) || competitorData.length > 50) {
      return new Response(JSON.stringify({ error: 'Invalid competitor data (max 50 competitors)' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Analyzing content gaps...');

    // Get existing SEO parameters
    const { data: seoParams } = await supabase
      .from('seo_parameters')
      .select('*')
      .eq('is_active', true);

    // Prepare analysis prompt
    const analysisPrompt = `You are an SEO expert analyzing a make good services website in Melbourne, Australia.

CURRENT WEBSITE CONTENT:
${siteContent}

COMPETITOR DATA:
${JSON.stringify(competitorData, null, 2)}

SEO PARAMETERS TO CONSIDER:
${JSON.stringify(seoParams, null, 2)}

Task: Identify content gaps and opportunities to improve SEO rankings in Melbourne and surrounding areas.

Focus on:
1. Missing service pages (e.g., specific make good services not covered)
2. Missing location pages (Melbourne suburbs not targeted)
3. Thin content pages (pages with insufficient word count or depth)
4. Keyword opportunities (high-traffic keywords competitors rank for but the site doesn't)
5. Competitor advantages (content/services competitors have that this site lacks)

For each gap identified, provide:
- Type of gap (missing_service, missing_location, thin_content, keyword_opportunity, competitor_advantage)
- Title for the content
- Description of why this is important
- Suggested target keywords (array)
- Target location if applicable
- Priority score (0-100, where 100 is highest priority)
- Estimated monthly traffic potential
- Content classification (one of: "standalone_page", "landing_page", "blog_post", "pillar_content", "service_page", "location_page")
- Impact score (0-100, measuring business impact: conversion potential, brand authority, customer value)

Return ONLY a valid JSON array of gaps, no markdown formatting:
[
  {
    "gap_type": "missing_location",
    "title": "Make Good Services in Brighton",
    "description": "Brighton is a high-value suburb with significant commercial property activity. Competitors rank for 'make good Brighton' but we have no dedicated page.",
    "suggested_keywords": ["make good brighton", "end of lease brighton", "commercial make good brighton"],
    "target_location": "Brighton",
    "priority_score": 85,
    "estimated_traffic": 120,
    "content_classification": "location_page",
    "impact_score": 92
  }
]`;

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
            content: 'You are an SEO expert specializing in local Melbourne service businesses. You provide actionable content gap analysis in JSON format.'
          },
          {
            role: 'user',
            content: analysisPrompt
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
      throw new Error('Failed to analyze content gaps');
    }

    const data = await response.json();
    const gapsText = data.choices?.[0]?.message?.content;

    if (!gapsText) {
      throw new Error('No response from AI');
    }

    console.log('AI Response:', gapsText);

    // Parse JSON response (handle markdown code blocks if present)
    let gaps = [];
    try {
      const jsonMatch = gapsText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        gaps = JSON.parse(jsonMatch[0]);
      } else {
        gaps = JSON.parse(gapsText);
      }
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      throw new Error('Invalid JSON response from AI');
    }

    // Insert gaps into database
    const { data: insertedGaps, error: insertError } = await supabase
      .from('content_gaps')
      .insert(gaps)
      .select();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log(`Successfully identified ${insertedGaps?.length || 0} content gaps`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        gaps: insertedGaps,
        count: insertedGaps?.length || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error analyzing content gaps:', error);
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