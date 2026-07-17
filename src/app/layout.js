import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://shizuku.vercel.app"),
  title: "Shizuku — Omakase | Restaurant japonais étoilé à Bruxelles",
  description:
    "Restaurant omakase étoilé à Bruxelles. Douze services au comptoir, huit places, un menu unique chaque soir composé par le chef. Réservation par téléphone.",
  openGraph: {
    title: "Shizuku — Omakase",
    description:
      "Douze services au comptoir. Une soirée, un chef, le geste juste.",
    locale: "fr_BE",
    type: "website",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
