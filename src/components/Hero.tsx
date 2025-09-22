import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import heroImage from "@/assets/hero-caremate.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Professional caregiver helping elderly person at home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Trusted by 10,000+ families</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Quality Care
              <span className="block text-primary">At Your Home</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
              Connect with verified, compassionate caregivers for personalized home care, 
              elder assistance, and health support services. Available 24/7.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span>Background-checked caregivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-secondary rounded-full"></div>
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span>Personalized care plans</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-lg px-8" onClick={() => navigate(user ? '/dashboard' : '/auth')}>
                {user ? 'Go to Dashboard' : 'Find Care Now'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => navigate('/auth')}>
                <Heart className="mr-2 h-5 w-5" />
                Join as Caregiver
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Caregivers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Emergency Contact Card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-card border shadow-medium rounded-2xl p-6 max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success">Available Now</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Need Immediate Care?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our emergency response team can arrange care within 2 hours.
              </p>
              <Button className="w-full gradient-secondary">
                <Clock className="mr-2 h-4 w-4" />
                Emergency Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;