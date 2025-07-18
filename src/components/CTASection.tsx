import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Beaker, 
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Book a Visit",
      description: "Tour our world-class facilities and see innovation in action",
      action: "Schedule Tour",
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Beaker,
      title: "Start a Trial",
      description: "Test your agricultural solutions in our controlled environments",
      action: "Begin Trial",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Join our ecosystem of innovators and researchers",
      action: "Explore Partnership",
      gradient: "from-primary-light to-accent"
    }
  ];

  const benefits = [
    "Access to cutting-edge facilities",
    "Expert guidance and mentorship",
    "Collaborative research opportunities",
    "Market validation and scaling support",
    "Vision 2030 alignment opportunities"
  ];

  return (
    <>
      {/* Main CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Innovate</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the next step in agricultural innovation. Whether you're looking to 
              research, trial, or scale your solutions, we're here to support your journey.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {ctaOptions.map((option, index) => (
              <Card key={index} className="nature-card group cursor-pointer hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button className="btn-nature group-hover:shadow-elegant">
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <Card className="nature-card bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Ibtikar?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-sand">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to start your journey with Ibtikar? Contact us today to discuss 
                how we can support your agricultural innovation goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Tabuk, Saudi Arabia</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@ibtikar.sa</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-accent rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+966 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="nature-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Organization" />
                  <Input placeholder="Phone Number" />
                  <textarea 
                    className="w-full p-3 border border-input rounded-md resize-none"
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  <Button className="btn-nature w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;