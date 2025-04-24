
import SentimentScanner from "@/components/dashboard/SentimentScanner";

export default function MarketSentiment() {
  return (
    <div className="min-h-screen bg-background">
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
  );
}
