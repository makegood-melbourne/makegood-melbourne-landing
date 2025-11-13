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

    const { competitorUrls } = await req.json();

    // Validate input
    if (!competitorUrls || !Array.isArray(competitorUrls)) {
      return new Response(JSON.stringify({ error: 'Competitor URLs array is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (competitorUrls.length === 0 || competitorUrls.length > 20) {
      return new Response(JSON.stringify({ error: 'Please provide between 1 and 20 competitor URLs' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate each URL
    const urlRegex = /^https?:\/\/.+/i;
    for (const url of competitorUrls) {
      if (typeof url !== 'string' || !urlRegex.test(url)) {
        return new Response(JSON.stringify({ error: `Invalid URL format: ${url}` }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    console.log('Analyzing competitors:', competitorUrls);

    const analyses = [];

    for (const url of competitorUrls) {
      try {
        // In a real implementation, you would fetch and analyze each competitor's website
        // For now, we'll use AI to generate analysis based on the URL
        
        const analysisPrompt = `Analyze this Melbourne make good services competitor: ${url}

Based on the URL and your knowledge of the industry, provide:
1. Company name
2. Estimated ranking position (1-10)
3. Key services offered
4. Target locations in Melbourne
5. Estimated page count
6. Their main strengths (what they do well)
7. Their weaknesses (opportunities for us)

Return ONLY valid JSON:
{
  "competitor_name": "Company Name",
  "competitor_url": "${url}",
  "ranking_position": 3,
  "content_summary": "Brief summary of their content strategy",
  "key_services": ["service1", "service2", "service3"],
  "target_locations": ["suburb1", "suburb2"],
  "page_count": 25,
  "strengths": {
    "content": "Detailed service pages",
    "seo": "Strong local SEO presence",
    "branding": "Professional brand identity"
  },
  "weaknesses": {
    "content": "Limited blog content",
    "coverage": "Missing some suburbs",
    "technical": "Slow page load times"
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
                content: 'You are an SEO analyst specializing in competitive analysis for service businesses in Melbourne.'
              },
              {
                role: 'user',
                content: analysisPrompt
              }
            ],
          }),
        });

        if (!response.ok) {
          console.warn(`Failed to analyze ${url}, skipping...`);
          continue;
        }

        const data = await response.json();
        const analysisText = data.choices?.[0]?.message?.content;

        if (!analysisText) {
          console.warn(`No response for ${url}, skipping...`);
          continue;
        }

        // Parse JSON
        let analysis;
        try {
          const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            analysis = JSON.parse(jsonMatch[0]);
          } else {
            analysis = JSON.parse(analysisText);
          }
          
          // Add next scan date (30 days from now)
          analysis.next_scan_date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
          
          analyses.push(analysis);
        } catch (e) {
          console.error(`Failed to parse analysis for ${url}:`, e);
          continue;
        }

      } catch (error) {
        console.error(`Error analyzing ${url}:`, error);
        continue;
      }
    }

    if (analyses.length === 0) {
      throw new Error('Failed to analyze any competitors');
    }

    // Insert analyses into database
    const { data: insertedAnalyses, error: insertError } = await supabase
      .from('competitor_analysis')
      .insert(analyses)
      .select();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log(`Successfully analyzed ${insertedAnalyses?.length || 0} competitors`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        analyses: insertedAnalyses,
        count: insertedAnalyses?.length || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error analyzing competitors:', error);
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