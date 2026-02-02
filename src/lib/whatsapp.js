import { getServiceBySlug, getSubservice } from "@/lib/service-helpers";

export function buildWhatsAppLink({
  phone = "254759000111",
  message = "Hello Nebsam Digital Solutions, I'd like to inquire.",
} = {}) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildWhatsAppMessageFromRoute(pathname) {
  if (!pathname) return base();

  const clean = pathname.split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);

  // /services/:service
  if (parts[0] === "services" && parts[1] && !parts[2]) {
    const service = getServiceBySlug(parts[1]);
    const serviceName = service?.name || toTitle(parts[1]);

    return [
      `Hello Nebsam Digital Solutions,`,
      `I'm interested in your ${serviceName}.`,
      `Please share pricing, installation process, and timelines.`,
      `My location is: ________.`,
    ].join(" ");
  }

  // /services/:service/:subservice
  if (parts[0] === "services" && parts[1] && parts[2]) {
    const { service, subservice } = getSubservice(parts[1], parts[2]);
    const serviceName = service?.name || toTitle(parts[1]);
    const subName = subservice?.name || toTitle(parts[2]);

    return [
      `Hello Nebsam Digital Solutions,`,
      `I'm interested in ${serviceName} — ${subName}.`,
      `Please advise availability, installation, and total cost.`,
      `My vehicle type (if applicable): ________.`,
      `My location is: ________.`,
    ].join(" ");
  }

  if (parts[0] === "contact") {
    return [
      `Hello Nebsam Digital Solutions,`,
      `I'd like to get in touch. Please share the best contact person and working hours.`,
    ].join(" ");
  }

  return base();
}

function base() {
  return "Hello Nebsam Digital Solutions, I'd like to inquire.";
}

function toTitle(slug) {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}