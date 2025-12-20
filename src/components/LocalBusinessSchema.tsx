import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Make Good Melbourne",
    "alternateName": "MakeGOOD Melbourne",
    "description": "Professional end of lease make good services for commercial and industrial properties across Melbourne. Expert restoration, make safe works, remediation and strip outs.",
    "url": "https://makegood.melbourne",
    "logo": "https://makegood.melbourne/logo.png",
    "image": "https://makegood.melbourne/og-image.jpg",
    "telephone": "+61383769663",
    "email": "enquiries@makegood.melbourne",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne",
        "containedIn": "Victoria, Australia"
      },
      { "@type": "AdministrativeArea", "name": "Altona" },
      { "@type": "AdministrativeArea", "name": "Clayton" },
      { "@type": "AdministrativeArea", "name": "Dandenong" },
      { "@type": "AdministrativeArea", "name": "Kilsyth" },
      { "@type": "AdministrativeArea", "name": "Moorabbin" },
      { "@type": "AdministrativeArea", "name": "Mulgrave" },
      { "@type": "AdministrativeArea", "name": "Port Melbourne" },
      { "@type": "AdministrativeArea", "name": "Richmond" },
      { "@type": "AdministrativeArea", "name": "Ringwood" },
      { "@type": "AdministrativeArea", "name": "South Melbourne" },
      { "@type": "AdministrativeArea", "name": "Truganina" }
    ],
    "serviceType": [
      "End of Lease Make Good",
      "Commercial Make Good",
      "Warehouse Make Good",
      "Office Strip Out",
      "Make Safe Works",
      "Structural Remediation",
      "Commercial Painting",
      "Epoxy Flooring",
      "Ceiling Tile Replacement",
      "Pallet Racking Removal"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
    "currenciesAccepted": "AUD",
    "sameAs": []
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
