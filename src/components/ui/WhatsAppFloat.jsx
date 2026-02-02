"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function messageForPath(pathname) {
  // Expand later with service/subservice awareness
  if (pathname.startsWith("/services")) {
    return "Hello Nebsam Digital Solutions, I'd like to learn more about your services.";
  }
  if (pathname.startsWith("/contact")) {
    return "Hello Nebsam Digital Solutions, I'd like to get in touch.";
  }
  return "Hello Nebsam Digital Solutions, I'd like to inquire.";
}

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const href = buildWhatsAppLink({
    phone: "254759000111",
    message: messageForPath(pathname || "/"),
  });

  return (
    <a
      href={href}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-95"
      style={{
        background: "linear-gradient(135deg, var(--primary), var(--primary-2))",
      }}
      aria-label="Chat with Nebsam on WhatsApp"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}