export const getDiscountPercentage = (
  originalPrice: number,
  salePrice: number,
) => {
  return Math.floor(((originalPrice - salePrice) / originalPrice) * 100);
};
