import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative hero-gradient text-primary-foreground py-24 px-6 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-accent">Deliverance Church</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-lighter opacity-90">
          Where faith meets community and hearts find healing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" className="transition-spring hover:scale-105">
            Join Us Sunday
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};