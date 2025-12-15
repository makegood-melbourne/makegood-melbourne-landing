import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    let emailSent = false;

    // Send notification email to business
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MakeGOOD Melbourne <noreply@makegood.melbourne>",
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
        from: "MakeGOOD Melbourne <noreply@makegood.melbourne>",
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

    emailSent = true;

    // Save enquiry to database as backup
    const { error: dbError } = await supabase
      .from("contact_enquiries")
      .insert({
        name,
        email,
        phone: phone || null,
        message,
        email_sent: emailSent,
      });

    if (dbError) {
      console.error("Error saving enquiry to database:", dbError);
      // Don't fail the request if DB save fails, email was already sent
    } else {
      console.log("Enquiry saved to database");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    // Try to save to database even if email failed
    try {
      const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
      await supabase
        .from("contact_enquiries")
        .insert({
          name: (await req.clone().json()).name,
          email: (await req.clone().json()).email,
          phone: (await req.clone().json()).phone || null,
          message: (await req.clone().json()).message,
          email_sent: false,
        });
      console.log("Enquiry saved to database despite email failure");
    } catch (dbError) {
      console.error("Failed to save enquiry to database:", dbError);
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
