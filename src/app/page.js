import BuildSomething from "@/components/home/BuildSomething";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import GlobalReach from "@/components/home/GlobalReach";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalReach />
      <BuildSomething />
      <ContactUs />
      <Newsletter />
      <Footer />
    </>
  );
}
