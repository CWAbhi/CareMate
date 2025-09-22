import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Heart, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users
} from "lucide-react";

const roles = [
  {
    id: "customer",
    icon: User,
    title: "I Need Care",
    subtitle: "Customer",
    description: "Find trusted caregivers for yourself or your loved ones",
    features: [
      "Browse verified caregivers",
      "Book care sessions",
      "Manage appointments",
      "Secure payments",
      "24/7 support"
    ],
    cta: "Find Caregivers",
    popular: true,
    color: "primary"
  },
  {
    id: "caregiver",
    icon: Heart,
    title: "I Provide Care",
    subtitle: "Caregiver",
    description: "Join our network of professional caregivers and earn income",
    features: [
      "Flexible schedules",
      "Competitive pay",
      "Easy client management",
      "Professional support",
      "Growth opportunities"
    ],
    cta: "Join as Caregiver",
    popular: false,
    color: "secondary"
  },
  {
    id: "admin",
    icon: Shield,
    title: "I Manage Operations",
    subtitle: "Administrator",
    description: "Manage caregivers, clients, and oversee platform operations",
    features: [
      "User management",
      "Analytics dashboard",
      "Payment oversight",
      "Quality control",
      "System administration"
    ],
    cta: "Admin Access",
    popular: false,
    color: "accent"
  }
];

const RoleSelection = ({ onRoleSelect }: { onRoleSelect?: (role: string) => void }) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your Role
          </h2>
          <p className="text-lg text-muted-foreground">
            Select how you'd like to use CareMate to get started with the right experience for you.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id}
                className={`relative transition-all duration-300 hover:shadow-medium hover:-translate-y-2 cursor-pointer group ${
                  role.popular ? 'ring-2 ring-primary/20 shadow-medium scale-105' : ''
                }`}
                onClick={() => onRoleSelect?.(role.id)}
              >
                {role.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto h-16 w-16 mb-4 rounded-2xl flex items-center justify-center ${
                    role.color === 'primary' ? 'bg-primary/10 text-primary' :
                    role.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                  <div className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
                    role.color === 'primary' ? 'bg-primary/10 text-primary' :
                    role.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    {role.subtitle}
                  </div>
                  <CardDescription className="text-base mt-2">
                    {role.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {role.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${
                          role.color === 'primary' ? 'text-primary' :
                          role.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                      role.color === 'primary' ? 'gradient-primary' :
                      role.color === 'secondary' ? 'gradient-secondary' :
                      'gradient-care'
                    }`}
                    size="lg"
                  >
                    {role.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Families</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-secondary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Verified Caregivers</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-success mb-1">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;