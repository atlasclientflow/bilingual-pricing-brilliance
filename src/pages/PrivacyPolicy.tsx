import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <LanguageProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 container mx-auto px-4 py-16 prose max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, such as name, email, and phone number when you contact us or use our services.</p>
        <h2>Contact</h2>
        <p>For questions about this policy, contact us at ahmedmokireldin@gmail.com</p>
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
export default PrivacyPolicy;
