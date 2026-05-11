export const openWhatsApp = (phone: string, message?: string) => {
  if (typeof window === "undefined") return;

  if (!phone) return;

  const cleanPhone = phone.replace(/\D/g, "");

  const url = new URL(`https://wa.me/${cleanPhone}`);

  if (message) {
    url.searchParams.append("text", message);
  }

  window.open(url.toString(), "_blank");
};
