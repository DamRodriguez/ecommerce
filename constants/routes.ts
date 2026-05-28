export const routes = {
  home: "/",
  shop: "/tienda",
  productDetail: (productId: string) => `/tienda/${productId}`,
  collections: "/colecciones",
  api: {
    contact: "/api/contact",
    newsletter: "/api/newsletter",
  },
};
