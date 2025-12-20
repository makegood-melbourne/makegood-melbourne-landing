import { Shield, Clock, FileCheck, Award } from "lucide-react";

const HeroStats = () => {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24-Hour Emergency Response" },
    { icon: FileCheck, text: "Detailed Documentation" },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Support" },
  ];

  return (
    <div className="space-y-6">
      {/* Trust Badges */}
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

      {/* Stats */}
      <div className="flex flex-wrap gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;
