// Shared by the full quote form (/contact/) and the short quote form on the warehouse and
// core suburb pages. Enquiries go to the send-contact-email Supabase function.
//
// The extra site details (suburb, property type, size, lease end) are added to the top of
// the message, so they arrive in the enquiry email without any change to the function.
import { getBackendClient } from "@/lib/backendClient";

export const RECAPTCHA_SITE_KEY = "6LdI2CIuAAAAAGFQfhGFC1FQRx6UFm7A8ALMZdKK";

/** Loads the reCAPTCHA v3 script once per page. */
export function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });
}

export const PROPERTY_TYPES = [
  "Warehouse or distribution centre",
  "Factory or industrial unit",
  "Office",
  "Retail or shopfront",
  "Medical centre",
  "Hospitality venue",
  "Other",
];

export const LEASE_END_UNSURE = "Not sure yet";
export const LEASE_END_PAST = "Already ended";

/**
 * Lease end choices: this month and the next 23, plus "Already ended" and "Not sure yet".
 * Built in the browser (after the page loads) so the months are always current.
 */
export function leaseEndOptions(from = new Date()): string[] {
  const months: string[] = [];
  for (let i = 0; i < 24; i++) {
    const date = new Date(from.getFullYear(), from.getMonth() + i, 1);
    months.push(date.toLocaleDateString("en-AU", { month: "long", year: "numeric" }));
  }
  return [...months, LEASE_END_PAST, LEASE_END_UNSURE];
}

export type EnquiryDetails = {
  service?: string;
  company?: string;
  suburb?: string;
  propertyType?: string;
  size?: string;
  leaseEnd?: string;
};

const DETAIL_LABELS: [keyof EnquiryDetails, string][] = [
  ["suburb", "Site suburb"],
  ["propertyType", "Property type"],
  ["size", "Rough size"],
  ["leaseEnd", "Lease end"],
  ["service", "Service"],
  ["company", "Company"],
];

/** The message as it appears in the enquiry email: site details first, then their note. */
export function buildEnquiryMessage(details: EnquiryDetails, note: string): string {
  const lines = DETAIL_LABELS.filter(([key]) => details[key]?.trim()).map(
    ([key, label]) => `${label}: ${details[key]!.trim()}${key === "size" ? " m²" : ""}`
  );
  const body = note.trim() || "No other details given.";
  return `${lines.join("\n")}\n\n${body}`.trim();
}

export type EnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  details: EnquiryDetails;
  note: string;
  sourcePage: string;
  /** Honeypot field value (should be empty) */
  honeypot: string;
  /** When the form was shown (ms since epoch) */
  shownAt: number;
};

/**
 * Sends an enquiry. Returns "sent" when it went through and "blocked" when the spam checks
 * stopped it (honeypot filled or sent within 3 seconds); both go to the thank-you page.
 * Throws if the enquiry couldn't be sent.
 */
export async function submitEnquiry(input: EnquiryInput): Promise<"sent" | "blocked"> {
  if (input.honeypot) return "blocked";
  if (Date.now() - input.shownAt < 3000) return "blocked";

  let recaptchaToken = "";
  try {
    const grecaptcha = (window as any).grecaptcha;
    if (grecaptcha) {
      recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact_form" });
    }
  } catch (recaptchaError) {
    console.warn("reCAPTCHA failed, proceeding without token:", recaptchaError);
  }

  const supabase = await getBackendClient();
  const { error } = await supabase.functions.invoke("send-contact-email", {
    body: {
      name: input.name,
      email: input.email,
      phone: input.phone ?? "",
      message: buildEnquiryMessage(input.details, input.note),
      sourcePage: input.sourcePage,
      _hp: input.honeypot,
      _ts: input.shownAt,
      _rc: recaptchaToken,
    },
  });
  if (error) throw error;

  // Flag a genuine submission so the thank-you page only counts real leads in Google Analytics
  try {
    sessionStorage.setItem("mg_lead_submitted", input.sourcePage);
  } catch {
    // Storage unavailable (e.g. private mode); the lead just won't be tracked
  }
  return "sent";
}
