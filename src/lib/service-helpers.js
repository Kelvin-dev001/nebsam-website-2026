import { services } from "@/lib/services";

export function getAllServices() {
  return services;
}

export function getServiceBySlug(serviceSlug) {
  return services.find((s) => s.slug === serviceSlug) || null;
}

export function getSubservice(serviceSlug, subSlug) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { service: null, subservice: null };

  const subservice =
    (service.subservices || []).find((x) => x.slug === subSlug) || null;

  return { service, subservice };
}

export function orderSubservices(service) {
  const subs = [...(service.subservices || [])];
  const priority = service.priorityOrder || [];
  if (!priority.length) return subs;

  const rank = new Map(priority.map((slug, idx) => [slug, idx]));
  return subs.sort((a, b) => {
    const ra = rank.has(a.slug) ? rank.get(a.slug) : 999;
    const rb = rank.has(b.slug) ? rank.get(b.slug) : 999;
    return ra - rb;
  });
}