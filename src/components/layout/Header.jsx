"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-[color:var(--bg)]/70 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg)]/50"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-wide text-[color:var(--text)]">
            Nebsam
          </span>
          <span className="text-sm font-medium text-[color:var(--muted)] group-hover:text-[color:var(--text)] transition">
            Digital Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm text-[color:var(--muted)] hover:text-[color:var(--text)] transition" href="/services">
            Services
          </Link>
          <Link className="text-sm text-[color:var(--muted)] hover:text-[color:var(--text)] transition" href="/about">
            About
          </Link>
          <Link className="text-sm text-[color:var(--muted)] hover:text-[color:var(--text)] transition" href="/contact">
            Contact
          </Link>
        </nav>

        <a
          href="https://wa.me/254759000111?text=Hello%20Nebsam%20Digital%20Solutions%2C%20I%27d%20like%20to%20inquire."
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-[color:var(--text)] hover:bg-white/5 transition"
          style={{ borderColor: "var(--border)" }}
        >
          <PhoneCall size={16} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}