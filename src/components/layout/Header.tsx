
import { Link } from "react-router-dom";
import { ChartBarIncreasing, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handleSubscribeClick = () => {
    const newsletterSection = document.querySelector('#newsletter-section');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <ChartBarIncreasing className="h-6 w-6 text-primary" />
          <Link to="/" className="font-heading text-2xl font-bold text-primary">
            Investor GPS
          </Link>
        </div>
        
        <div className="flex items-center ml-auto">
          <Button variant="ghost" size="icon" className="mr-2">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4 hidden md:flex"
            onClick={handleSubscribeClick}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}
