import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ParticlesBackground from "./components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
