interface FooterProps {
  onSectionChange: (section: string) => void;
}

export const Footer = ({ onSectionChange }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Deliverance Church</h3>
            <p className="text-primary-lighter">
              Bringing hope, healing, and deliverance to our community through 
              the power of Jesus Christ.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-lighter">
              <li><button onClick={() => onSectionChange('about')} className="hover:text-accent transition-smooth">About Us</button></li>
              <li><button onClick={() => onSectionChange('services')} className="hover:text-accent transition-smooth">Services</button></li>
              <li><button onClick={() => onSectionChange('sermons')} className="hover:text-accent transition-smooth">Sermons</button></li>
              <li><button onClick={() => onSectionChange('deliverance')} className="hover:text-accent transition-smooth">Deliverance</button></li>
              <li><button onClick={() => onSectionChange('giving')} className="hover:text-accent transition-smooth">Giving</button></li>
              <li><button onClick={() => onSectionChange('contact')} className="hover:text-accent transition-smooth">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-lighter">
              <p>123 Faith Avenue</p>
              <p>Vijayawada, AP 520001</p>
              <p>+91 98765 43210</p>
              <p>info@deliverancechurch.org</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-primary-lighter">
          <p>&copy; 2025 Deliverance Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};