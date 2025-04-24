
import EarningsSentiment from "@/components/dashboard/EarningsSentiment";

export default function LatestEarnings() {
  return (
    <div className="min-h-screen bg-background">
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
  );
}
