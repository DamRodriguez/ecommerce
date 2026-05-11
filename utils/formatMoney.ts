export const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat("es-AR").format(amount) + " USD";
};
