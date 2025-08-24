import { Quote } from 'lucide-react';

interface Testimony {
  name: string;
  testimony: string;
  date: string;
}

const testimonies: Testimony[] = [
  {
    name: "Sarah Johnson",
    testimony: "Through Pastor Nani's prayers and guidance, I was delivered from years of depression and anxiety. God's healing power is real!",
    date: "January 2025"
  },
  {
    name: "David Kumar",
    testimony: "The deliverance ministry here changed my life completely. I found freedom from addictions and discovered my purpose in Christ.",
    date: "December 2024"
  },
  {
    name: "Mary Thomas",
    testimony: "After attending the prayer meetings, my family was restored and my business flourished. Glory to God!",
    date: "November 2024"
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Testimonies</h2>
        <p className="text-xl text-muted-foreground">Lives transformed by God's power</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonies.map((testimony, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border">
            <Quote className="text-primary mb-4" size={32} />
            <p className="text-muted-foreground mb-4 italic">"{testimony.testimony}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-card-foreground">{testimony.name}</p>
              <p className="text-sm text-muted-foreground">{testimony.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};