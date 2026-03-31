import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Presentation, Gauge, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Presentation,
    title: "Fundraising Basics",
    tag: "Starter",
    desc: "Structure your story and share it clearly. Build investor-ready narratives backed by structured data.",
  },
  {
    icon: Gauge,
    title: "Project Cockpit",
    tag: "Core",
    desc: "Run your venture as a living system. Track progress, risk and readiness in one unified view.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence",
    tag: "Scale",
    desc: "Monitor and support ventures at scale. Gain portfolio-level visibility with real-time intelligence.",
  },
];

const ProductSection = () => {
  const ref = useScrollAnimation();
  const sectionStyle = {
    backgroundColor: "hsl(188 61% 7%)",
    backgroundImage:
      "radial-gradient(circle at 30% 20%, hsl(189 54% 12%) 0%, hsl(188 61% 7%) 60%, hsl(188 67% 5%) 100%)",
    opacity: 1,
    filter: "none",
  } satisfies React.CSSProperties;

  return (
    <section id="products" ref={ref} className="section-padding relative" style={sectionStyle}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: 'hsl(0 0% 100%)' }}>
            <span className="gradient-text">Flexible Entry Points</span>.{" "}
            One Model
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="card-dark p-10 space-y-5 group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'hsl(163 60% 44% / 0.12)' }}>
                  <p.icon className="h-5 w-5" style={{ color: 'hsl(163 60% 44%)' }} strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full" style={{ background: 'hsl(163 60% 44% / 0.12)', color: 'hsl(163 60% 44%)' }}>
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'hsl(0 0% 100%)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(189 16% 61%)' }}>{p.desc}</p>
              <div className="pt-4">
                <div className="h-px w-12 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(163 60% 44%), transparent)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
