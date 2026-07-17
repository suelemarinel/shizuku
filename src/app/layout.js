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
  title: "Shizuku — Omakase",
  description:
    "Restaurant omakase étoilé. Une expérience culinaire japonaise en douze services, au comptoir.",
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
