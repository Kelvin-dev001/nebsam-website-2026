import "./globals.css";
import Header from "@/components/layout/Header";
import Marquee from "@/components/ui/Marquee";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata = {
  title: "Nebsam Digital Solutions",
  description: "Nairobi & Mombasa + Nationwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Marquee />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}