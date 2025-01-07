import Form from "../components/Form";
import Image from "next/image";
import React from "react";
import Img8 from "../public/contact image.jpg";

export default function page() {
  return (
    <>
      <head>
        <title>Contact Us | Lila Lodge</title>
        <meta
          name="description"
          content="Get in touch with Lila Lodge for bookings, inquiries, or assistance."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              mainEntity: {
                "@type": "Organization",
                name: "Lila Lodge",
                url: "https://www.lilalodge.com/",
                logo: "https://www.lilalodge.com/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+94 71 424 1951",
                  email: "lilalodgeofficial@gmail.com",
                  contactType: "Customer Service",
                  areaServed: "Sri Lanka",
                  availableLanguage: ["English", "Sinhala"],
                },
              },
            }),
          }}
        />
      </head>
      <div>
        <div className="relative w-full h-[71vh] sm:h-[70vh]">
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
          <Image
            src={Img8}
            alt="Hero Image"
            className="w-full h-full object-cover z-0"
            layout="fill"
          />
        </div>
        <div className="pt-1">
          <Form />
        </div>
      </div>
    </>
  );
}
