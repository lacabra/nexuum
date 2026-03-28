import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NetworkBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <line x1="10%" y1="20%" x2="35%" y2="40%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="35%" y1="40%" x2="60%" y2="25%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="60%" y1="25%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="85%" y1="50%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <line x1="35%" y1="40%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <line x1="60%" y1="25%" x2="50%" y2="60%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="10%" cy="20%" r="3" fill="hsl(170 100% 39%)" opacity="0.2" />
    <circle cx="35%" cy="40%" r="4" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="60%" cy="25%" r="3" fill="hsl(170 100% 39%)" opacity="0.2" />
    <circle cx="85%" cy="50%" r="3.5" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="70%" cy="75%" r="3" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="25%" cy="70%" r="2.5" fill="hsl(170 100% 39%)" opacity="0.12" />
    <circle cx="50%" cy="60%" r="3" fill="hsl(170 100% 39%)" opacity="0.12" />
  </svg>
);

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden"
    >
      <NetworkBg />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full animate-glow"
        style={{ background: 'radial-gradient(ellipse, hsl(170 100% 39% / 0.08), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
          Understand Where You Stand.{" "}
          <span className="relative inline-block">
            <span
              className="absolute inset-0 -skew-y-[0.5deg] rounded-sm"
              style={{ background: 'linear-gradient(135deg, hsl(170 100% 39% / 0.18), hsl(160 60% 45% / 0.12), hsl(90 45% 55% / 0.08))' }}
              aria-hidden="true"
            />
            <span className="relative gradient-text">Advance What Matters.</span>
          </span>
        </h1>
        <p className="fade-in-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Nexuum is an operating system for life sciences startups — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>
        <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button size="lg" className="px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 h-12 text-base font-medium hover:-translate-y-0.5 transition-all duration-300" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
