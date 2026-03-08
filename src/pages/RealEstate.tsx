import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RealEstate = () => (
  <LanguageProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Real Estate Marketing</h1>
        <p className="text-muted-foreground">Real estate services - coming soon.</p>
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
export default RealEstate;
