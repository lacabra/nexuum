import logo from "@/assets/Logo_Nexuum_light.png";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6 md:px-12 bg-background">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Nexuum" className="h-12" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nexuum. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
