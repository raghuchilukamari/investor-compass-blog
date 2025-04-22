
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChartBarIncreasing } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="absolute inset-0 bg-grid-pattern bg-primary/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="container relative pt-8 pb-12 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <ChartBarIncreasing className="h-6 w-6 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Financial Intelligence for the Modern Investor
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Successful investing goes far beyond charts and technical analysis; it requires a deep understanding of market psychology, geopolitical influences, economic news, and – crucially – your own emotional responses. The goal of Investor GPS is to provide tools, and perspective needed to chart your own course towards financial success.
          </p>
        </div>
      </div>
    </div>
  );
}
