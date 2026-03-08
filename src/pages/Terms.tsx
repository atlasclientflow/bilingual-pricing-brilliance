import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => (
  <LanguageProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 container mx-auto px-4 py-16 prose max-w-3xl">
        <h1>Terms of Service</h1>
        <p>By using our services, you agree to these terms and conditions.</p>
        <h2>Services</h2>
        <p>We provide technical consulting, WhatsApp Business API setup, chatbot development, and related digital services.</p>
        <h2>Payment</h2>
        <p>50% payment is required upfront, with the balance due upon service completion.</p>
        <h2>Contact</h2>
        <p>For questions, contact us at ahmedmokireldin@gmail.com</p>
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
export default Terms;
