import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  const jsonLd = {
    "@context": "shizuku-restaurant.vercel.app",
    "@type": "Restaurant",
    name: "Shizuku",
    servesCuisine: "Japonaise — Omakase",
    priceRange: "€€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue de l'Encre",
      addressLocality: "Bruxelles",
      postalCode: "1000",
      addressCountry: "BE",
    },
    telephone: "+32473468044",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main>
      <Header />
      <Hero />
      <Concept />
      <Gallery />
      <Menu />
      <Reservation />
      <Footer />
    </main>
    </>
  );
}
