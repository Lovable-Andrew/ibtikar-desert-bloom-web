import { 
  Building2, 
  FlaskConical, 
  GraduationCap, 
  Users, 
  Thermometer, 
  Settings, 
  Sprout,
  Droplets,
  BarChart3,
  Package
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import greenhouseTypesImage from "@/assets/greenhouse-types.jpg";
import researchLabImage from "@/assets/research-lab.jpg";
import trainingProgramsImage from "@/assets/training-programs.jpg";
import coworkingSpaceImage from "@/assets/coworking-space.jpg";

const ServicesSection = () => {
  const facilities = [
    {
      icon: Building2,
      title: "High-Tech Greenhouses",
      description: "Fully automated controlled environment with AI-driven climate control, vertical farming systems, and precision agriculture technology.",
      features: ["AI Climate Control", "Vertical Farming", "IoT Sensors", "Automated Irrigation"],
      level: "High-Tech"
    },
    {
      icon: Settings,
      title: "Mid-Tech Greenhouses", 
      description: "Semi-automated systems with hydroponic setups, environmental monitoring, and efficient resource management.",
      features: ["Hydroponic Systems", "Environmental Monitoring", "Semi-Automation", "Resource Optimization"],
      level: "Mid-Tech"
    },
    {
      icon: Sprout,
      title: "Low-Tech Greenhouses",
      description: "Cost-effective solutions using passive environmental control and traditional growing methods with modern efficiency.",
      features: ["Passive Climate Control", "Traditional Methods", "Cost-Effective", "Easy Maintenance"],
      level: "Low-Tech"
    }
  ];

  const services = [
    {
      icon: FlaskConical,
      title: "Research Laboratories",
      description: "State-of-the-art labs for plant breeding, soil science, pest management, and agricultural biotechnology research.",
      image: researchLabImage
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive educational programs for farmers, researchers, and agri-tech professionals.",
      image: trainingProgramsImage
    },
    {
      icon: Users,
      title: "Co-working Spaces",
      description: "Collaborative workspaces for startups, researchers, and industry professionals to innovate together.",
      image: coworkingSpaceImage
    }
  ];

  const focusAreas = [
    { icon: Droplets, title: "Water Efficiency", description: "Advanced irrigation and water recycling systems" },
    { icon: BarChart3, title: "Yield Optimization", description: "Data-driven approaches to maximize crop productivity" },
    { icon: Package, title: "Post-Harvest Solutions", description: "Technology to reduce waste and extend shelf life" },
    { icon: Thermometer, title: "Climate Adaptation", description: "Solutions for extreme weather and arid conditions" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive facilities and programs designed to accelerate agricultural innovation 
            and sustainable food system development.
          </p>
        </div>

        {/* Greenhouse Facilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Greenhouse Facilities</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="nature-card group hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center">
                      <facility.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{facility.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Greenhouse image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={greenhouseTypesImage} 
              alt="Different greenhouse technology levels"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="nature-card">
                <CardContent className="p-6">
                  {service.image && (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Research Focus Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{area.title}</h4>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;