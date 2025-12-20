import { Shield, Clock, FileCheck } from "lucide-react";

const HeroStats = () => {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24-Hour Emergency Response" },
    { icon: FileCheck, text: "Detailed Documentation" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {trustBadges.map((badge, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
        >
          <badge.icon className="h-4 w-4" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
