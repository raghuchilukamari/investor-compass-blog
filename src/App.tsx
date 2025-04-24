import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import MarketMacrometer from "./pages/MarketMacrometer";
import MarketSentiment from "./pages/MarketSentiment";
import LatestEarnings from "./pages/LatestEarnings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/market-macrometer" element={<MarketMacrometer />} />
          <Route path="/market-sentiment" element={<MarketSentiment />} />
          <Route path="/latest-earnings" element={<LatestEarnings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
