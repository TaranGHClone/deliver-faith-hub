import { useState } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { PastorSection } from '@/components/sections/PastorSection';
import { QuickInfoSection } from '@/components/sections/QuickInfoSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { MinistriesSection } from '@/components/sections/MinistriesSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { DeliveranceSection } from '@/components/sections/DeliveranceSection';
import { SermonsSection } from '@/components/sections/SermonsSection';
import { DonationSection } from '@/components/sections/DonationSection';
import { Footer } from '@/components/layout/Footer';

const DeliveranceChurch = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'sermons', label: 'Sermons' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'deliverance', label: 'Deliverance' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonies', label: 'Testimonies' },
    { id: 'giving', label: 'Giving' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            <HeroSection />
            <PastorSection />
            <QuickInfoSection />
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'sermons':
        return <SermonsSection />;
      case 'ministries':
        return <MinistriesSection />;
      case 'deliverance':
        return <DeliveranceSection />;
      case 'events':
        return <EventsSection />;
      case 'gallery':
        return <GallerySection />;
      case 'testimonies':
        return <TestimonialsSection />;
      case 'giving':
        return <DonationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        items={navigation}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      <Footer onSectionChange={setActiveSection} />
    </div>
  );
};

export default DeliveranceChurch;