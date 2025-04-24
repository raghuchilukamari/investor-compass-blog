
import { Card } from "@/components/ui/card";
import MacrometerCard from "@/components/dashboard/MacrometerCard";
import Header from "@/components/layout/Header";

// Using the same mock data from the dashboard
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

export default function MarketMacrometer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <div className="container py-12">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-heading font-bold">Market Macrometer</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive analysis of key economic and market indicators
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </div>
  );
}
