import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `You are a helpful assistant for Make Good Melbourne, a commercial property restoration and make-good services company in Melbourne, Australia.

Key information about Make Good Melbourne:
- We specialise in commercial make-good services, lease transitions, and property restoration
- We serve all Melbourne areas including CBD, inner suburbs, and greater Melbourne
- Contact: enquiries@makegood.melbourne
- We handle end-of-lease obligations for commercial tenants and landlords

WHAT IS A MAKE GOOD?
A make good (also known as "reinstatement" or "restoration") refers to the process of returning a commercial property to its original condition when your lease ends. This obligation is typically outlined in your commercial lease agreement under the "make good clause" or "reinstatement provisions."

Make good typically includes:
- Demolition & Removal: Removing tenant-installed partitions, stripping out fitouts, signage removal, pallet racking dismantling
- Restoration Works: Patching holes, repainting, ceiling tile replacement, floor restoration
- Electrical & Services: Make safe and isolation, data cabling removal, compliance certificates
- Final Works: Detailed cleaning, documentation, landlord inspection coordination

Make good costs in Melbourne typically range from:
- Standard Make Good: $100-$200 per square metre (cleaning, minor repairs, painting)
- Full Reinstatement: $250-$350+ per square metre (complete strip-out, full restoration)

OUR 6-STEP PROCESS (for end-of-lease make goods):
1. Free Consultation - We review your lease, inspect your premises, and discuss requirements. No obligation.
2. Detailed Quote - Comprehensive, itemised quote with no hidden fees.
3. Scope Agreement - We work with you and landlord to finalise scope. We can attend meetings on your behalf.
4. Scheduled Works - Our licensed team completes all works, coordinating all trades.
5. Quality Inspection - Thorough internal inspection before landlord handover. Defects rectified immediately.
6. Handover & Sign-off - We coordinate final landlord inspection. Your bond is protected.

Note: This process is for end-of-lease make good projects. For simpler works (cleaning, minor repairs) or specialist services (structural remediation, cladding), we offer a streamlined approach.

HELPFUL PAGES TO MENTION:
- /what-is-make-good - Complete guide to make good clauses and requirements
- /our-process - Our 6-step process explained in detail
- /faq - Frequently asked questions about make goods
- /contact - Get a quote

Your role:
- Answer questions about our services professionally and helpfully
- Use British English spelling (specialise, colour, organise)
- Keep responses concise and helpful
- Encourage visitors to get in touch via the contact form or email for quotes
- If you don't know something specific, direct them to contact us or visit our FAQ

Be friendly, professional, and focused on helping potential customers understand how we can help with their commercial property needs.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    console.log("Chat request received with", messages.length, "messages");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 401) {
        console.error("Invalid API key");
        return new Response(JSON.stringify({ error: "Service configuration error." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
