import { useState } from 'react';
import beforeImage from '@/assets/services/relocation-before.jpeg';
import afterImage from '@/assets/services/relocation-after.png';

const BeforeAfterDemo = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-3xl font-bold text-foreground text-center">Before/After Comparison Options</h1>
        
        {/* Option 1: Slider */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Option 1: Interactive Slider</h2>
          <p className="text-muted-foreground">Drag the slider to reveal the transformation. Works best with matching angles.</p>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg aspect-[16/9]">
            {/* After image (background) */}
            <img 
              src={afterImage} 
              alt="After: Make-good complete" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Before image (clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={beforeImage} 
                alt="Before: Operational facility" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
              />
            </div>
            {/* Slider handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground text-xs font-bold">↔</span>
              </div>
            </div>
            {/* Slider input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 rounded text-sm font-medium">Before</div>
            <div className="absolute bottom-4 right-4 bg-background/90 px-3 py-1 rounded text-sm font-medium">After</div>
          </div>
        </section>

        {/* Option 2: Side by Side */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Option 2: Side-by-Side</h2>
          <p className="text-muted-foreground">Clean comparison that works regardless of camera angles.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img 
                  src={beforeImage} 
                  alt="Before: Operational facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded-full">
                  <span className="text-primary-foreground font-semibold text-sm">Before</span>
                </div>
              </div>
              <p className="text-muted-foreground text-center">Operational Manufacturing Facility</p>
            </div>
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img 
                  src={afterImage} 
                  alt="After: Make-good complete" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent px-4 py-2 rounded-full">
                  <span className="text-accent-foreground font-semibold text-sm">After</span>
                </div>
              </div>
              <p className="text-muted-foreground text-center">Make-Good Complete, Ready for Handover</p>
            </div>
          </div>
        </section>

        {/* Option 3: Stacked Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Option 3: Stacked Cards</h2>
          <p className="text-muted-foreground">Vertical flow with clear transformation narrative.</p>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Before card */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg aspect-[21/9]">
                <img 
                  src={beforeImage} 
                  alt="Before: Operational facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-8 bg-card border border-border px-6 py-3 rounded-lg shadow-lg">
                <span className="text-primary font-bold text-lg">Before</span>
                <p className="text-muted-foreground text-sm">Fully operational manufacturing facility</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-2xl">↓</span>
              </div>
            </div>
            
            {/* After card */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg aspect-[21/9]">
                <img 
                  src={afterImage} 
                  alt="After: Make-good complete" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 right-8 bg-card border border-border px-6 py-3 rounded-lg shadow-lg">
                <span className="text-accent font-bold text-lg">After</span>
                <p className="text-muted-foreground text-sm">Make-good complete, ready for lease handover</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">This is a demo page. Let me know which option you prefer!</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterDemo;
