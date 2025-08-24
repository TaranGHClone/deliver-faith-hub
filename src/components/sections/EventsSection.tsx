import { Button } from "@/components/ui/button";

interface Event {
  date: string;
  title: string;
  description: string;
}

const events: Event[] = [
  { date: 'July 15, 2025', title: 'Community Outreach', description: 'Serving our neighborhood with love' },
  { date: 'July 20, 2025', title: 'Youth Conference', description: 'Special gathering for young believers' },
  { date: 'July 25, 2025', title: 'Prayer & Fasting', description: 'Seeking God\'s guidance and blessing' }
];

export const EventsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Upcoming Events</h2>
        <p className="text-xl text-muted-foreground">Join us for these special gatherings</p>
      </div>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-primary-lighter text-primary px-4 py-2 rounded-full text-sm font-medium w-fit">
                {event.date}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
              <Button className="w-fit">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};