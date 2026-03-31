import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/nexuum-logo-mark-light.png";
import EarlyAccessDialog from "./EarlyAccessDialog";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Shared Cockpit", href: "#shared-cockpit" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'hsl(188 67% 5% / 0.96)', borderBottom: '1px solid hsl(0 0% 100% / 0.08)', boxShadow: '0 12px 36px hsl(188 67% 5% / 0.24)', opacity: 1, filter: 'none' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
          <a href="#" className="flex items-center gap-0.5">
            <img src={logoMark} alt="Nexuum" className="h-[6.59rem] w-auto object-contain" style={{ filter: 'brightness(1.08) contrast(1.12)' }} />
            <span className="text-[1.64rem] font-semibold tracking-[0.14em]" style={{ color: 'hsl(0 0% 100%)' }}>Nex<span style={{ color: 'hsl(163 60% 44%)' }}>uum</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'hsl(189 16% 61%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(0 0% 100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(189 16% 61%)')}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setDialogOpen(true)}
            >
              Request Early Access
            </Button>
          </div>

          <button
            className="md:hidden"
            style={{ color: 'hsl(0 0% 100%)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-6 space-y-4" style={{ backgroundColor: 'hsl(188 67% 5% / 0.98)', borderBottom: '1px solid hsl(0 0% 100% / 0.08)' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium"
                style={{ color: 'hsl(189 16% 61%)' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="w-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => { setDialogOpen(true); setOpen(false); }}
            >
              Request Early Access
            </Button>
          </div>
        )}
      </nav>
      <EarlyAccessDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Navbar;
