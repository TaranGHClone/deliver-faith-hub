import { Shield, Cross, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const DeliveranceSection = () => {
  const deliveranceAreas = [
    {
      icon: Shield,
      title: "Spiritual Warfare",
      description: "Breaking chains of bondage and demonic oppression through prayer",
      color: "text-primary"
    },
    {
      icon: Cross,
      title: "Inner Healing",
      description: "Healing emotional wounds, trauma, and past hurts through Christ",
      color: "text-secondary"
    },
    {
      icon: Flame,
      title: "Holy Spirit Baptism",
      description: "Receiving the baptism of the Holy Spirit with power and gifts",
      color: "text-accent"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Deliverance Ministry</h2>
        <p className="text-xl text-muted-foreground">
          "So if the Son sets you free, you will be free indeed" - John 8:36
        </p>
      </div>

      <div className="hero-gradient text-primary-foreground p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Experience God's Deliverance Power</h3>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Our deliverance ministry focuses on setting people free from spiritual bondages, 
          emotional wounds, and life-controlling issues through the mighty name of Jesus Christ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Request Deliverance Prayer
          </Button>
          <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Book Counseling Session
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {deliveranceAreas.map((area, index) => {
          const IconComponent = area.icon;
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow transition-smooth text-center">
              <div className="bg-primary-lighter p-4 rounded-full w-fit mx-auto mb-4">
                <IconComponent className={area.color} size={32} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-card rounded-xl p-8 shadow-elegant">
        <h3 className="text-2xl font-semibold text-card-foreground mb-4 text-center">
          Special Deliverance Sessions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-card-foreground mb-2">Every Friday - 7:00 PM</h4>
            <p className="text-muted-foreground">Individual deliverance and counseling</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-card-foreground mb-2">First Sunday - After Service</h4>
            <p className="text-muted-foreground">Group deliverance and healing prayers</p>
          </div>
        </div>
      </div>
    </div>
  );
};