import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, ShieldAlert, TrendingUp, CheckCircle2 } from "lucide-react";

const dimensions = [
  {
    icon: Sparkles,
    title: "Impact",
    desc: "What is the real potential of the science?",
    borderColor: "hsl(170 100% 39%)",
  },
  {
    icon: ShieldAlert,
    title: "Risk",
    desc: "Where are the key uncertainties?",
    borderColor: "hsl(160 55% 40%)",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    desc: "What has been achieved and what remains?",
    borderColor: "hsl(150 45% 45%)",
  },
  {
    icon: CheckCircle2,
    title: "Readiness",
    desc: "How prepared is the venture for its next step?",
    borderColor: "hsl(140 40% 50%)",
  },
];

const FrameworkSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="framework" ref={ref} className="section-padding section-alt">
      <div className="max-w-6xl mx-auto space-y-20">



        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dimensions.map((dim, i) => (
            <div
              key={i}
              className="card-elevated p-8 space-y-5"
              style={{ borderTop: `3px solid ${dim.borderColor}` }}
            >
              <div className="p-3 rounded-lg bg-accent/10 w-fit">
                <dim.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{dim.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{dim.desc}</p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default FrameworkSection;
