/**
 * Limpia un string de teléfono dejando solo los dígitos.
 * Elimina +, espacios, guiones y paréntesis.
 * @param phone - El string con el teléfono (ej: "+54 9 11 2233-4455")
 * @returns El string limpio (ej: "5491122334455")
 */
export const formatWpp = (phone: string): string => {
  if (!phone) return "";
  return phone.replace(/\D/g, "");
};
