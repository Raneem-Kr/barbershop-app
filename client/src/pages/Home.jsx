import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Gallerie from "../components/Gallerie"
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallerie />
      <WhyUs />
      <Contact />
      <Footer />
      
    </>
  );
}
