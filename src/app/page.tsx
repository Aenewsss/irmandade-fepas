import About from "@components/components/About";
import Differentials from "@components/components/Differentials";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Navbar from "@components/components/Navbar";
import Products from "@components/components/Products";
import WhatsAppFixed from "@components/components/WhatsappFixed";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeTop />
      <About />
      <Products />
      <Differentials />
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}
