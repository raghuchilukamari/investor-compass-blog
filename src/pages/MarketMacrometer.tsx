
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChartBarIncreasing, TrendingDown, TrendingUp, Info, ChartLine } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/layout/Header";

// Economic indicators data with MoM and YoY changes
const economicIndicators = [
  {
    category: "Employment Indicators",
    description: "Data showing the health and trends of the labor market",
    indicators: [
      {
        name: "Non-Farm Payrolls",
        value: 216,
        unit: "K",
        prevValue: 142,
        momChange: 52.1,
        yoyValue: 236,
        yoyChange: -8.5,
        signal: "bullish" as const,
        description: "Monthly report on new jobs added; strong growth is bullish for markets",
        impact: "Strong job growth suggests economic expansion and typically supports higher stock prices, but may raise inflation concerns",
        details: "Non-farm payrolls measure the number of workers in the U.S. excluding farm workers and some other job categories. It is released monthly by the Bureau of Labor Statistics and is considered one of the most important economic indicators."
      },
      {
        name: "Unemployment Rate",
        value: 3.8,
        unit: "%",
        prevValue: 3.9,
        momChange: -0.1,
        yoyValue: 3.6,
        yoyChange: 0.2,
        signal: "neutral" as const,
        description: "Percentage of labor force that is jobless and seeking employment",
        impact: "Low unemployment typically indicates economic strength but can lead to wage inflation concerns",
        details: "The unemployment rate represents the percentage of the labor force that is unemployed and actively seeking employment. A rising rate can indicate economic slowdown while a falling rate suggests economic expansion."
      },
      {
        name: "Initial Jobless Claims",
        value: 221,
        unit: "K",
        prevValue: 214,
        momChange: 3.3,
        yoyValue: 239,
        yoyChange: -7.5,
        signal: "neutral" as const,
        description: "Weekly number of new unemployment insurance claims",
        impact: "Rising claims may signal weakening labor market, bearish for stocks",
        details: "Initial jobless claims track the number of people who have filed jobless claims for the first time during the specified period. High claims suggest layoffs and economic weakness."
      },
      {
        name: "Labor Force Participation",
        value: 62.7,
        unit: "%",
        prevValue: 62.5,
        momChange: 0.2,
        yoyValue: 62.6,
        yoyChange: 0.1,
        signal: "bullish" as const,
        description: "Percentage of working age population in the labor force",
        impact: "Rising participation is generally bullish, indicating confidence in job prospects",
        details: "Labor force participation rate measures the percentage of the working-age population that is either employed or actively looking for work. It provides insights into structural changes in the economy."
      }
    ]
  },
  {
    category: "Inflation Indicators",
    description: "Metrics measuring price changes across the economy",
    indicators: [
      {
        name: "Consumer Price Index (CPI)",
        value: 3.2,
        unit: "%",
        prevValue: 3.4,
        momChange: -0.2,
        yoyValue: 3.8,
        yoyChange: -0.6,
        signal: "neutral" as const,
        description: "Measures consumer inflation; high CPI may lead to rate hikes",
        impact: "Declining inflation is positive for markets as it reduces pressure for rate hikes",
        details: "CPI measures the average change over time in prices paid by consumers for a market basket of consumer goods and services. It is the most widely used measure of inflation."
      },
      {
        name: "Producer Price Index (PPI)",
        value: 2.1,
        unit: "%",
        prevValue: 2.3,
        momChange: -0.2,
        yoyValue: 2.9,
        yoyChange: -0.8,
        signal: "bullish" as const,
        description: "Wholesale-level inflation; affects input costs for businesses",
        impact: "Lower PPI suggests easing cost pressures, potentially better margins for companies",
        details: "PPI measures the average change over time in selling prices received by domestic producers for their output. It is a leading indicator of consumer price inflation."
      },
      {
        name: "PCE Price Index",
        value: 2.5,
        unit: "%",
        prevValue: 2.6,
        momChange: -0.1,
        yoyValue: 2.9,
        yoyChange: -0.4,
        signal: "bullish" as const,
        description: "Fed's preferred inflation metric; measures personal consumption",
        impact: "Approaching Fed's 2% target, reducing need for restrictive monetary policy",
        details: "The Personal Consumption Expenditures (PCE) Price Index measures price changes for household goods and services. It is the Federal Reserve's preferred inflation measure for setting monetary policy."
      }
    ]
  },
  {
    category: "Interest Rate & Monetary Policy",
    description: "Central bank policies and interest rate trends",
    indicators: [
      {
        name: "Federal Funds Rate",
        value: 5.25,
        unit: "%",
        prevValue: 5.50,
        momChange: -0.25,
        yoyValue: 5.50,
        yoyChange: -0.25,
        signal: "bullish" as const,
        description: "Target interest rate set by the Federal Reserve",
        impact: "Rate cuts typically boost equity markets and reduce borrowing costs",
        details: "The federal funds rate is the interest rate at which depository institutions trade federal funds with each other overnight. The Fed uses it as a tool to control inflation and economic growth."
      },
      {
        name: "Yield Curve (10Y-2Y)",
        value: -0.2,
        unit: "%",
        prevValue: -0.4,
        momChange: 0.2,
        yoyValue: -0.8,
        yoyChange: 0.6,
        signal: "bearish" as const,
        description: "Difference between 10-year and 2-year Treasury yields",
        impact: "Still inverted, historically a recession indicator, but improving",
        details: "An inverted yield curve occurs when short-term Treasury yields exceed long-term yields. It has historically been a reliable predictor of economic recessions."
      }
    ]
  },
  {
    category: "Growth Indicators",
    description: "Measures of economic output and activity",
    indicators: [
      {
        name: "GDP Growth (QoQ)",
        value: 2.1,
        unit: "%",
        prevValue: 1.6,
        momChange: 0.5,
        yoyValue: 2.5,
        yoyChange: -0.4,
        signal: "bullish" as const,
        description: "Quarterly change in gross domestic product",
        impact: "Solid growth supports equity markets, particularly cyclical sectors",
        details: "Gross Domestic Product measures the monetary value of all finished goods and services made within a country during a specific period. It's the broadest measure of economic activity."
      },
      {
        name: "Industrial Production",
        value: 0.7,
        unit: "%",
        prevValue: 0.3,
        momChange: 0.4,
        yoyValue: 1.2,
        yoyChange: -0.5,
        signal: "bullish" as const,
        description: "Monthly measure of output from manufacturing, mining, and utilities",
        impact: "Accelerating production signals economic expansion, positive for markets",
        details: "Industrial production measures the raw volume of goods produced by industrial facilities such as factories, mines and utilities. It provides insight into manufacturing sector health."
      },
      {
        name: "ISM Manufacturing PMI",
        value: 49.1,
        unit: "",
        prevValue: 47.8,
        momChange: 1.3,
        yoyValue: 46.9,
        yoyChange: 2.2,
        signal: "neutral" as const,
        description: "Index of manufacturing activity; above 50 indicates expansion",
        impact: "Improving but still contracting; suggests gradual manufacturing recovery",
        details: "The ISM Manufacturing PMI is a monthly indicator of economic activity in the manufacturing sector. A reading above 50 indicates expansion while below 50 indicates contraction."
      }
    ]
  },
  {
    category: "Consumer & Business Sentiment",
    description: "Indicators of economic confidence and outlook",
    indicators: [
      {
        name: "Consumer Confidence",
        value: 105.7,
        unit: "",
        prevValue: 102.5,
        momChange: 3.2,
        yoyValue: 101.2,
        yoyChange: 4.5,
        signal: "bullish" as const,
        description: "Index measuring optimism on the economy",
        impact: "Rising confidence suggests continued consumer spending, bullish for markets",
        details: "The Consumer Confidence Index measures the degree of optimism that consumers feel about the overall state of the economy and their personal financial situation. Higher confidence leads to higher consumer spending."
      },
      {
        name: "Small Business Optimism",
        value: 91.5,
        unit: "",
        prevValue: 91.3,
        momChange: 0.2,
        yoyValue: 93.1,
        yoyChange: -1.6,
        signal: "bearish" as const,
        description: "NFIB index of small business sentiment",
        impact: "Below historical average, indicating concerns among small businesses",
        details: "The NFIB Small Business Optimism Index is a monthly indicator that measures the outlook of small businesses in the United States. It provides insights into hiring, capital outlays, and sales expectations."
      }
    ]
  },
  {
    category: "Credit & Liquidity Indicators",
    description: "Measures of financial system health and credit conditions",
    indicators: [
      {
        name: "Corporate Bond Spreads",
        value: 3.75,
        unit: "%",
        prevValue: 3.45,
        momChange: 0.30,
        yoyValue: 3.95,
        yoyChange: -0.20,
        signal: "bearish" as const,
        description: "Yield difference between corporate and government bonds",
        impact: "Widening spreads indicate increased risk perception in credit markets",
        details: "Corporate bond spreads measure the yield difference between corporate bonds and government bonds of similar maturity. Wider spreads indicate higher perceived risk or deteriorating economic conditions."
      },
      {
        name: "Money Supply (M2)",
        value: -1.2,
        unit: "%",
        prevValue: -1.5,
        momChange: 0.3,
        yoyValue: -2.4,
        yoyChange: 1.2,
        signal: "neutral" as const,
        description: "Year-over-year growth in M2 money supply",
        impact: "Contraction gradually easing, suggesting stabilizing liquidity conditions",
        details: "M2 is a measure of the money supply that includes cash, checking deposits, and easily convertible near money. Changes in M2 are closely watched as an indicator of money supply and future inflation."
      }
    ]
  }
];

const getSignalColor = (signal: string) => {
  switch (signal) {
    case 'bullish':
      return 'bg-green-600 text-white';
    case 'neutral':
      return 'bg-amber-500 text-white';
    case 'bearish':
      return 'bg-red-600 text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getChangeColor = (change: number) => {
  return change >= 0 ? 'text-green-600' : 'text-red-600';
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

export default function MarketMacrometer() {
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (indicatorName: string) => {
    setExpandedDetails(prev => ({
      ...prev,
      [indicatorName]: !prev[indicatorName]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <div className="container py-8">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-heading font-bold">Market Macrometer</h1>
            <p className="text-muted-foreground text-lg">
              Key economic indicators providing insights into market conditions and economic health
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {economicIndicators.map((category) => (
              <AccordionItem 
                key={category.category} 
                value={category.category}
                className="border rounded-lg bg-card shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <ChartLine className="h-5 w-5 mr-2 text-primary" />
                    <div className="text-left">
                      <h3 className="text-xl font-heading font-medium">{category.category}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Indicator</TableHead>
                          <TableHead className="text-right">Current</TableHead>
                          <TableHead className="text-right">MoM Change</TableHead>
                          <TableHead className="text-right">YoY Change</TableHead>
                          <TableHead>Signal</TableHead>
                          <TableHead className="w-1/3">Impact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.indicators.map((indicator) => (
                          <TableRow key={indicator.name}>
                            <TableCell>
                              <div className="font-medium">{indicator.name}</div>
                              <div className="text-xs text-muted-foreground">{indicator.description}</div>
                            </TableCell>
                            <TableCell className="text-right font-mono">
                              {indicator.value}{indicator.unit}
                            </TableCell>
                            <TableCell className={`text-right font-mono ${getChangeColor(indicator.momChange)}`}>
                              {indicator.momChange > 0 ? '+' : ''}{indicator.momChange}{indicator.unit === '%' ? 'pp' : '%'}
                            </TableCell>
                            <TableCell className={`text-right font-mono ${getChangeColor(indicator.yoyChange)}`}>
                              {indicator.yoyChange > 0 ? '+' : ''}{indicator.yoyChange}{indicator.unit === '%' ? 'pp' : '%'}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getSignalColor(indicator.signal)}`} variant="secondary">
                                <span className="flex items-center">
                                  {getSignalIcon(indicator.signal)}
                                  <span className="ml-1 capitalize">{indicator.signal}</span>
                                </span>
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Collapsible>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm">{indicator.impact}</p>
                                  <CollapsibleTrigger
                                    onClick={() => toggleDetails(indicator.name)}
                                    className="rounded-full p-1 hover:bg-muted ml-2 flex-shrink-0"
                                  >
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="mt-2 bg-muted/20 p-3 rounded-md text-sm">
                                  {indicator.details}
                                </CollapsibleContent>
                              </Collapsible>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
