import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MicwaSystem = () => (
  <LanguageProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">N8N Automation Systems</h1>
        <p className="text-muted-foreground">Automation system details - coming soon.</p>
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
export default MicwaSystem;
