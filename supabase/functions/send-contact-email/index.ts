import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

// Layer 3: CORS restricted to production domain only
const ALLOWED_ORIGINS = [
  "https://makegood.melbourne",
  "https://www.makegood.melbourne",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  // Allow Netlify deploy previews for testing
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || 
    origin.includes("peaceful-arithmetic-d23971.netlify.app");
  
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

// Input validation schema with length limits
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().max(20, "Phone must be less than 20 characters").regex(/^[0-9\s\+\-\(\)]*$/, "Invalid phone format").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  sourcePage: z.string().max(500, "Source page URL too long").optional(),
  // Spam protection fields (optional - older clients may not send these)
  _hp: z.string().optional(),
  _ts: z.number().optional(),
});

// HTML escape function to prevent XSS in email clients
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);
  
  console.log("Received contact form submission");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Layer 3: Check origin header
  const origin = req.headers.get("origin") || "";
  const isAllowedOrigin = ALLOWED_ORIGINS.includes(origin) || 
    origin.includes("peaceful-arithmetic-d23971.netlify.app");
  
  if (!isAllowedOrigin && origin !== "") {
    console.warn("Blocked request from unauthorized origin:", origin);
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const rawData = await req.json();
    
    // Validate and sanitize inputs
    const validationResult = ContactSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input data";
      console.error("Validation error:", errorMessage);
      return new Response(
        JSON.stringify({ error: errorMessage }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, message, sourcePage, _hp, _ts } = validationResult.data;

    // Layer 1 (server-side): Honeypot check
    if (_hp && _hp.length > 0) {
      console.warn("Honeypot triggered - spam blocked from:", email);
      // Return success to not alert the bot
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Layer 2 (server-side): Time-based check - reject if submitted in under 2 seconds
    if (_ts) {
      const submissionTime = Date.now() - _ts;
      if (submissionTime < 2000) {
        console.warn("Time-based spam check triggered - too fast:", submissionTime, "ms from:", email);
        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Additional spam heuristics: check for gibberish names/messages
    const hasOnlyAlphaName = /^[a-zA-Z]+$/.test(name.replace(/\s/g, ''));
    const nameHasNoSpaces = !name.trim().includes(' ');
    const messageHasNoSpaces = !message.trim().includes(' ');
    const nameIsGibberish = name.length > 10 && hasOnlyAlphaName && nameHasNoSpaces;
    const messageIsGibberish = message.length > 10 && messageHasNoSpaces && /^[a-zA-Z]+$/.test(message.replace(/\s/g, ''));
    
    if (nameIsGibberish && messageIsGibberish) {
      console.warn("Gibberish spam detected - blocked:", name, message);
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    console.log("Processing enquiry from:", name, email);

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    let emailSent = false;

    // Escape user inputs for safe HTML embedding
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const safeSourcePage = escapeHtml(sourcePage || 'Unknown');

    // Send notification email to business
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MakeGOOD Melbourne <noreply@makegood.melbourne>",
        to: ["enquiries@makegood.melbourne"],
        subject: `New Enquiry from ${safeName}`,
        html: `
          <h2>New Contact Form Enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Source Page:</strong> ${safeSourcePage}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
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
        to: [email], // Use original email for sending, not escaped
        subject: "We've received your enquiry - MakeGOOD Melbourne",
        html: `
          <h2>Thank you for contacting MakeGOOD Melbourne, ${safeName}!</h2>
          <p>We've received your enquiry and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="border-left: 3px solid #e5e5e5; padding-left: 15px; margin-left: 0;">
            ${safeMessage}
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
        source_page: sourcePage || null,
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
      const rawData = await req.clone().json();
      const validationResult = ContactSchema.safeParse(rawData);
      
      if (validationResult.success) {
        const { name, email, phone, message, sourcePage } = validationResult.data;
        await supabase
          .from("contact_enquiries")
          .insert({
            name,
            email,
            phone: phone || null,
            message,
            email_sent: false,
            source_page: sourcePage || null,
          });
        console.log("Enquiry saved to database despite email failure");
      }
    } catch (dbError) {
      console.error("Failed to save enquiry to database:", dbError);
    }

    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
