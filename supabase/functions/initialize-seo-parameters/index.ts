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

    console.log('Initializing SEO parameters...');

    // Check if parameters already exist
    const { data: existing } = await supabase
      .from('seo_parameters')
      .select('id')
      .limit(1);

    if (existing && existing.length > 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'SEO parameters already initialized',
          skipped: true 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const seoPrompt = `You are an SEO expert for service businesses in Melbourne, Australia, specializing in make good, commercial fit-out, and building remediation services.

Research and provide comprehensive SEO best practices for this industry in 2025.

Focus on:
1. Optimal word count for different page types (service pages, location pages, blog posts)
2. Keyword density and usage
3. Page structure (H1, H2, H3 hierarchy)
4. Meta tags optimization
5. Internal linking strategies
6. Local SEO for Melbourne suburbs
7. Content freshness and update frequency
8. Mobile optimization
9. Page speed considerations
10. Schema markup recommendations

Return ONLY a valid JSON array of parameters:
[
  {
    "parameter_type": "word_count",
    "category": "service_page",
    "recommendation": "Service pages should contain 1200-1800 words to rank competitively in Melbourne",
    "value": { "min": 1200, "max": 1800, "optimal": 1500 },
    "source": "Google ranking factors 2025",
    "priority": "critical"
  },
  {
    "parameter_type": "keyword_density",
    "category": "primary_keyword",
    "recommendation": "Primary keyword should appear 1-2% of total content, naturally integrated",
    "value": { "min": 0.01, "max": 0.02 },
    "source": "SEO best practices 2025",
    "priority": "high"
  }
]

Include at least 15-20 parameters covering all aspects above.`;

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
            content: 'You are an SEO expert specializing in service businesses in Australia. You provide detailed, actionable SEO parameters in JSON format.'
          },
          {
            role: 'user',
            content: seoPrompt
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
      throw new Error('Failed to fetch SEO parameters');
    }

    const data = await response.json();
    const paramsText = data.choices?.[0]?.message?.content;

    if (!paramsText) {
      throw new Error('No response from AI');
    }

    console.log('AI Response received, parsing...');

    // Parse JSON
    let params = [];
    try {
      const jsonMatch = paramsText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        params = JSON.parse(jsonMatch[0]);
      } else {
        params = JSON.parse(paramsText);
      }
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      throw new Error('Invalid JSON response from AI');
    }

    // Insert parameters into database
    const { data: insertedParams, error: insertError } = await supabase
      .from('seo_parameters')
      .insert(params)
      .select();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log(`Successfully initialized ${insertedParams?.length || 0} SEO parameters`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        parameters: insertedParams,
        count: insertedParams?.length || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error initializing SEO parameters:', error);
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