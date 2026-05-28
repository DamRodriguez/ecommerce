import ProductDetailContent from "@/components/pages/productDetail/ProductDetailContent";
import { routes } from "@/constants/routes";
import products from "@/data/products.json";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: Promise<{
    productId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const { productId } = await params;
  const path = routes.productDetail(productId);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return createMetadata({
      title: "Producto no encontrado",
      description: "El producto que estás buscando no se encuentra disponible.",
      path,
      noIndex: true,
    });
  }

  return createMetadata({
    title: product.name,
    description: `${product.name} - ${product.category} / ${product.subcategory}. Precio: $${product.price}.`,
    path,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const { productId } = await params;

  const product = products.find((product) => product.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
