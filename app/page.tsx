import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
