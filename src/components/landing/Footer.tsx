import logoMark from "@/assets/nexuum-logo-mark-light.png";

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 relative" style={{ backgroundColor: 'hsl(188 61% 7%)', backgroundImage: 'radial-gradient(circle at 30% 20%, hsl(189 54% 12%) 0%, hsl(188 61% 7%) 60%, hsl(188 67% 5%) 100%)', borderTop: '1px solid hsl(0 0% 100% / 0.08)', opacity: 1, filter: 'none' }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-0.5">
        <img src={logoMark} alt="Nexuum" className="h-[6.59rem] w-auto object-contain" style={{ filter: 'brightness(1.08) contrast(1.12)' }} loading="lazy" />
        <span className="text-[1.51rem] font-semibold tracking-[0.14em]" style={{ color: 'hsl(0 0% 100%)' }}>Nex<span style={{ color: 'hsl(163 60% 44%)' }}>uum</span></span>
      </div>
      <p className="text-xs" style={{ color: 'hsl(189 17% 41%)' }}>
        © {new Date().getFullYear()} Nexuum. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
