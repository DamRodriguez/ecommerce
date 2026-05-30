export type ProductSize = "S" | "M" | "L" | "XL";

export type ProductColor = {
  name: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  size: ProductSize;
  color: ProductColor;
  stock: number;
};

export type ProductSpecification = {
  title: string;
  description: string;
};

export type ProductCardData = {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice?: number;
  category: string;
  subcategory: string;
  isNew?: boolean;
  variants: ProductVariant[];
};

export type ProductDetailData = ProductCardData & {
  description: string;
  images: string[];
  specifications: ProductSpecification[];
};

export type CartItem = {
  product: ProductCardData;
  variant: ProductVariant;
  quantity: number;
};
