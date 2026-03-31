import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Ingest",
    desc: "Bring in existing materials — decks, reports, spreadsheets, data rooms",
  },
  {
    num: "02",
    title: "Structure",
    desc: "Map everything into a standardized venture model",
  },
  {
    num: "03",
    title: "Generate Intelligence",
    desc: "Reveal gaps, track milestones and assess readiness",
  },
  {
    num: "04",
    title: "Share",
    desc: "Provide a consistent, up-to-date view to stakeholders",
  },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation();
  const sectionStyle = {
    background: "linear-gradient(180deg, hsl(0 0% 100%), hsl(150 17% 98%))",
  } satisfies React.CSSProperties;

  return (
    <section id="how-it-works" ref={ref} className="section-padding relative" style={sectionStyle}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
            From Fragmented Inputs to{" "}
            <span className="gradient-text">Actionable Intelligence</span>
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-elevated p-8 md:p-10 space-y-5 group"
            >
              <span className="text-4xl font-light gradient-text block tracking-tight">{step.num}</span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
