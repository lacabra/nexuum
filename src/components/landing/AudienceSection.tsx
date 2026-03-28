import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Building2, Landmark } from "lucide-react";

const audiences = [
  {
    icon: Microscope,
    title: "Startups & Founders",
    tagline: "Clarity to execute. Confidence to raise.",
    points: [
      "Understand venture status across science, risk and progress",
      "Replace scattered tools with a single structured view",
      "Identify gaps early and communicate clearly",
      "Strengthen fundraising with evidence",
    ],
    tint: "hsl(170 100% 39% / 0.03)",
  },
  {
    icon: Building2,
    title: "Institutions",
    tagline: "Visibility to support. Structure to scale impact.",
    points: [
      "Monitor portfolios with consistent frameworks",
      "Identify where support is most needed",
      "Move from reactive to proactive management",
      "Demonstrate measurable impact",
    ],
    tint: "hsl(160 55% 40% / 0.03)",
  },
  {
    icon: Landmark,
    title: "Investors",
    tagline: "Better signal. Stronger decisions. Aligned capital.",
    points: [
      "Move beyond pitch decks to structured evidence",
      "Track portfolio health in real time",
      "Identify risk earlier and allocate capital confidently",
      "Evaluate impact and financials together",
    ],
    tint: "hsl(150 45% 45% / 0.03)",
  },
];

const AudienceSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="audience" ref={ref} className="section-padding section-alt">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Built for Those Making, Funding and{" "}
            <span className="highlight-band">Supporting Science</span>
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="card-elevated card-top-accent p-8 space-y-5"
              style={{ backgroundColor: a.tint }}
            >
              <div className="p-3 rounded-lg bg-accent/10 w-fit">
                <a.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{a.title}</h3>
              <p className="text-sm text-accent font-semibold">{a.tagline}</p>
              <ul className="space-y-3">
                {a.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
