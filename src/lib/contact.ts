// Central contact config — edita aquí para cambiar en todo el sitio.
export const CONTACT = {
  brand: "rsinfinito.cl",
  tagline: "Detalles personalizados con amor ♾️",
  whatsappNumber: "+56926396471", // formato internacional, sin espacios
  instagram: "https://instagram.com/rsinfinito.cl",
  instagramHandle: "@rsinfinito.cl",
  location: "Coltauco · Rancagua, Chile",
  email: "hola@rsinfinito.cl",
};

export function waLink(message?: string) {
  const number = CONTACT.whatsappNumber.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}
