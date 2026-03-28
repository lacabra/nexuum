import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="closing" ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full animate-glow"
        style={{ background: 'radial-gradient(ellipse, hsl(170 100% 39% / 0.06), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Clarity Drives{" "}
          <span className="gradient-text">Better Decisions.</span>
        </h2>
        <p className="fade-in-up text-lg text-muted-foreground leading-relaxed">
          Nexuum helps you understand where things stand — and what to do next.
        </p>
        <div className="fade-in-up flex items-center justify-center">
          <Button size="lg" className="px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
