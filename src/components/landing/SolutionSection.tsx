import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileInput, Layers, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileInput,
    title: "Ingest",
    desc: "Decks, documents, spreadsheets and updates",
  },
  {
    icon: Layers,
    title: "Structure",
    desc: "Mapped into a standardized venture model",
  },
  {
    icon: BarChart3,
    title: "Intelligence",
    desc: "Real-time view of progress, risk and readiness",
  },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="solution" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            A Living Operating Model for Life Sciences
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nexuum transforms what already exists into a structured, living model
            of your venture.
          </p>
        </div>

        <div className="fade-in-up flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="card-elevated card-top-accent p-8 space-y-4 w-full h-full">
                <div className="p-3 rounded-lg bg-accent/10 w-fit">
                  <step.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center px-3 shrink-0">
                  <ArrowRight className="h-5 w-5 text-accent/40" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="fade-in-up text-center text-lg font-medium text-foreground/80 italic">
          One structured view. Shared. Always current.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
