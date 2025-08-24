import { Heart, CreditCard, Smartphone, QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const DonationSection = () => {
  const donationMethods = [
    {
      icon: CreditCard,
      title: "Online Donation",
      description: "Secure online giving via credit/debit card",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "UPI Payment",
      description: "Quick payment via UPI apps like GPay, PhonePe",
      color: "text-green-600"
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Scan and pay instantly with any UPI app",
      color: "text-secondary"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Online Giving</h2>
        <p className="text-xl text-muted-foreground">
          "Give, and it will be given to you" - Luke 6:38
        </p>
      </div>

      <div className="hero-gradient text-primary-foreground p-8 rounded-xl text-center">
        <Heart className="mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold mb-4">Support God's Work</h3>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Your generous giving helps us spread the Gospel, support missions, 
          care for the needy, and maintain our church facilities. Every gift makes a difference!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg">
            Give Now
          </Button>
          <Button variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Set Up Recurring Giving
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {donationMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow transition-smooth text-center">
              <div className="bg-primary-lighter p-4 rounded-full w-fit mx-auto mb-4">
                <IconComponent className={method.color} size={32} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-6 shadow-elegant">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">How Your Giving Helps</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Supporting local and international missions</li>
            <li>• Caring for the poor and needy in our community</li>
            <li>• Maintaining and improving church facilities</li>
            <li>• Funding youth and children's programs</li>
            <li>• Supporting pastoral care and counseling</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-elegant text-center">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick Pay QR Code</h3>
          <div className="bg-primary-lighter p-8 rounded-xl inline-block">
            <QrCode size={120} className="text-primary mx-auto" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Scan with any UPI app to donate quickly
          </p>
        </div>
      </div>
    </div>
  );
};