import { useState } from "react";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import { renderTextWithLinks } from "@/lib/textWithLinks";

export interface TabbedScopeTab {
  label: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface TabbedScopePanelProps {
  heading: string;
  tabs: TabbedScopeTab[];
  bgClass?: string;
}

export default function TabbedScopePanel({ heading, tabs, bgClass = "bg-muted" }: TabbedScopePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          {heading}
        </h2>

        {/* Tab bar */}
        <div className="relative mb-0">
          <div
            className="flex overflow-x-auto scrollbar-hide gap-0 border-b border-muted-foreground/20"
            role="tablist"
            aria-label={heading}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls={`tabpanel-${i}`}
                id={`tab-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`
                  relative whitespace-nowrap px-4 md:px-6 py-3 text-xs md:text-sm font-bold
                  tracking-wider uppercase transition-colors duration-200 flex-shrink-0
                  ${i === activeIndex
                    ? "text-[#e87a2e]"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {tab.label}
                {i === activeIndex && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e87a2e] rounded-t-sm" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels — all in DOM for SEO */}
        {tabs.map((tab, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`tabpanel-${i}`}
            aria-labelledby={`tab-${i}`}
            className={i === activeIndex ? "" : "sr-only"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {tab.image ? (
                  <img
                    src={resolveImageSrc(tab.image)}
                    alt={tab.imageAlt || tab.title}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-background">
                    <span className="text-muted-foreground/50 text-sm">Service Image</span>
                  </div>
                )}
              </div>

              {/* Text content — darker panel */}
              <div className="bg-background/60 p-8 md:p-12 flex flex-col justify-center">
                {/* Step number */}
                <span className="text-[#e87a2e] text-sm font-bold tracking-wider mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {tab.title}
                </h3>

                {tab.description.split('\n\n').map((para, j) => (
                  <p key={j} className={`text-base md:text-lg text-muted-foreground leading-relaxed${j > 0 ? ' mt-4' : ''}`}>
                    {renderTextWithLinks(para)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
