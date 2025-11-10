import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>MakeGOOD Melbourne - Professional Make Good & End of Lease Services</title>
        <meta name="description" content="Expert make good services in Melbourne. Professional end of lease works, property restoration, and commercial property maintenance. Get your bond back guaranteed." />
        <meta property="og:title" content="MakeGOOD Melbourne - Professional Make Good Services" />
        <meta property="og:description" content="Expert make good services in Melbourne. Professional end of lease works and property restoration." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/" />
      </Helmet>
      
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
