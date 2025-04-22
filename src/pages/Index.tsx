
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import MarketTicker from "@/components/ui/market-ticker";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedArticles />
        
        <section className="py-16 container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-heading font-bold">
                  Why Investor GPS?
                </h2>
                <p className="text-muted-foreground">
                  Navigate financial markets with confidence using our data-driven approach
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Data-Driven Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our analytics are based on comprehensive market data, not opinions or emotions.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Real-Time Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay ahead with real-time market sentiment analysis and breaking news.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Expert Perspective</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team of analysts brings decades of market experience to our content.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Unbiased Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Independent analysis without conflicts of interest or hidden agendas.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "Investor GPS has transformed how I navigate market volatility. Their macroeconomic indicators gave me confidence to stay invested during recent uncertainty."
                  <footer className="mt-2 font-medium not-italic">
                    — Michael T., Portfolio Manager
                  </footer>
                </blockquote>
              </div>
            </div>
            
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
