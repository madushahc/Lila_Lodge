import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Lila Lodge",
  description: "Lila Lodge is Vila at Bentota",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
