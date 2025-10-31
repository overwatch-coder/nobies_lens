import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    setIsOpen(false);

    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        scrollTo(0, 0);
      }
    } else {
      scrollTo(0, 0);
    }
  }, [pathname]);

  const handleNavClick = (href: string, isLogoMain: boolean = false) => {
    setIsOpen(false);

    if (isLogoMain) {
      scrollTo(0, 0);
      return;
    }

    if (href.startsWith("/")) {
      return;
    }

    // Scroll anchor navigation
    if (pathname === "/" && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 rounded-xl group-hover:scale-105 transition-transform">
              <img
                src="/logos/logo_official_gold.png"
                className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full"
              />
              {/* <Camera className="w-6 h-6 text-white" /> */}
            </div>
            <span className="text-xl font-serif font-bold text-slate-900">
              Nobies Lens
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="text-sm font-medium transition-colors relative group text-gray-600 hover:text-gold"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-gold transition-all w-0 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium transition-colors relative group text-gray-600 hover:text-gold"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-gold transition-all w-0 group-hover:w-full" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <Menu className="w-6 h-6 text-slate-900" />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full bg-white p-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col space-y-6 mt-2">
                  <div className="flex items-center space-x-2 pb-6 border-b border-gray-200">
                    <div className="p-2 rounded-xl">
                      <img
                        src="/logos/logo_official_gold.png"
                        className="w-16 h-16 object-contain"
                      />
                      {/* <Camera className="w-6 h-6 text-white" /> */}
                    </div>
                    <span className="text-xl font-serif font-bold text-slate-900">
                      Nobies Lens
                    </span>
                  </div>

                  {/* Mobile Menu */}
                  <div className="flex flex-col gap-4 items-start">
                    {navLinks.map((link) =>
                      link.href.startsWith("/") ? (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="p-3 rounded-md text-slate-900 hover:bg-accent/10 transition-colors w-full"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          key={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className="p-3 rounded-md text-slate-900 hover:bg-accent/10 transition-colors w-full text-start"
                        >
                          {link.name}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
