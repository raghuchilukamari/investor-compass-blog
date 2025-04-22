
import BlogCard from "@/components/blog/BlogCard";

// Mock blog data
const featuredArticles = [
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
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    featured: true
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
  }
];

export default function FeaturedArticles() {
  // Only show the 4 latest articles horizontally, equal sizing
  return (
    <section className="py-10 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.slice(0, 4).map((article) => (
            <BlogCard key={article.id} {...article} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

