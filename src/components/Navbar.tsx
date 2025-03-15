
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo variant={isScrolled || !isHomePage ? "dark" : "light"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "nav-link",
                  isActive ? "nav-link-active" : "",
                  isScrolled || !isHomePage
                    ? "text-luxury-800"
                    : "text-white"
                )
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="luxury-btn-primary"
          >
            Book Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden luxury-transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled || !isHomePage ? "text-luxury-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled || !isHomePage ? "text-luxury-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-24 px-4 luxury-transition transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn("nav-link text-luxury-800 text-lg", isActive ? "nav-link-active" : "")
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="luxury-btn-primary w-full text-center"
            onClick={closeMenu}
          >
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
