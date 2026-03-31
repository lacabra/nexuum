import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Landmark, Building2 } from "lucide-react";
import EarlyAccessDialog from "./EarlyAccessDialog";

const audiences = [
  {
    icon: Microscope,
    title: "Startups & Founders",
    tagline: "Clarity to execute. Confidence to raise.",
  },
  {
    icon: Landmark,
    title: "Investors",
    tagline: "Better signal. Stronger decisions. Aligned capital.",
  },
  {
    icon: Building2,
    title: "Institutions",
    tagline: "Visibility to support. Structure to scale impact.",
  },
];

const HeroSection = () => {
  const ref = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const heroStyle = {
    backgroundColor: "hsl(188 61% 7%)",
    backgroundImage:
      "radial-gradient(circle at 30% 20%, hsl(189 54% 12%) 0%, hsl(188 61% 7%) 60%, hsl(188 67% 5%) 100%)",
    opacity: 1,
    filter: "none",
  } satisfies React.CSSProperties;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden"
      style={heroStyle}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-14">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04]" style={{ color: 'hsl(0 0% 100%)' }}>
          Know Where Your Venture <span className="gradient-text">Truly Stands</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: 'hsl(190 17% 70%)' }}>
          Nexuum is an operating system for life sciences startups — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <button
              key={i}
              onClick={() => setDialogOpen(true)}
              className="card-dark p-8 space-y-5 text-left block group cursor-pointer"
            >
              <div className="p-3 rounded-xl w-fit" style={{ background: 'hsl(163 60% 44% / 0.12)' }}>
                <a.icon className="h-5 w-5" style={{ color: 'hsl(163 60% 44%)' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: 'hsl(0 0% 100%)' }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(189 16% 61%)' }}>{a.tagline}</p>
            </button>
          ))}
        </div>
      </div>
      <EarlyAccessDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
