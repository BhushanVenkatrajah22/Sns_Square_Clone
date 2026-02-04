import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import LeadershipSection from "@/components/LeadershipSection";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <PageTitle />
        <LeadershipSection />
        <CertificateSection />
      </main>
      <Footer />
    </div>
  );
}
