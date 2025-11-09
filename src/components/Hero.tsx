import { Button } from "@/components/ui/button";
import makegoodLogo from "@/assets/makegood-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <div className="mb-12 flex justify-center">
            <img 
              src={makegoodLogo} 
              alt="Make Good Melbourne" 
              className="h-16 md:h-20 w-auto invert brightness-0 contrast-200"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block">Restoring commercial</span>
            <span className="block mt-2">spaces to perfection</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Melbourne's trusted make good specialists. End of lease restoration, make safe works, and remediation for commercial and industrial properties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-secondary font-medium">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
