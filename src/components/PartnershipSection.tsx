import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Beaker, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Handshake,
  Target,
  Zap
} from "lucide-react";
import universityTabukLogo from "@/assets/university-tabuk-logo.png";
import alrasheedLogo from "@/assets/alrasheed-logo.png";
import topianLogo from "@/assets/topian-logo.png";

const PartnershipSection = () => {
  const partnershipTypes = [
    {
      icon: Beaker,
      title: "Research Planning Partnership",
      description: "Collaborate with us in designing cutting-edge research programs and helping define our facility specifications.",
      benefits: ["Input on facility design", "Program co-development", "Priority research slots", "Joint funding opportunities"]
    },
    {
      icon: TrendingUp,
      title: "Launch Partner Program",
      description: "Secure priority access and preferential terms as a founding user of our future facilities.",
      benefits: ["Priority facility access", "Founder pricing", "Custom program design", "Market validation support"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Co-Development",
      description: "Work with us now to develop breakthrough solutions that will be tested in our facilities upon launch.",
      benefits: ["Joint IP development", "Funding co-development", "Technology validation", "Market access planning"]
    },
    {
      icon: Users,
      title: "Early Adopter Training",
      description: "Get ahead of the curve with early access to our methodology and prepare your team for launch.",
      benefits: ["Pre-launch training", "Methodology access", "Team preparation", "Continuous learning track"]
    }
  ];

  const partnerLogos = [
    { 
      name: "Topian, the NEOM Food Company", 
      logo: topianLogo
    },
    { 
      name: "Saudi Greenhouses Management and Agri Marketing Co.", 
      logo: alrasheedLogo
    },
    { 
      name: "University of Tabuk", 
      logo: universityTabukLogo
    }
  ];

  return (
    <section id="partnership" className="section-padding bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner <span className="text-primary">With Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join forces with Ibtikar to accelerate agricultural innovation and 
            create sustainable solutions for global food security challenges.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="nature-card group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{type.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="nature-card bg-primary text-primary-foreground mb-20">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Handshake className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">
                <span className="badge-nature">Ready to Collaborate?</span>
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Whether you're a startup with groundbreaking technology, a research institution 
                seeking validation, or an investor looking for sustainable opportunities, 
                we have the right partnership model for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="group">
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" className="btn-inverse">
                  Start a Trial
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Founding Partners */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Founding Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerLogos.map((partner, index) => (
              <Card key={index} className="nature-card text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto shadow-sm">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision 2030 Alignment */}
        <Card className="nature-card mt-20 bg-accent text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Target className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Aligned with Saudi Vision 2030</h3>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              Our initiatives directly support Saudi Arabia's Vision 2030 goals of economic 
              diversification, food security, and environmental sustainability while positioning 
              the Kingdom as a global leader in agricultural innovation.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnershipSection;