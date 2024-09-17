import Benefit from "@/components/Benefit";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Testi from "@/components/testi";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefit />
      <Hero2 />
      <Product />
      <Testi />
      <Join />
      <Footer />
    </div>
  );
}
