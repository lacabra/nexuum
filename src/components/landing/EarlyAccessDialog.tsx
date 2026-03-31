import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Microscope, Landmark, Building2, Network } from "lucide-react";

const roles = [
  {
    icon: Microscope,
    label: "Startup",
    href: "https://tally.so/r/ZjlXEo",
  },
  {
    icon: Landmark,
    label: "Investor",
    href: "mailto:contact@nexuum.tech?subject=Early%20Access%20Request%20%E2%80%94%20Investor",
  },
  {
    icon: Building2,
    label: "Institution",
    href: "mailto:contact@nexuum.tech?subject=Early%20Access%20Request%20%E2%80%94%20Institution",
  },
  {
    icon: Network,
    label: "Ecosystem Partner",
    href: "https://tally.so/r/vG4VPv",
  },
];

interface EarlyAccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EarlyAccessDialog = ({ open, onOpenChange }: EarlyAccessDialogProps) => {
  const handleSelect = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border/60">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-bold text-foreground">
            Request Early Access
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            How would you like to use Nexuum?
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 pt-4">
          {roles.map((role) => (
            <button
              key={role.label}
              onClick={() => handleSelect(role.href)}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-background p-5 text-center transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <div className="rounded-xl p-3 transition-colors duration-200 bg-accent/10 group-hover:bg-accent/20">
                <role.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {role.label}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessDialog;
