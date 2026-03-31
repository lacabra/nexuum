import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import EarlyAccessDialog from "./EarlyAccessDialog";

const ClosingSection = () => {
  const ref = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const sectionStyle = {
    background: "linear-gradient(180deg, hsl(0 0% 100%), hsl(150 17% 98%))",
  } satisfies React.CSSProperties;

  return (
    <section id="closing" ref={ref} className="section-padding relative overflow-hidden" style={sectionStyle}>
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
          Designed for <span className="gradient-text">Decisions That Matter</span>
        </h2>
        <p className="fade-in-up text-lg leading-relaxed text-muted-foreground">
          Nexuum delivers real-time structured information for better, faster high-impact decisions.
        </p>
        <div className="fade-in-up flex items-center justify-center">
          <Button
            size="lg"
            className="px-10 h-13 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setDialogOpen(true)}
          >
            Request Early Access
          </Button>
        </div>
      </div>
      <EarlyAccessDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default ClosingSection;
