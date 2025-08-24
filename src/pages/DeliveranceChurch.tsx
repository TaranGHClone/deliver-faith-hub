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
import { Footer } from '@/components/layout/Footer';

const DeliveranceChurch = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'events', label: 'Events' },
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
      case 'ministries':
        return <MinistriesSection />;
      case 'events':
        return <EventsSection />;
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