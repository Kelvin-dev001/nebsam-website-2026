export function buildWhatsAppLink({
  phone = "254759000111",
  message = "Hello Nebsam Digital Solutions, I'd like to inquire.",
} = {}) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}