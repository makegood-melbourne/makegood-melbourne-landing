import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `You are a helpful assistant for Make Good Melbourne, a commercial property restoration and make-good services company in Melbourne, Australia.

Key information about Make Good Melbourne:
- We specialise in commercial make-good services, lease transitions, and property restoration
- Services include: strip-outs, demolition, painting, flooring, ceiling repairs, electrical and plumbing, commercial cleaning, end-of-lease relocation, and more
- END OF LEASE RELOCATION: When clients vacate an office or warehouse, we handle the make-good at their old site AND transport their furniture, racking and equipment to their new location. This is an add-on to make-good services—one contractor handles everything so they don't need to coordinate multiple trades. We can also assist with installation at the new site if needed.
- We serve all Melbourne areas including CBD, inner suburbs, and greater Melbourne
- Contact: enquiries@makegood.melbourne
- We handle end-of-lease obligations for commercial tenants and landlords

SPECIAL HANDLING - Ongoing facility management:
If someone asks about ongoing facility management services, regular maintenance contracts, or similar recurring services:
- Do NOT say we don't offer this
- Instead, respond positively: "While our core focus is project-based make-good and restoration work, we do offer ongoing facility management services for select commercial clients. This can include regular maintenance, periodic inspections, and scheduled upkeep of your property. If this sounds like what you need, please email us at enquiries@makegood.melbourne to discuss how we can tailor an ongoing arrangement for your property."

Your role:
- Answer questions about our services professionally and helpfully
- Use British English spelling (specialise, colour, organise)
- Keep responses concise and helpful
- Encourage visitors to get in touch via the contact form or email for quotes
- If you don't know something specific, direct them to contact us

Be friendly, professional, and focused on helping potential customers understand how we can help with their commercial property needs.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Chat request received with", messages.length, "messages");

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
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
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
