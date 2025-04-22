
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIncreasing } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would normally send this to your newsletter service
      setIsSubscribed(true);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-0">
      <CardContent className="p-6 md:p-8">
        {!isSubscribed ? (
          <>
            <div className="mb-6 flex items-center justify-center">
              <ChartBarIncreasing className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="text-center text-xl font-heading font-bold mb-2">
              Stay Ahead of the Market
            </h3>
            
            <p className="text-center text-muted-foreground mb-6">
              Subscribe to our free newsletter for expert market analysis, investment insights, and exclusive content.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-11"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="w-full h-11" type="submit">
                Subscribe Now
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-center text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
              We'll never share your information.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
            <p className="text-muted-foreground">
              You've successfully joined our community of investors. Look for our welcome email in your inbox.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
