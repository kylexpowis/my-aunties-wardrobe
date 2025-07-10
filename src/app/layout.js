import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ParticlesBackground from "./components/ParticlesBackground";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "700"], // regular  bold
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "700"], // regular  bold italics too
  subsets: ["latin"],
});

export const metadata = {
  title: "My Aunties Wardrobe",
  description: "Pre loved boutique in Braidwood NSW",
  images: [
    {
      url: "maw_whitelogo.png",
      width: 500,
      height: 500,
      alt: "My Aunties Wardrobe logo on pastel background",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {" "}
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
