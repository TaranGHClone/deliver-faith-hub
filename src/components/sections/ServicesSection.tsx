import { Button } from "@/components/ui/button";

interface Service {
  day: string;
  time: string;
  service: string;
}

const services: Service[] = [
  { day: 'Sunday', time: '9:00 AM', service: 'Morning Worship' },
  { day: 'Sunday', time: '6:00 PM', service: 'Evening Service' },
  { day: 'Wednesday', time: '7:00 PM', service: 'Bible Study' },
  { day: 'Friday', time: '7:00 PM', service: 'Prayer Meeting' }
];

export const ServicesSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Service Times</h2>
        <p className="text-xl text-muted-foreground">Join us for worship and fellowship</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-card-foreground">{service.service}</h3>
              <span className="bg-primary-lighter text-primary px-3 py-1 rounded-full text-sm font-medium">
                {service.day}
              </span>
            </div>
            <p className="text-2xl font-bold text-primary">{service.time}</p>
          </div>
        ))}
      </div>
      
      <div className="hero-gradient text-primary-foreground p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Special Services</h3>
        <p className="text-lg mb-6">
          Join us for special prayer meetings, healing services, and deliverance sessions. 
          Experience God's power and presence in your life.
        </p>
        <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
          Request Prayer
        </Button>
      </div>
    </div>
  );
};