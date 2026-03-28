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

  return (
    <section id="how-it-works" ref={ref} className="section-padding section-navy">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From Fragmented Inputs to{" "}
            <span className="gradient-text">Actionable Intelligence</span>
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 space-y-4" style={{
              background: i % 2 === 0
                ? 'hsl(200 55% 10% / 0.5)'
                : 'hsl(200 55% 12% / 0.5)',
              borderRadius: i === 0 ? '0.75rem 0 0 0.75rem' :
                i === steps.length - 1 ? '0 0.75rem 0.75rem 0' : '0',
            }}>
              <span className="text-5xl font-black gradient-text opacity-60">{step.num}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-12 -translate-y-1/2"
                  style={{ background: 'linear-gradient(180deg, transparent, hsl(170 100% 39% / 0.4), transparent)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
