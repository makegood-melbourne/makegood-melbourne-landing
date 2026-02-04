import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import BreadcrumbsAuto from "@/components/BreadcrumbsAuto";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: "Terms of Service", href: "/terms-of-service", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Make Good Melbourne</title>
        <meta name="description" content="Terms of Service for Make Good Melbourne. Read our terms and conditions for using our website and services." />
        <link rel="canonical" href="https://makegood.melbourne/terms-of-service/" />
      </Helmet>

      <Navigation />
      <BreadcrumbsAuto />

      <main className="container mx-auto px-4 py-12">
        
        <article className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> December 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the Make Good Melbourne website (makegoodmelbourne.com.au) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Our Services</h2>
            <p className="text-muted-foreground mb-4">
              Make Good Melbourne provides commercial and industrial property services including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>End of lease make good works</li>
              <li>Strip outs and demolition</li>
              <li>Floor coatings and epoxy flooring</li>
              <li>Concrete cancer remediation</li>
              <li>Structural repairs and waterproofing</li>
              <li>Commercial cleaning and waste removal</li>
              <li>Pallet racking installation and removal</li>
              <li>Car park line marking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Quotes and Pricing</h2>
            <p className="text-muted-foreground">
              All quotes provided are estimates based on the information available at the time of assessment. Final pricing may vary depending on site conditions, scope changes, or unforeseen circumstances discovered during works. Written quotes are valid for 30 days unless otherwise specified.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Agreements</h2>
            <p className="text-muted-foreground">
              Specific terms for individual projects will be outlined in separate service agreements or contracts. These project-specific terms take precedence over these general Terms of Service where applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">When engaging our services, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information about your property and requirements</li>
              <li>Ensure safe access to the work site</li>
              <li>Obtain any necessary permissions from landlords, body corporates, or local authorities</li>
              <li>Make timely payments as agreed in service contracts</li>
              <li>Notify us promptly of any changes to project scope or timeline</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Insurance and Licensing</h2>
            <p className="text-muted-foreground">
              Make Good Melbourne maintains appropriate public liability insurance and holds all necessary licences and registrations required to perform our services in Victoria. Copies of relevant certifications can be provided upon request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Make Good Melbourne's liability for any claim arising from our services is limited to the value of the services provided. We are not liable for indirect, consequential, or incidental damages, including loss of profits, business interruption, or damage to reputation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, images, logos, and design elements, is the property of Make Good Melbourne and is protected by Australian copyright and intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Website Use</h2>
            <p className="text-muted-foreground mb-4">When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Transmit any viruses or malicious code</li>
              <li>Collect user information without consent</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms of Service are governed by the laws of Victoria, Australia. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website and services constitutes acceptance of any modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@makegoodmelbourne.com.au" className="text-accent hover:underline">
                info@makegoodmelbourne.com.au
              </a>
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Address:</strong> Melbourne, Victoria, Australia
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
