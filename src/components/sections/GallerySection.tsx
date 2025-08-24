import { Camera } from 'lucide-react';

export const GallerySection = () => {
  // Placeholder gallery - in real implementation, these would be actual photos
  const galleryItems = [
    { id: 1, title: "Sunday Service", category: "Worship" },
    { id: 2, title: "Youth Conference", category: "Events" },
    { id: 3, title: "Baptism Ceremony", category: "Sacraments" },
    { id: 4, title: "Community Outreach", category: "Ministry" },
    { id: 5, title: "Prayer Meeting", category: "Prayer" },
    { id: 6, title: "Children Ministry", category: "Ministry" }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Photo Gallery</h2>
        <p className="text-xl text-muted-foreground">Moments from our church family</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-elegant border border-border hover:shadow-glow transition-smooth">
            <div className="aspect-video bg-primary-lighter flex items-center justify-center">
              <Camera className="text-primary" size={48} />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};