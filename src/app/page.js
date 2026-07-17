import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Concept />
      <Gallery />
      <Menu />
      <Reservation />
      <Footer />
    </main>
  );
}
