const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nebsam-website-2026.vercel.app";

function absUrl(path) {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${BASE_URL}${path}`;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nebsam Digital Solutions",
    url: BASE_URL,
    areaServed: ["Nairobi", "Mombasa", "Kenya"],
    sameAs: [],
  };
}

export function buildServiceJsonLd({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Nebsam Digital Solutions",
      url: BASE_URL,
    },
    areaServed: ["Nairobi", "Mombasa", "Kenya"],
    url: absUrl(url),
  };
}

export function buildFaqJsonLd(items = [], { pageUrl } = {}) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.a,
      },
    })),
    url: pageUrl ? absUrl(pageUrl) : undefined,
  };
}