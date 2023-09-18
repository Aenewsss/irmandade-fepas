import About from "@components/components/About";
import Contact from "@components/components/Contact";
import Differentials from "@components/components/Differentials";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Navbar from "@components/components/Navbar";
import Services from "@components/components/Services";
import WhatsAppFixed from "@components/components/WhatsappFixed";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeTop />
      <About />
      <Services />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}
