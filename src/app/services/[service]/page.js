import Link from "next/link";
import { notFound } from "next/navigation";
import FAQ from "@/components/ui/FAQ";
import { getServiceBySlug, orderSubservices } from "@/lib/service-helpers";
import { buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo-jsonld";

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) return { title: "Service Not Found | Nebsam Digital Solutions" };

  return {
    title: `${service.name} | Nebsam Digital Solutions`,
    description: service.summary,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const subs = orderSubservices(service);

  const serviceJson = buildServiceJsonLd({
    name: service.name,
    description: service.summary,
    url: `/services/${service.slug}`,
  });

  const faqJson = buildFaqJsonLd(service.faqs || [], {
    pageUrl: `/services/${service.slug}`,
  });

  return (
    <section className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      {service.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      ) : null}

      <header className="space-y-2">
        <p className="text-sm text-[color:var(--muted)]">Service</p>
        <h1 className="text-3xl font-semibold">{service.name}</h1>
        <p className="text-[color:var(--muted)]">{service.summary}</p>
      </header>

      {subs.length ? (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Options</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {subs.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/${service.slug}/${sub.slug}`}
                className="rounded-2xl border p-6 hover:bg-white/5 transition"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{sub.name}</h3>
                  {sub.badge ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[color:var(--text)]">
                      {sub.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {sub.summary}
                </p>
                <p className="mt-4 text-sm text-[color:var(--muted)]">View →</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {service.faqs?.length ? <FAQ items={service.faqs} /> : null}
    </section>
  );
}