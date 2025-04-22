
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChartBarIncreasing } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="absolute inset-0 bg-grid-pattern bg-primary/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <ChartBarIncreasing className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Financial Intelligence for the Modern Investor
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Successful investing goes far beyond charts and technical analysis; it requires a deep understanding of market psychology, geopolitical influences, economic news, and – crucially – your own emotional responses. The goal of Investor GPS is to provide tools, and perspective needed to chart your own course towards financial success.
          </p>
          
          <Button asChild size="lg" className="px-8">
            <Link to="/dashboard">Explore Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link to="/blog">Read Latest Analysis</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
