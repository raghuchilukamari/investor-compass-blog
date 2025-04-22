
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DashboardLayout from "@/components/dashboard/Layout";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DashboardLayout />
      </main>
      <Footer />
    </div>
  );
}
