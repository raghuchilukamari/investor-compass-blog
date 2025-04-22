
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketTicker from "@/components/ui/market-ticker";
import MacrometerCard from "@/components/dashboard/MacrometerCard";
import SentimentScanner from "@/components/dashboard/SentimentScanner";
import EarningsSentiment from "@/components/dashboard/EarningsSentiment";

// Mock data
const macroEconomicIndicators = [
  {
    name: "Inflation (CPI)",
    value: 3.2,
    prevValue: 3.4,
    change: -0.2,
    signal: "neutral" as const,
    description: "Consumer Price Index trending down, but still above target",
  },
  {
    name: "Unemployment Rate",
    value: 3.8,
    prevValue: 3.7,
    change: 0.1,
    signal: "neutral" as const,
    description: "Slight increase but remains historically low",
  },
  {
    name: "GDP Growth (QoQ)",
    value: 2.1,
    prevValue: 1.8,
    change: 0.3,
    signal: "bullish" as const,
    description: "Economy expanding at a healthy pace",
  },
  {
    name: "Fed Funds Rate",
    value: 5.25,
    prevValue: 5.50,
    change: -0.25,
    signal: "bullish" as const,
    description: "First rate cut after tightening cycle",
  },
  {
    name: "Yield Curve (10Y-2Y)",
    value: -0.2,
    prevValue: -0.4,
    change: 0.2,
    signal: "bearish" as const,
    description: "Still inverted, historical recession indicator",
  },
];

const marketIndicators = [
  {
    name: "VIX",
    value: 16.2,
    prevValue: 18.5,
    change: -2.3,
    signal: "bullish" as const,
    description: "Market volatility declining, indicating comfort",
  },
  {
    name: "S&P 500 PE Ratio",
    value: 22.4,
    prevValue: 21.8,
    change: 0.6,
    signal: "neutral" as const,
    description: "Slightly above historical average",
  },
  {
    name: "Put/Call Ratio",
    value: 0.78,
    prevValue: 0.85,
    change: -0.07,
    signal: "bullish" as const,
    description: "Sentiment improving as protective positions decrease",
  },
  {
    name: "NYSE Advance/Decline",
    value: 1.25,
    prevValue: 0.95,
    change: 0.30,
    signal: "bullish" as const,
    description: "Market breadth improving, widespread participation",
  },
  {
    name: "High Yield Spreads",
    value: 3.75,
    prevValue: 3.45,
    change: 0.30,
    signal: "bearish" as const,
    description: "Credit spreads widening, indicating increased risk",
  },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <MarketTicker />
      
      <div className="container py-6 space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-heading font-bold">Market Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time analysis and insights to navigate financial markets
          </p>
        </div>
        
        <Tabs defaultValue="macrometer" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="macrometer">Macrometer</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="macrometer" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <MacrometerCard 
                title="Macroeconomic Indicators" 
                description="Key economic data signals and trends"
                indicators={macroEconomicIndicators}
              />
              <MacrometerCard 
                title="Market Indicators" 
                description="Technical and sentiment market metrics"
                indicators={marketIndicators}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="sentiment" className="space-y-4">
            <SentimentScanner />
          </TabsContent>
          
          <TabsContent value="earnings" className="space-y-4">
            <EarningsSentiment />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
