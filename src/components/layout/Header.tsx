
import { Link } from "react-router-dom";
import { Bell, ChartBarIncreasing, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-4">
          <ChartBarIncreasing className="h-6 w-6 text-primary" />
          <Link to="/" className="font-heading text-2xl font-bold text-primary">
            Investor GPS
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        
        <div className="hidden md:flex relative max-w-sm items-center space-x-2 mx-auto">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-8 w-[300px] bg-secondary"
          />
        </div>
        
        <div className="flex items-center ml-auto">
          <Button variant="ghost" size="icon" className="mr-2">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm" className="ml-4 hidden md:flex">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}
