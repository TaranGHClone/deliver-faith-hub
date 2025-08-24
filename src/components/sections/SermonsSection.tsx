import { Play, Download, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Sermon {
  title: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
}

const recentSermons: Sermon[] = [
  {
    title: "Breaking Free from Spiritual Bondage",
    speaker: "Pastor Nani Moses",
    date: "January 21, 2025",
    duration: "45 min",
    description: "Understanding how to identify and break free from spiritual chains"
  },
  {
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Nani Moses", 
    date: "January 14, 2025",
    duration: "38 min",
    description: "Learning to pray with faith and persistence like never before"
  },
  {
    title: "Walking in Divine Healing",
    speaker: "Pastor Nani Moses",
    date: "January 7, 2025", 
    duration: "42 min",
    description: "Accessing God's healing power for body, soul, and spirit"
  }
];

export const SermonsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Sermons & Bible Study</h2>
        <p className="text-xl text-muted-foreground">Feed your spirit with God's word</p>
      </div>

      <div className="hero-gradient text-primary-foreground p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Live Streaming Available</h3>
        <p className="text-lg mb-6">
          Join us online every Sunday at 9:00 AM and 6:00 PM for live worship and teaching
        </p>
        <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
          <Play className="mr-2" size={20} />
          Watch Live Now
        </Button>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-card-foreground">Recent Sermons</h3>
        {recentSermons.map((sermon, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-2">{sermon.title}</h4>
                <p className="text-muted-foreground mb-2">{sermon.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1" size={16} />
                    {sermon.date}
                  </span>
                  <span>By {sermon.speaker}</span>
                  <span>{sermon.duration}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Play className="mr-2" size={16} />
                  Play
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2" size={16} />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-6 shadow-elegant">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Bible Study Groups</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Wednesday 7:00 PM - Adult Bible Study</li>
            <li>• Thursday 6:30 PM - Youth Bible Study</li>
            <li>• Saturday 10:00 AM - Ladies Bible Study</li>
            <li>• Saturday 4:00 PM - Men's Bible Study</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-elegant">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Sermon Series</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• "Breaking Every Chain" - January 2025</li>
            <li>• "Supernatural Breakthrough" - December 2024</li>
            <li>• "Walking in Victory" - November 2024</li>
            <li>• "Divine Healing" - October 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};