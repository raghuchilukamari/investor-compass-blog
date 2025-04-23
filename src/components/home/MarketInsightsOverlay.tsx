
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ChartBarIncreasing, Calendar } from "lucide-react";

export default function MarketInsightsOverlay() {
  return (
    <div className="container relative -mt-20 mb-12 z-10">
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-heading">Market Macrometer</CardTitle>
              <Badge variant="secondary" className="bg-bullish/10 text-bullish">Bullish</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ChartBarIncreasing className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Overall Outlook</span>
              </div>
              <p className="text-sm text-muted-foreground">
                GDP Growth at 2.1% QoQ, with improving employment data and cooling inflation signals positive economic momentum.
              </p>
              <div className="text-xs text-muted-foreground mt-2">
                Updated 2 hours ago
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-heading">Market Sentiment</CardTitle>
              <Badge variant="secondary" className="bg-neutral/10 text-neutral">Mixed</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Trending Topics</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fed's dovish stance driving positive sentiment, but geopolitical tensions creating uncertainty.
              </p>
              <div className="text-xs text-muted-foreground mt-2">
                Based on 1,234 market discussions
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-heading">Latest Earnings</CardTitle>
              <Badge variant="secondary" className="bg-bullish/10 text-bullish">Beat</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">NVIDIA (NVDA)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Q4 EPS $5.16 vs $4.64 expected, driven by strong AI chip demand and data center growth.
              </p>
              <div className="text-xs text-muted-foreground mt-2">
                Reported yesterday
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
