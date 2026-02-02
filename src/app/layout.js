import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Marquee from "@/components/ui/Marquee";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { buildOrganizationJsonLd } from "@/lib/seo-jsonld";

export const metadata = {
  title: "Nebsam Digital Solutions",
  description: "Nairobi & Mombasa + Nationwide",
};

export default function RootLayout({ children }) {
  const orgJson = buildOrganizationJsonLd();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body>
        {gtmId ? (
          <>
            <Script
              id="gtm-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />

        <Header />
        <Marquee />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}