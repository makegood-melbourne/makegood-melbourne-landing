import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();
    
    console.log("Processing enquiry from:", name, email);

    // Validate inputs
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email to business
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MakeGOOD Website <onboarding@resend.dev>",
        to: ["ali@makegood.melbourne"],
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New Contact Form Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This enquiry was submitted via the MakeGOOD Melbourne website.</em></p>
        `,
      }),
    });

    const businessEmailData = await businessEmailRes.json();
    console.log("Business notification sent:", businessEmailData);

    if (!businessEmailRes.ok) {
      throw new Error(businessEmailData.message || "Failed to send business email");
    }

    // Send confirmation email to customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MakeGOOD Melbourne <onboarding@resend.dev>",
        to: [email],
        subject: "We've received your enquiry - MakeGOOD Melbourne",
        html: `
          <h2>Thank you for contacting MakeGOOD Melbourne, ${name}!</h2>
          <p>We've received your enquiry and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="border-left: 3px solid #e5e5e5; padding-left: 15px; margin-left: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>Best regards,<br>The MakeGOOD Melbourne Team</p>
        `,
      }),
    });

    const customerEmailData = await customerEmailRes.json();
    console.log("Customer confirmation sent:", customerEmailData);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
