import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ResponsiveNav from "./components/NavBar/ResponsiveNav";
import ClientOnly from "./components/ClientOnly";

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
        <ResponsiveNav />
        <main className="relative overflow-hidden">
          <ClientOnly>{children}</ClientOnly>
        </main>
        <Footer />
      </body>
    </html>
  );
}
