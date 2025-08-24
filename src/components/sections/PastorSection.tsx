export const PastorSection = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-elegant">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 hero-gradient rounded-full flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground text-6xl font-bold">NM</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-card-foreground mb-2">Pastor Nani Moses</h2>
            <p className="text-xl text-primary mb-4">Senior Pastor</p>
            <p className="text-muted-foreground leading-relaxed">
              Pastor Nani Moses has been serving God's people for over 15 years with a heart for 
              deliverance and spiritual growth. His ministry focuses on bringing hope, healing, 
              and transformation to every life he touches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};