import { Heart, Users, BookOpen } from 'lucide-react';

interface Ministry {
  name: string;
  description: string;
  icon: typeof Users;
}

const ministries: Ministry[] = [
  { name: 'Youth Ministry', description: 'Empowering young lives through faith', icon: Users },
  { name: 'Children Ministry', description: 'Nurturing the next generation', icon: Heart },
  { name: 'Bible Study', description: 'Deepening understanding of God\'s word', icon: BookOpen },
  { name: 'Prayer Ministry', description: 'Interceding for our community', icon: Heart }
];

export const MinistriesSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Our Ministries</h2>
        <p className="text-xl text-muted-foreground">Serving God through various areas of ministry</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {ministries.map((ministry, index) => {
          const IconComponent = ministry.icon;
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow transition-smooth">
              <div className="flex items-center mb-4">
                <div className="bg-primary-lighter p-3 rounded-full mr-4">
                  <IconComponent className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{ministry.name}</h3>
              </div>
              <p className="text-muted-foreground">{ministry.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};