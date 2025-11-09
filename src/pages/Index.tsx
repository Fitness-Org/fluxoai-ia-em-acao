import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Security from "@/components/Security";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Results />
      <Security />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
