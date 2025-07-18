import { Target, Eye, Heart, Users, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering sustainable agricultural technologies for arid climates"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Bridging academia, industry, and government for impactful solutions"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Building resilient food systems for future generations"
    }
  ];

  return (
    <section className="section-padding bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Ibtikar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A pioneering public-private partnership transforming agriculture in arid regions 
            through innovation, research, and sustainable practices.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <Card className="nature-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate the development and deployment of climate-smart agricultural 
                solutions that maximize food security while minimizing environmental impact 
                in arid and semi-arid regions.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="nature-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading innovation hub for sustainable horticulture in the MENA 
                region, driving agricultural transformation aligned with Saudi Vision 2030 
                and global sustainability goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership */}
        <Card className="nature-card bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">A Unique Partnership</h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              Ibtikar brings together the innovation of <strong>Topian (NEOM Food Sector)</strong>, 
              the expertise of <strong>Saudi Greenhouses (SGH)</strong>, and the research excellence 
              of the <strong>University of Tabuk</strong> to create a world-class agricultural 
              innovation ecosystem.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;