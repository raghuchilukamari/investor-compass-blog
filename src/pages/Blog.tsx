
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarketTicker from "@/components/ui/market-ticker";
import BlogCard from "@/components/blog/BlogCard";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartBarIncreasing, ChartColumnIncreasing, Search, TrendingDown, TrendingUp } from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: "fed-rate-decision",
    title: "Fed Signals Potential Rate Cuts: Market Implications",
    excerpt: "The Federal Reserve has indicated a shift in monetary policy. We analyze what this means for different asset classes and investment strategies.",
    date: "April 18, 2023",
    author: {
      name: "Jennifer Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    categories: ["Monetary Policy", "Market Strategy"],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "tech-sector-analysis",
    title: "Tech Sector Analysis: Growth Opportunities in AI and Semiconductor Space",
    excerpt: "With the AI revolution gaining momentum, we look at key players positioned to benefit from continued technological advancement.",
    date: "April 15, 2023",
    author: {
      name: "Michael Reynolds",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    categories: ["Technology", "Sector Analysis"],
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "inflation-trends",
    title: "Inflation Trends: Is the Worst Behind Us?",
    excerpt: "Recent data suggests inflation may be cooling. We examine the numbers and what they portend for the economy and financial markets.",
    date: "April 12, 2023",
    author: {
      name: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    categories: ["Inflation", "Economic Analysis"],
    imageSrc: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "commodities-outlook",
    title: "Commodities Outlook: Navigating the Energy Transition",
    excerpt: "As the world shifts toward renewable energy, certain commodities are positioned for structural growth. Here's our investment thesis.",
    date: "April 10, 2023",
    author: {
      name: "Robert Martinez",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    categories: ["Commodities", "Energy"],
    imageSrc: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "small-cap-opportunities",
    title: "Small Cap Opportunities in a Changing Market Environment",
    excerpt: "With large caps dominating returns, we explore overlooked small cap companies with robust fundamentals and growth potential.",
    date: "April 8, 2023",
    author: {
      name: "Lisa Johnson",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    categories: ["Small Caps", "Equity Analysis"],
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "interest-rates-housing",
    title: "Rising Interest Rates and the Housing Market: A Detailed Analysis",
    excerpt: "As central banks continue to raise interest rates, we analyze the impact on housing markets and potential investment strategies.",
    date: "April 5, 2023",
    author: {
      name: "David Parker",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    categories: ["Real Estate", "Interest Rates"],
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
  },
  {
    id: "cryptocurrency-regulation",
    title: "Cryptocurrency Regulation: Implications for the Digital Asset Space",
    excerpt: "With governments worldwide implementing regulatory frameworks, we examine how increased regulation might reshape cryptocurrency markets.",
    date: "April 2, 2023",
    author: {
      name: "Alex Chen",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    categories: ["Cryptocurrency", "Regulation"],
    imageSrc: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: "esg-investing",
    title: "ESG Investing: Beyond the Hype - Finding Quality Opportunities",
    excerpt: "Environmental, Social, and Governance factors continue to influence investment decisions. We examine where genuine value can be found.",
    date: "March 30, 2023",
    author: {
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    categories: ["ESG", "Investment Strategy"],
    imageSrc: "https://images.unsplash.com/photo-1491926626787-62db157af940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const categories = [
  "Market Strategy",
  "Economic Analysis",
  "Sector Analysis",
  "Monetary Policy",
  "Equity Analysis",
  "Cryptocurrencies",
  "Commodities",
  "Real Estate",
  "ESG",
  "Technology",
  "Regulation"
];

export default function Blog() {
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const hasMore = displayCount < blogPosts.length;
  
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts;
  
  const showMore = () => {
    setDisplayCount(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChartBarIncreasing className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                Market Analysis & Investment Insights
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Expert analysis and actionable insights to navigate today's complex financial markets
              </p>
              
              <div className="flex justify-center">
                <div className="relative max-w-lg w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..."
                    className="pl-10 h-11"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Market Summary */}
        <section className="py-8 bg-secondary/30">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center">
                <h2 className="text-xl font-heading font-semibold mr-4">Market Pulse</h2>
                <div className="hidden md:flex space-x-2">
                  <Badge className="bg-bullish/10 text-bullish border-bullish/30" variant="outline">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    <span>Bullish Signals</span>
                  </Badge>
                  <Badge className="bg-neutral/10 text-neutral border-neutral/30" variant="outline">
                    <ChartColumnIncreasing className="h-3.5 w-3.5 mr-1" />
                    <span>Mixed Signals</span>
                  </Badge>
                  <Badge className="bg-bearish/10 text-bearish border-bearish/30" variant="outline">
                    <TrendingDown className="h-3.5 w-3.5 mr-1" />
                    <span>Bearish Signals</span>
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Full Dashboard
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories and Articles */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="order-2 lg:order-1 lg:col-span-1">
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-heading font-semibold">
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant={selectedCategory === null ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(null)}
                      >
                        All
                      </Badge>
                      {categories.map(category => (
                        <Badge 
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Newsletter */}
                  <NewsletterSignup />
                  
                  {/* Featured Authors */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-heading font-semibold">
                      Featured Authors
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="Jennifer Chen"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Jennifer Chen</p>
                          <p className="text-xs text-muted-foreground">Macro Strategist</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Michael Reynolds"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Michael Reynolds</p>
                          <p className="text-xs text-muted-foreground">Tech Analyst</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://randomuser.me/api/portraits/women/68.jpg"
                          alt="Sarah Williams"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Sarah Williams</p>
                          <p className="text-xs text-muted-foreground">Chief Economist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="order-1 lg:order-2 lg:col-span-3">
                <div className="space-y-8">
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {filteredPosts.slice(0, displayCount).map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                  
                  {hasMore && (
                    <div className="text-center">
                      <Button onClick={showMore} variant="outline" size="lg">
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
