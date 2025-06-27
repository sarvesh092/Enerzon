import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookDemo = () => {
    setMobileMenuOpen(false);
    navigate("/contact");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = (isMobile: boolean) => (
    <>
      <Link
        to="/"
        className={`text-gray-300 hover:text-white transition-colors relative ${
          isActive("/") && !isMobile
            ? "after:absolute after:bottom-[-1.5rem] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500"
            : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/platform"
        className={`text-gray-300 hover:text-white transition-colors relative ${
          isActive("/platform") && !isMobile
            ? "after:absolute after:bottom-[-1.5rem] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500"
            : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Platform
      </Link>
      <Link
        to="/usecase"
        className={`text-gray-300 hover:text-white transition-colors relative ${
          isActive("/usecase") && !isMobile
            ? "after:absolute after:bottom-[-1.5rem] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500"
            : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Use Case
      </Link>
      <Link
        to="/about"
        className={`text-gray-300 hover:text-white transition-colors relative ${
          isActive("/about") && !isMobile
            ? "after:absolute after:bottom-[-1.5rem] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500"
            : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        About Us
      </Link>
    </>
  );

  return (
    <header className="border-b border-gray-800 bg-black shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            Enerzon
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks(false)}
          </nav>
          <Button
            onClick={handleBookDemo}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors ml-4"
          >
            Book a Demo
          </Button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-4 flex flex-col">
          {navLinks(true)}
        </div>
      )}
    </header>
  );
};
export default Header;
