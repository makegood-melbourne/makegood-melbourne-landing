import { useState } from 'react';
import beforeImage from '@/assets/services/manufacturing-facility-before-makegood-melbourne.jpeg';
import afterImage from '@/assets/services/empty-warehouse-after-makegood-melbourne.png';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            The <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We dismantle, pack and transport your plant equipment, machinery and furniture to your new location—and restore your premises to agreed lease conditions. Drag the slider to see the result.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg aspect-[16/9] shadow-xl">
          {/* After image (background) */}
          <img 
            src={afterImage} 
            alt="Empty warehouse after make-good completion - ready for lease handover Melbourne" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Before image (clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={beforeImage} 
              alt="Manufacturing facility before make-good - operational with equipment Melbourne" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
            />
          </div>
          {/* Slider handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-primary-foreground">
              <span className="text-primary-foreground text-lg font-bold">↔</span>
            </div>
          </div>
          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            aria-label="Slide to compare before and after images"
          />
          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-background/95 px-4 py-2 rounded-lg text-sm font-semibold text-foreground shadow-md z-10">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-background/95 px-4 py-2 rounded-lg text-sm font-semibold text-foreground shadow-md z-10">
            After
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
