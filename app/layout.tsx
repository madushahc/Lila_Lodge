import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import ResponsiveNav from "./components/NavBar/ResponsiveNav";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
  title: "Lila Lodge - Luxurious Villas in Bentota",
  description:
    "Discover Lila Lodge, a luxurious villa in Bentota offering serene views, modern amenities, and an unforgettable experience.",
  openGraph: {
    title: "Lila Lodge - Luxurious Villas in Bentota",
    description:
      "Discover Lila Lodge, a luxurious villa in Bentota offering serene views, modern amenities, and an unforgettable experience.",
    url: "https://www.lilalodge.com/",
    siteName: "Lila Lodge",
    images: [
      {
        url: "https://www.lilalodge.com/public/_O4A8549.jpg",

        width: 800,
        height: 600,
        alt: "Lila Lodge - Luxurious Villas in Bentota",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lila Lodge | Bentota</title>
        <meta
          name="description"
          content="Escape to serenity at Lila Lodge in Bentota, Sri Lanka."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Lila Lodge",
              description:
                "Escape to serenity at Lila Lodge, a charming retreat in Bentota, Sri Lanka.",
              url: "https://www.lilalodge.com/",
              telephone: "+94 71 424 1951",
              image: "https://www.lilalodge.com/_O4A8549.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lila Lodge, Kadiyangoda Road",
                addressLocality: "Bentota",
                addressRegion: "Southern Province",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.4253,
                longitude: 79.9973,
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Beach Access",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free Wi-Fi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air-conditioned Rooms",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Garden View",
                  value: true,
                },
              ],
              checkinTime: "2:00",
              checkoutTime: "12:00",
            }),
          }}
        ></script>
      </head>
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
