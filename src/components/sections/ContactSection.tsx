import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Contact Us</h2>
        <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="text-primary mr-3" size={24} />
              <div>
                <p className="font-semibold text-card-foreground">Address</p>
                <p className="text-muted-foreground">123 Faith Avenue, Vijayawada, AP 520001</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-green-600 mr-3" size={24} />
              <div>
                <p className="font-semibold text-card-foreground">Phone</p>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-secondary mr-3" size={24} />
              <div>
                <p className="font-semibold text-card-foreground">Email</p>
                <p className="text-muted-foreground">info@deliverancechurch.org</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-6">Send a Message / Prayer Request</h3>
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Phone Number (Optional)" />
            <Textarea placeholder="Your Message or Prayer Request" rows={4} />
            <div className="flex gap-2">
              <Button className="flex-1">
                Send Message
              </Button>
              <Button variant="accent" className="flex-1">
                Prayer Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};