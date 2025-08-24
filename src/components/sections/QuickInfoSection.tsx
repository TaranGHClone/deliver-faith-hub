import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const QuickInfoSection = () => {
  const infoCards = [
    {
      icon: Clock,
      title: "Service Times",
      details: ["Sunday: 9:00 AM & 6:00 PM", "Wednesday: 7:00 PM"],
      gradient: "card-gradient-blue",
      iconColor: "text-primary"
    },
    {
      icon: MapPin,
      title: "Location", 
      details: ["123 Faith Avenue", "Vijayawada, AP 520001"],
      gradient: "card-gradient-purple",
      iconColor: "text-secondary"
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["+91 98765 43210", "info@deliverancechurch.org"],
      gradient: "card-gradient-green",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {infoCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div key={index} className={`${card.gradient} p-6 rounded-xl shadow-elegant`}>
            <IconComponent className={`${card.iconColor} mb-4`} size={32} />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">{card.title}</h3>
            {card.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="text-muted-foreground">{detail}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};