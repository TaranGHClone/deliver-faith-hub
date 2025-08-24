import { Heart, BookOpen, Users, Calendar } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      text: "Love and compassion for all people",
      color: "text-red-500"
    },
    {
      icon: BookOpen,
      text: "Biblical truth and sound doctrine",
      color: "text-primary"
    },
    {
      icon: Users,
      text: "Strong community and fellowship",
      color: "text-green-600"
    },
    {
      icon: Calendar,
      text: "Commitment to worship and service",
      color: "text-secondary"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">About Deliverance Church</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Founded on the principles of faith, hope, and love, Deliverance Church is a community 
          where every person can experience God's transforming power.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To spread the Gospel of Jesus Christ and bring deliverance to those who are bound. 
            We believe in the power of God to transform lives, heal the broken-hearted, and 
            set the captives free.
          </p>
          <h3 className="text-2xl font-semibold text-card-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To be a beacon of hope in our community, reaching out to the lost, encouraging 
            the faithful, and building up the body of Christ through worship, fellowship, 
            and service.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-4">Our Values</h3>
          <ul className="space-y-3">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <li key={index} className="flex items-start">
                  <IconComponent className={`${value.color} mr-2 mt-1 flex-shrink-0`} size={20} />
                  <span className="text-muted-foreground">{value.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};