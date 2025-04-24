
import SentimentScanner from "@/components/dashboard/SentimentScanner";
import Header from "@/components/layout/Header";

export default function MarketSentiment() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <div className="container py-12">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-heading font-bold">Market Sentiment</h1>
            <p className="text-muted-foreground text-lg">
              Real-time market sentiment analysis from social media and news sources
            </p>
          </div>
          <SentimentScanner />
        </div>
      </div>
    </div>
  );
}
