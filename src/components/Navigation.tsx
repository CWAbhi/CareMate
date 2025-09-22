import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, User, Calendar, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">CareMate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#caregivers" className="text-sm font-medium hover:text-primary transition-colors">
            Find Caregivers
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
                <User className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button size="sm" className="gradient-primary">
                <Calendar className="mr-2 h-4 w-4" />
                Book Care
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button size="sm" className="gradient-primary" onClick={() => navigate('/auth')}>
                <Calendar className="mr-2 h-4 w-4" />
                Book Care
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-3">
            <a href="#services" className="block py-2 text-sm font-medium hover:text-primary">
              Services
            </a>
            <a href="#how-it-works" className="block py-2 text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#caregivers" className="block py-2 text-sm font-medium hover:text-primary">
              Find Caregivers
            </a>
            <a href="#about" className="block py-2 text-sm font-medium hover:text-primary">
              About
            </a>
            <div className="pt-3 space-y-2">
              {user ? (
                <>
                  <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => navigate('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button size="sm" className="w-full gradient-primary">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Care
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => navigate('/auth')}>
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button size="sm" className="w-full gradient-primary" onClick={() => navigate('/auth')}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Care
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;