import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { keyword: "TRL-Structured", desc: "Mapped across Technology Readiness Levels" },
  { keyword: "Cross-Stakeholder", desc: "Aligned view for founders, investors & institutions" },
  { keyword: "Portfolio-Level", desc: "Visibility across entire venture portfolios" },
  { keyword: "Real-Time", desc: "Intelligence that updates as your venture evolves" },
];

const MetricsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding section-navy">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Designed for Decisions That{" "}
            <span className="gradient-text">Matter</span>
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center space-y-3">
              <p className="text-2xl md:text-3xl font-extrabold gradient-text leading-tight">
                {m.keyword}
              </p>
              <p className="text-sm opacity-60 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
