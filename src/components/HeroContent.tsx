import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Hero copy is visible in the server-rendered HTML straight away. The entrance
// motion is a CSS transform only (no opacity change), so the H1 can be painted
// before React hydrates and never delays Largest Contentful Paint.
const reveal = (delayMs: number) => ({ animationDelay: `${delayMs}ms` });

const HeroContent = () => {
  return (
    <>
      {/* Gradient overlay: solid dark on left, transparent on right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(20, 20, 20, 0.92) 0%, rgba(20, 20, 20, 0.85) 35%, rgba(20, 20, 20, 0.5) 65%, rgba(20, 20, 20, 0.15) 85%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 z-10 pt-16 pb-12">
        <div className="max-w-3xl">
          {/* H1: primary keywords (service + location) */}
          <h1
            className="hero-reveal text-4xl md:text-6xl text-foreground leading-tight font-bold"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", ...reveal(0) }}
          >
            Commercial Make Good, Strip Out &amp; Remediation in Melbourne
          </h1>

          {/* Subtitle: who it is for */}
          <p
            className="hero-reveal mt-3 text-xs md:text-sm tracking-[0.2em] uppercase font-light"
            style={{ color: "rgba(255, 255, 255, 0.55)", ...reveal(60) }}
          >
            Offices, Warehouses &amp; Industrial Properties
          </p>

          {/* Brand tagline: styled as a heading but not a heading element,
              so the H2 outline stays descriptive */}
          <p
            className="hero-reveal text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mt-8 mb-8 leading-tight"
            style={reveal(120)}
          >
            Make good, BETTER.
          </p>

          <p
            className="hero-reveal text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
            style={reveal(180)}
          >
            One contractor. Every trade. From strip-out to handover.
          </p>

          {/* Stats row */}
          <div
            className="hero-reveal flex flex-row items-center gap-6 md:gap-10 mb-10"
            style={reveal(240)}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">Projects</div>
            </div>
            <div className="h-10 w-px" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">Years</div>
            </div>
            <div className="h-10 w-px" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">Licensed Trades</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-reveal flex flex-col sm:flex-row gap-4" style={reveal(300)}>
            <a href="/contact/" data-track="hero_primary_cta">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              >
                Get an Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/services/" data-track="hero_secondary_cta">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
