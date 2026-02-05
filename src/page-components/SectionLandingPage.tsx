import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionLandingTemplate from "@/page-components/SectionLandingTemplate";
import { getSectionLandingBySlug } from "@/data/sectionLanding";

interface SectionLandingPageProps {
  slug: string;
}

const SectionLandingPage = ({ slug }: SectionLandingPageProps) => {
  const data = getSectionLandingBySlug(slug);

  if (!data) {
    window.location.href = "/services/";
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link
          rel="canonical"
          href={`https://makegood.melbourne/services/${data.slug}`}
        />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://makegood.melbourne/services/${data.slug}`}
        />
        {data.ogImage && <meta property="og:image" content={data.ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        {data.ogImage && <meta name="twitter:image" content={data.ogImage} />}
      </Helmet>

      <Navigation />

      <main className="flex-1">
        <SectionLandingTemplate data={data} />
      </main>

      <Footer />
    </div>
  );
};

export default SectionLandingPage;
