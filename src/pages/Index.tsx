
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import MarketTicker from "@/components/ui/market-ticker";
import MarketInsightsOverlay from "@/components/home/MarketInsightsOverlay";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />
      <main className="flex-grow">
        <HeroSection />
        <MarketInsightsOverlay />
        <FeaturedArticles />
        
        <section className="py-16 container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Articles will be stacked in a 2-column grid */}
                <FeaturedArticles compact />
              </div>
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
