
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock sentiment data
const sentimentData = [
  {
    source: "Twitter",
    text: "Markets are looking very strong right now. S&P500 to hit all-time highs soon. #Bullish",
    sentiment: "positive",
    time: "2 hours ago",
    user: "MarketWatcher",
    engagement: 243,
  },
  {
    source: "Bloomberg",
    text: "Federal Reserve signals potential rate cuts later this year, markets respond positively",
    sentiment: "positive",
    time: "5 hours ago",
    user: "Bloomberg Finance",
    engagement: 562,
  },
  {
    source: "Reddit",
    text: "Unsure about market direction with these mixed signals from the Fed. What do you think?",
    sentiment: "neutral",
    time: "3 hours ago",
    user: "InvestorGuy92",
    engagement: 87,
  },
  {
    source: "CNBC",
    text: "Tech stocks facing pressure as regulations tighten. Several major companies down 3% today.",
    sentiment: "negative",
    time: "1 hour ago",
    user: "CNBC Markets",
    engagement: 412,
  },
  {
    source: "Twitter",
    text: "Be careful out there. This market rally is built on sand. Recession indicators flashing red.",
    sentiment: "negative",
    time: "4 hours ago",
    user: "BearMarketProphet",
    engagement: 178,
  },
  {
    source: "Financial Times",
    text: "Analysis suggests market is fairly valued at current levels despite recent volatility",
    sentiment: "neutral",
    time: "12 hours ago",
    user: "FT Markets",
    engagement: 325,
  }
];

export default function SentimentScanner() {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-bullish/10 text-bullish border-bullish/30';
      case 'negative':
        return 'bg-bearish/10 text-bearish border-bearish/30';
      default:
        return 'bg-neutral/10 text-neutral border-neutral/30';
    }
  };

  const getSentimentLabel = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'Bullish';
      case 'negative':
        return 'Bearish';
      default:
        return 'Neutral';
    }
  };

  // Calculate overall sentiment
  const sentimentCounts = sentimentData.reduce(
    (acc, item) => {
      acc[item.sentiment]++;
      return acc;
    },
    { positive: 0, neutral: 0, negative: 0 }
  );
  
  const totalSentiments = sentimentData.length;
  const bullishPercentage = Math.round((sentimentCounts.positive / totalSentiments) * 100);
  const bearishPercentage = Math.round((sentimentCounts.negative / totalSentiments) * 100);
  const neutralPercentage = Math.round((sentimentCounts.neutral / totalSentiments) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-heading">Sentiment Scanner</CardTitle>
          <div className="flex space-x-2">
            <Badge variant="outline" className="bg-bullish/10 text-bullish border-bullish/30">
              Bullish {bullishPercentage}%
            </Badge>
            <Badge variant="outline" className="bg-neutral/10 text-neutral border-neutral/30">
              Neutral {neutralPercentage}%
            </Badge>
            <Badge variant="outline" className="bg-bearish/10 text-bearish border-bearish/30">
              Bearish {bearishPercentage}%
            </Badge>
          </div>
        </div>
        <CardDescription>Real-time market sentiment from social media and news sources</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
          {sentimentData.map((item, index) => (
            <div key={index} className="border rounded-lg p-3 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    {item.source}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{item.user}</span>
                </div>
                <Badge className={getSentimentColor(item.sentiment)}>
                  {getSentimentLabel(item.sentiment)}
                </Badge>
              </div>
              <p className="text-sm mb-2">{item.text}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{item.time}</span>
                <span>{item.engagement} engagements</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          Load More Results
        </Button>
      </CardContent>
    </Card>
  );
}
