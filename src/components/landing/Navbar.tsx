import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo_Nexuum_light.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Framework", href: "#framework" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#audience" },
  { label: "Products", href: "#products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Nexuum" className="h-12 -my-2" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="font-semibold shadow-sm hover:shadow-md transition-all duration-200" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full font-semibold" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" onClick={() => setOpen(false)} aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
