import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  UserCheck, 
  Calendar, 
  Heart,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Caregiver",
    description: "Browse our verified caregivers, read reviews, and compare profiles to find the perfect match for your needs.",
    details: ["View detailed profiles", "Check availability", "Read verified reviews", "Compare rates & services"]
  },
  {
    icon: UserCheck,
    title: "Book & Schedule",
    description: "Select your preferred caregiver and schedule care sessions that fit your timeline and budget.",
    details: ["Flexible scheduling", "Instant booking", "Recurring appointments", "Emergency bookings"]
  },
  {
    icon: Calendar,
    title: "Receive Quality Care",
    description: "Your caregiver arrives on time, providing professional, compassionate care tailored to your needs.",
    details: ["Professional service", "Real-time updates", "Care notes & reports", "24/7 support"]
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "We monitor your care experience and provide continuous support to ensure your satisfaction.",
    details: ["Regular check-ins", "Care plan adjustments", "Feedback system", "Quality assurance"]
  }
];

const features = [
  {
    icon: Shield,
    title: "Background Verified",
    description: "All caregivers undergo thorough background checks and verification"
  },
  {
    icon: CheckCircle,
    title: "Insured & Bonded",
    description: "Full insurance coverage for your peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support whenever you need it"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How CareMate Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting quality care is simple with our streamlined process. 
            From booking to care delivery, we make it easy and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                
                <Card className="relative z-10 h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto h-12 w-12 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-card shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of families who trust CareMate for their care needs. 
            Book your first care session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary">
              Start Booking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;