import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: "Privacy Policy", href: "/privacy-policy", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Make Good Melbourne</title>
        <meta name="description" content="Privacy Policy for Make Good Melbourne. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://makegoodmelbourne.com.au/privacy-policy" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />
        
        <article className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> December 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Make Good Melbourne ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website makegoodmelbourne.com.au or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you submit enquiry forms or contact us.</li>
              <li><strong>Property Information:</strong> Details about your commercial or industrial property relevant to our services.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your browsing experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Respond to your enquiries and provide quotes for our services</li>
              <li>Deliver make good, remediation, and property restoration services</li>
              <li>Communicate with you about your projects</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted contractors and service providers who assist us in delivering our services, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Under Australian Privacy Principles, you have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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

export default PrivacyPolicy;
