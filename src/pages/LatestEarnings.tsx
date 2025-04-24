
import EarningsSentiment from "@/components/dashboard/EarningsSentiment";
import Header from "@/components/layout/Header";

export default function LatestEarnings() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <div className="container py-12">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-heading font-bold">Latest Earnings</h1>
            <p className="text-muted-foreground text-lg">
              Earnings reports analysis and market reactions
            </p>
          </div>
          <EarningsSentiment />
        </div>
      </div>
    </div>
  );
}
