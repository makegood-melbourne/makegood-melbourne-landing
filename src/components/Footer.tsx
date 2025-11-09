import makegoodLogo from "@/assets/makegood-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={makegoodLogo} 
                alt="Make Good Melbourne" 
                className="h-10 w-auto invert brightness-0 contrast-200"
              />
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Make Good Melbourne. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Professional make good services across Melbourne
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
