import { useEffect, useState } from "react";
import { Camera, Menu } from "lucide-react";
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
            <div className="bg-emerald-600 p-2 rounded-xl group-hover:scale-105 transition-transform">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-serif font-bold text-slate-900 hidden sm:inline">
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
                    className="text-sm font-medium transition-colors relative group text-gray-600 hover:text-emerald-600"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all w-0 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium transition-colors relative group text-gray-600 hover:text-emerald-600"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all w-0 group-hover:w-full" />
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
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white p-4"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-2 pb-6 border-b border-gray-200">
                    <div className="bg-emerald-600 p-2 rounded-xl">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-serif font-bold text-slate-900">
                      Nobies Lens
                    </span>
                  </div>

                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-left text-base font-semibold transition-all py-3 px-4 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 block shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-0.5"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="text-left text-base font-semibold transition-all py-3 px-4 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 w-full shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-0.5"
                        >
                          {link.name}
                        </button>
                      )}
                    </div>
                  ))}
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
