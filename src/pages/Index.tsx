const isLoggedIn = localStorage.getItem("isLoggedIn");
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { SectionsOverview } from "@/components/home/SectionsOverview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  // ✅ MUST be inside the component
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* 👇 THIS is where login-based UI logic goes */}
        {isLoggedIn && (
          <div className="px-6 py-4 text-xl font-semibold">
            Welcome back 👋
          </div>
        )}

        <HeroSection />
        <FeaturesSection />
        <SectionsOverview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

