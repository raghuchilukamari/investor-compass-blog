
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MarketData {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

// Mock market data
const initialMarketData: MarketData[] = [
  { name: "S&P 500", price: 5278.12, change: 23.45, changePercent: 0.45 },
  { name: "NASDAQ", price: 16784.56, change: 112.78, changePercent: 0.67 },
  { name: "DOW", price: 38956.78, change: -45.67, changePercent: -0.12 },
  { name: "Gold", price: 2354.80, change: 12.40, changePercent: 0.53 },
  { name: "Treasury 10Y", price: 4.48, change: -0.05, changePercent: -1.10 },
  { name: "USD Index", price: 104.25, change: 0.34, changePercent: 0.33 },
  { name: "Bitcoin", price: 64250.75, change: 1250.50, changePercent: 1.98 },
  { name: "Crude Oil", price: 78.35, change: -0.45, changePercent: -0.57 },
];

export default function MarketTicker() {
  const [marketData, setMarketData] = useState<MarketData[]>(initialMarketData);

  // Simulate random price changes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData =>
        prevData.map(item => {
          const changeAmount = item.price * (Math.random() * 0.02 - 0.01);
          const newPrice = Number((item.price + changeAmount).toFixed(2));
          const newChange = Number((item.change + changeAmount).toFixed(2));
          const newChangePercent = Number(((newChange / (item.price - item.change)) * 100).toFixed(2));
          
          return {
            ...item,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
          };
        })
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-secondary/80 border-y overflow-hidden py-2">
      <div className="flex whitespace-nowrap animate-ticker">
        {marketData.concat(marketData).map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="inline-flex items-center mx-4"
          >
            <span className="font-medium text-sm">{item.name}</span>
            <span className="ml-2 text-sm">{item.price.toLocaleString('en-US', { 
              minimumFractionDigits: item.name === "Treasury 10Y" ? 2 : 2,
              maximumFractionDigits: item.name === "Treasury 10Y" ? 2 : 2
            })}</span>
            <div 
              className={`ml-2 flex items-center ${
                item.change >= 0 ? 'text-bullish' : 'text-bearish'
              }`}
            >
              {item.change >= 0 ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              <span className="text-xs">
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)} ({item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
