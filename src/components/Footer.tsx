import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ibtikar</h3>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Pioneering sustainable agriculture in arid regions through innovation, 
              research, and strategic partnerships. Growing the future, rooted in the desert.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#partnership" className="hover:text-accent transition-colors">Partnerships</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold mb-4">Our Partners</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Topian (NEOM)</li>
              <li>Saudi Greenhouses</li>
              <li>University of Tabuk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Ibtikar Horticulture Innovation Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;