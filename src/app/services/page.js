import Link from "next/link";
import { getAllServices } from "@/lib/service-helpers";

export const metadata = {
  title: "Services | Nebsam Digital Solutions",
  description:
    "Vehicle Tracking, Fuel Monitoring, Hybrid Car Alarms, Video Telematics, Radio Calls, School Bus Solutions, Speed Governors, Smart Cut Out Systems, and Android Radios installation.",
};

export default function ServicesPage() {
  const all = getAllServices();

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="text-[color:var(--muted)]">
          Nairobi & Mombasa + Nationwide.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {all.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-2xl border p-6 hover:bg-white/5 transition"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{s.summary}</p>
            <p className="mt-4 text-sm text-[color:var(--muted)]">View →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}