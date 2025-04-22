
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartBarIncreasing, TrendingDown, TrendingUp } from "lucide-react";

interface MacroIndicator {
  name: string;
  value: number;
  prevValue: number;
  change: number;
  signal: 'bullish' | 'neutral' | 'bearish';
  description: string;
}

interface MacrometerCardProps {
  title: string;
  description: string;
  indicators: MacroIndicator[];
}

export default function MacrometerCard({ title, description, indicators }: MacrometerCardProps) {
  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'bullish':
        return 'bg-bullish text-white';
      case 'neutral':
        return 'bg-neutral text-white';
      case 'bearish':
        return 'bg-bearish text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSignalIcon = (signal: string) => {
    switch (signal) {
      case 'bullish':
        return <TrendingUp className="h-3.5 w-3.5" />;
      case 'bearish':
        return <TrendingDown className="h-3.5 w-3.5" />;
      default:
        return <ChartBarIncreasing className="h-3.5 w-3.5" />;
    }
  };

  // Calculate overall market signal
  const signalCounts = indicators.reduce(
    (acc, indicator) => {
      acc[indicator.signal]++;
      return acc;
    },
    { bullish: 0, neutral: 0, bearish: 0 }
  );
  
  let overallSignal: 'bullish' | 'neutral' | 'bearish' = 'neutral';
  if (signalCounts.bullish > signalCounts.bearish && signalCounts.bullish > signalCounts.neutral) {
    overallSignal = 'bullish';
  } else if (signalCounts.bearish > signalCounts.bullish && signalCounts.bearish > signalCounts.neutral) {
    overallSignal = 'bearish';
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <Badge className={getSignalColor(overallSignal)} variant="secondary">
            <span className="flex items-center">
              {getSignalIcon(overallSignal)}
              <span className="ml-1 capitalize">{overallSignal}</span>
            </span>
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {indicators.map((indicator) => (
            <div key={indicator.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{indicator.name}</span>
                <Badge className={getSignalColor(indicator.signal)} variant="secondary">
                  <span className="flex items-center text-xs">
                    {getSignalIcon(indicator.signal)}
                    <span className="ml-1 capitalize">{indicator.signal}</span>
                  </span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">{indicator.value.toFixed(1)}</span>
                <span className={`text-xs ${indicator.change >= 0 ? 'text-bullish' : 'text-bearish'}`}>
                  {indicator.change >= 0 ? '+' : ''}{indicator.change.toFixed(1)}
                </span>
                <Progress 
                  value={Math.abs(indicator.value) / 10 * 100} 
                  className={`h-2 ${
                    indicator.signal === 'bullish' 
                      ? 'bg-bullish/20' 
                      : indicator.signal === 'bearish' 
                        ? 'bg-bearish/20' 
                        : 'bg-neutral/20'
                  }`}
                />
              </div>
              <p className="text-xs text-muted-foreground">{indicator.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
