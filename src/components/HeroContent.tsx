import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroContent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
          {/* H1 — Largest, boldest */}
          <h1
            className={`text-4xl md:text-6xl text-foreground leading-tight font-bold transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              fontFamily: "'PP Neue Montreal', sans-serif",
              transitionDelay: "0ms",
            }}
          >
            Make Good & Remediation
          </h1>

          {/* Subtitle — Small, quiet, letterspaced */}
          <p
            className={`mt-3 text-xs md:text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "rgba(255, 255, 255, 0.55)",
              transitionDelay: "100ms",
            }}
          >
            Offices, Warehouses & Industrial Properties
          </p>

          {/* Tagline — Second-largest, orange, elevated */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mt-8 mb-8 transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              textTransform: "none",
              transitionDelay: "250ms",
            }}
          >
            Make good, BETTER.
          </h2>

          {/* Body copy — One line, light */}
          <p
            className={`text-lg md:text-xl text-white/80 mb-8 leading-relaxed transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            One contractor. Every trade. From strip-out to handover.
          </p>

          {/* Stats row — Trust signals */}
          <div
            className={`flex flex-row items-center gap-6 md:gap-10 mb-10 transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                500+
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1">
                Projects
              </div>
            </div>
            <div
              className="h-10 w-px"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                12+
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1">
                Years
              </div>
            </div>
            <div
              className="h-10 w-px"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                100%
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1">
                Licensed Trades
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <a href="/contact/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              >
                Get an Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/services/">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
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
