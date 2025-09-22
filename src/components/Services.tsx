import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Stethoscope, 
  Utensils, 
  Home, 
  Heart, 
  Pill, 
  Bath,
  ArrowRight,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Care",
    description: "Professional nursing care, medication management, and health monitoring",
    features: ["Medication reminders", "Vital signs monitoring", "Wound care", "Post-surgery care"],
    price: "Starting at $45/hour",
    popular: true
  },
  {
    icon: Heart,
    title: "Elder Assistance",
    description: "Compassionate companionship and daily living support for seniors",
    features: ["Companionship", "Mobility assistance", "Safety supervision", "Social activities"],
    price: "Starting at $35/hour",
    popular: false
  },
  {
    icon: Home,
    title: "Housekeeping",
    description: "Professional cleaning and household maintenance services",
    features: ["Deep cleaning", "Laundry service", "Meal preparation", "Organization"],
    price: "Starting at $25/hour",
    popular: false
  },
  {
    icon: Utensils,
    title: "Meal Services",
    description: "Nutritious meal planning, preparation, and dietary support",
    features: ["Meal planning", "Grocery shopping", "Special diets", "Cooking assistance"],
    price: "Starting at $30/hour",
    popular: false
  },
  {
    icon: Bath,
    title: "Personal Care",
    description: "Assistance with personal hygiene and daily care routines",
    features: ["Bathing assistance", "Grooming", "Dressing", "Personal hygiene"],
    price: "Starting at $40/hour",
    popular: false
  },
  {
    icon: Pill,
    title: "Health Monitoring",
    description: "Regular health checks and chronic condition management",
    features: ["Health assessments", "Chronic care", "Therapy support", "Recovery assistance"],
    price: "Starting at $50/hour",
    popular: false
  }
];

const Services = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From medical care to daily assistance, our professional caregivers provide 
            personalized services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${
                  service.popular ? 'ring-2 ring-primary/20 shadow-medium' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${
                    service.popular ? 'bg-primary text-primary-foreground' : 'bg-primary-light text-primary'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-success rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-semibold ${service.popular ? 'text-primary' : 'text-secondary'}`}>
                        {service.price}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        Same day
                      </div>
                    </div>
                    <Button 
                      className={`w-full ${
                        service.popular ? 'gradient-primary' : ''
                      }`}
                      variant={service.popular ? 'default' : 'outline'}
                      onClick={() => navigate(user ? '/dashboard' : '/auth')}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Care Plan?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our care coordinators will work with you to create a personalized care plan 
            that meets your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary" onClick={() => navigate(user ? '/dashboard' : '/auth')}>
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Call (555) 123-CARE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;