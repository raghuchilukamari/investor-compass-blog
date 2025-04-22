
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-secondary/20">
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
}
