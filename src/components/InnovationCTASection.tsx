import { 
  Calendar, 
  Beaker, 
  Handshake,
  ArrowRight
} from "lucide-react";

const InnovationCTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Join Planning Process",
      description: "Participate in our facility design and program development as a founding stakeholder",
      action: "Get Involved",
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Beaker,
      title: "Reserve Trial Space",
      description: "Secure priority access to our controlled environments when we launch in 2026",
      action: "Reserve Access",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Handshake,
      title: "Become an Anchor Partner",
      description: "Shape the future of agricultural innovation as a charter member of our ecosystem",
      action: "Partner Early",
      gradient: "from-primary-light to-accent"
    }
  ];

  return (
    <section id="innovation" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">Innovate</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the next step in agricultural innovation. Whether you're looking to 
            research, trial, or scale your solutions, we're here to support your journey.
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => (
            <div key={index} className={`p-6 rounded-xl bg-gradient-to-br ${option.gradient} text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg`}>
              <div className="relative z-10">
                <option.icon className="h-12 w-12 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3 text-white">{option.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{option.description}</p>
                <div className="font-semibold text-white/95 text-lg">{option.action}</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Single CTA Button */}
        <div className="text-center">
          <a href="#contact" className="btn-nature group inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovationCTASection;
