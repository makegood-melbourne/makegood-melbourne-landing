import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { LEASE_END_UNSURE, leaseEndOptions, loadRecaptchaScript, submitEnquiry } from "@/lib/enquiry";

interface QuickQuoteFormProps {
  /** Page path, shown in the enquiry email, e.g. "/areas/clayton/" */
  sourcePage: string;
  /** Pre-fills the suburb on suburb pages */
  suburb?: string;
  /** Property type sent with the enquiry when the page makes it obvious */
  propertyType?: string;
  heading?: string;
  intro?: string;
}

/**
 * A short quote form (name, email, suburb, lease end) for the bottom of high intent pages,
 * so people don't have to leave the page to ask for a price. Sends through the same
 * function as the full form on /contact/.
 */
const QuickQuoteForm = ({
  sourcePage,
  suburb = "",
  propertyType,
  heading = "Get a fixed price for your make good",
  intro = "Four details and we'll come back within one business day to book a free site visit.",
}: QuickQuoteFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", suburb, leaseEnd: "" });
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leaseEnds, setLeaseEnds] = useState<string[]>([LEASE_END_UNSURE]);
  const shownAt = useRef(Date.now());
  const idPrefix = `quick-quote-${sourcePage.replace(/[^a-z0-9]+/gi, "-")}`;

  useEffect(() => {
    loadRecaptchaScript().catch(console.error);
    setLeaseEnds(leaseEndOptions());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitEnquiry({
        name: form.name,
        email: form.email,
        details: { suburb: form.suburb, leaseEnd: form.leaseEnd, propertyType },
        note: "Sent from the short quote form.",
        sourcePage,
        honeypot: website,
        shownAt: shownAt.current,
      });
      window.location.href = "/thank-you/";
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Sorry, there was an issue sending your details. Please try again or email us at enquiries@makegood.melbourne.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold text-card-foreground md:text-3xl">{heading}</h2>
      <p className="mt-2 text-muted-foreground">{intro}</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={id("name")} className="block text-sm font-medium text-foreground">Full name</label>
          <Input id={id("name")} name="name" autoComplete="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id("email")} className="block text-sm font-medium text-foreground">Email</label>
          <Input id={id("email")} name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id("suburb")} className="block text-sm font-medium text-foreground">Site suburb</label>
          <Input id={id("suburb")} name="suburb" value={form.suburb} onChange={handleChange} required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id("lease-end")} className="block text-sm font-medium text-foreground">Lease end</label>
          <NativeSelect id={id("lease-end")} name="leaseEnd" value={form.leaseEnd} onChange={handleChange} required>
            <option value="" disabled>Choose a month</option>
            {leaseEnds.map((month) => <option key={month} value={month}>{month}</option>)}
          </NativeSelect>
        </div>

        {/* Honeypot field - hidden from humans, visible to bots */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}>
          <label htmlFor={id("website")}>Website</label>
          <input type="text" id={id("website")} name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8">
            {isSubmitting ? "Sending..." : "Request a Quote"}
          </Button>
          <p className="text-sm text-muted-foreground">
            Want to add the clause or more detail? Use the <a href="/contact/" className="text-primary underline">full quote form</a>.
          </p>
        </div>
        <p className="sm:col-span-2 text-xs text-muted-foreground">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a> apply.
        </p>
      </form>
    </div>
  );
};

export default QuickQuoteForm;
