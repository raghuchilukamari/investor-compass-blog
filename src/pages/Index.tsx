
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import MarketTicker from "@/components/ui/market-ticker";
import MarketInsightsOverlay from "@/components/home/MarketInsightsOverlay";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />
      <main className="flex-grow">
        <HeroSection />
        <MarketInsightsOverlay />
        <FeaturedArticles />
      </main>
      <Footer />
    </div>
  );
}
