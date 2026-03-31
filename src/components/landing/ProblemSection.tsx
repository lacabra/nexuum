import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileWarning, Eye, TrendingDown, AlertTriangle, Clock, DollarSign } from "lucide-react";

const problems = [
  { icon: FileWarning, text: "Data scattered across decks, reports and tools", highlight: "scattered" },
  { icon: Eye, text: "No shared framework to measure progress or risk", highlight: "No shared framework" },
  { icon: TrendingDown, text: "Each stakeholder sees a different version of reality", highlight: "different version" },
];

const consequences = [
  { icon: Clock, text: "Founders spend time explaining instead of executing" },
  { icon: AlertTriangle, text: "Institutions lack visibility across portfolios" },
  { icon: DollarSign, text: "Capital is allocated based on narrative, not evidence", highlight: "narrative, not evidence" },
];

const highlightText = (text: string, highlight?: string) => {
  if (!highlight) return text;
  const idx = text.indexOf(highlight);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="highlight-band font-medium">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
};

const ProblemSection = () => {
  const ref = useScrollAnimation();
  const sectionStyle = {
    background: "linear-gradient(180deg, hsl(0 0% 100%), hsl(150 17% 98%))",
  } satisfies React.CSSProperties;

  return (
    <section id="problem" ref={ref} className="section-padding relative" style={sectionStyle}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
            Capital Cannot Support What It{" "}
            <span className="gradient-text">Cannot Understand</span>
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Problems */}
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Problem
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Life sciences ventures operate in fragmented environments:
            </p>
            <ul className="space-y-6">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 p-2.5 rounded-xl shrink-0" style={{ background: 'hsl(168 55% 30% / 0.08)' }}>
                    <item.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    {highlightText(item.text, item.highlight)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consequences */}
          <div className="space-y-7 md:border-l md:border-border/40 md:pl-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Consequence
            </p>
            <p className="text-muted-foreground leading-relaxed">As a result:</p>
            <ul className="space-y-6">
              {consequences.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 p-2.5 rounded-xl shrink-0" style={{ background: 'hsl(168 55% 30% / 0.08)' }}>
                    <item.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    {highlightText(item.text, item.highlight)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
