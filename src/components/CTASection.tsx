import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendContactToStackby } from "@/lib/stackby";
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
      title: "Become a Founding Partner",
      description: "Shape the future of agricultural innovation as a charter member of our ecosystem",
      action: "Partner Early",
      gradient: "from-primary-light to-accent"
    }
  ];

  const benefits = [
    "Priority access to launch facilities",
    "Input on facility design and programs",
    "Founding member networking opportunities",
    "Early adopter pricing and benefits",
    "Vision 2030 alignment support from day one"
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get <span className="text-primary">Started</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey with Ibtikar? Contact us today to discuss 
            how we can support your agricultural innovation goals.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help you navigate your agricultural innovation journey. 
              Whether you're interested in partnerships, trials, or learning more about our programs.
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
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Why Partner With Ibtikar?</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Stackby Embed */}
          <div className="nature-card p-0 overflow-hidden">
            <iframe
              className="stackby-embed"
              src="https://stackby.com/form/frshr17534818776559d669c?"
              frameBorder="0"
              width="100%"
              height="533"
              title="Contact Form"
              style={{ border: 0, minHeight: 533, width: '100%' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;