import { notFound } from "next/navigation";
import FAQ from "../../../../components/ui/FAQ";
import { getAllServices, getSubservice } from "../../../../lib/service-helpers";
import { buildServiceJsonLd, buildFaqJsonLd } from "../../../../lib/seo-jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  const all = getAllServices();
  const params = [];

  for (const s of all) {
    for (const sub of s.subservices || []) {
      params.push({ service: s.slug, subservice: sub.slug });
    }
  }

  return params;
}

export function generateMetadata({ params }) {
  const { service, subservice } = getSubservice(params.service, params.subservice);
  if (!service || !subservice)
    return { title: "Not Found | Nebsam Digital Solutions" };

  return {
    title: `${subservice.name} | ${service.name} | Nebsam Digital Solutions`,
    description: subservice.summary,
  };
}

export default function SubservicePage({ params }) {
  const { service, subservice } = getSubservice(params.service, params.subservice);
  if (!service || !subservice) notFound();

  const serviceJson = buildServiceJsonLd({
    name: `${service.name} - ${subservice.name}`,
    description: subservice.summary,
    url: `/services/${service.slug}/${subservice.slug}`,
  });

  const faqJson = buildFaqJsonLd(subservice.faqs || [], {
    pageUrl: `/services/${service.slug}/${subservice.slug}`,
  });

  return (
    <section className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      {subservice.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      ) : null}

      <header className="space-y-2">
        <p className="text-sm text-[color:var(--muted)]">
          {service.name} / {subservice.name}
        </p>
        <h1 className="text-3xl font-semibold">{subservice.name}</h1>
        <p className="text-[color:var(--muted)]">{subservice.summary}</p>
      </header>

      {subservice.faqs?.length ? <FAQ items={subservice.faqs} /> : null}
    </section>
  );
}