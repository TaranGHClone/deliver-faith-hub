import { cn } from "@/lib/utils";

interface NavigationItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ items, activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="bg-card shadow-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                Deliverance Church
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "px-2 py-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-smooth whitespace-nowrap",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-primary-lighter hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};