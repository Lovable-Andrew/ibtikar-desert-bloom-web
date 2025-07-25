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
      <section id="contact" className="section-padding bg-background">
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

          {/* Scroll Down Button */}
          <div className="flex justify-center mb-20">
            <a href="#contact" aria-label="Scroll to Contact Form" className="btn-nature flex items-center gap-2 animate-bounce">
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

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
    </>
  );
};

export default CTASection;