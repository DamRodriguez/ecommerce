import { ProductCardData } from "@/types/product";

export const products: ProductCardData[] = [
  {
    id: "1",
    name: "Remera Oversize de Algodón",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop&q=80",
    originalPrice: 32000,
    salePrice: 15000,
    category: "Parte superior",
    subcategory: "Remeras",
    isNew: true,
    variants: [
      {
        id: "1-negro-s",
        size: "S",
        color: { name: "Negro", value: "#121212" },
        stock: 5,
      },
      {
        id: "1-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 8,
      },
      {
        id: "1-blanco-m",
        size: "M",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 4,
      },
      {
        id: "1-blanco-l",
        size: "L",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 6,
      },
      {
        id: "1-gris-xl",
        size: "XL",
        color: { name: "Gris", value: "#808080" },
        stock: 2,
      },
    ],
  },

  {
    id: "2",
    name: "Campera Clásica de Jean",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=900&auto=format&fit=crop&q=80",
    originalPrice: 85000,
    salePrice: 80000,
    category: "Denim",
    subcategory: "Camperas",
    isNew: false,
    variants: [
      {
        id: "2-azul-s",
        size: "S",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 4,
      },
      {
        id: "2-azul-m",
        size: "M",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 6,
      },
      {
        id: "2-azul-l",
        size: "L",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 3,
      },
      {
        id: "2-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 5,
      },
      {
        id: "2-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 2,
      },
    ],
  },

  {
    id: "3",
    name: "Buzo Relajado con Capucha",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80",
    originalPrice: 62000,
    category: "Parte superior",
    subcategory: "Buzos",
    isNew: true,
    variants: [
      {
        id: "3-gris-s",
        size: "S",
        color: { name: "Gris", value: "#808080" },
        stock: 8,
      },
      {
        id: "3-gris-m",
        size: "M",
        color: { name: "Gris", value: "#808080" },
        stock: 10,
      },
      {
        id: "3-gris-l",
        size: "L",
        color: { name: "Gris", value: "#808080" },
        stock: 6,
      },
      {
        id: "3-negro-l",
        size: "L",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "3-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 3,
      },
    ],
  },

  {
    id: "4",
    name: "Jean Recto Clásico",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80",
    originalPrice: 76000,
    category: "Denim",
    subcategory: "Jeans",
    isNew: false,
    variants: [
      {
        id: "4-azul-s",
        size: "S",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 4,
      },
      {
        id: "4-azul-m",
        size: "M",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 8,
      },
      {
        id: "4-azul-l",
        size: "L",
        color: { name: "Azul", value: "#1E3A8A" },
        stock: 5,
      },
      {
        id: "4-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "4-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 2,
      },
    ],
  },

  {
    id: "5",
    name: "Camisa Negra Minimalista",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&auto=format&fit=crop&q=80",
    originalPrice: 54000,
    category: "Parte superior",
    subcategory: "Camisas",
    isNew: true,
    variants: [
      {
        id: "5-negro-s",
        size: "S",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "5-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 7,
      },
      {
        id: "5-negro-l",
        size: "L",
        color: { name: "Negro", value: "#121212" },
        stock: 5,
      },
      {
        id: "5-blanco-m",
        size: "M",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 6,
      },
      {
        id: "5-blanco-xl",
        size: "XL",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 3,
      },
    ],
  },

  {
    id: "6",
    name: "Tapado de Lana Entallado",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80",
    originalPrice: 145000,
    category: "Abrigos",
    subcategory: "Tapados",
    isNew: false,
    variants: [
      {
        id: "6-beige-s",
        size: "S",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 3,
      },
      {
        id: "6-beige-m",
        size: "M",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 2,
      },
      {
        id: "6-beige-l",
        size: "L",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 4,
      },
      {
        id: "6-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 5,
      },
      {
        id: "6-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 2,
      },
    ],
  },

  {
    id: "7",
    name: "Sweater Tejido Esencial",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&auto=format&fit=crop&q=80",
    originalPrice: 69000,
    category: "Parte superior",
    subcategory: "Sweaters",
    isNew: false,
    variants: [
      {
        id: "7-gris-s",
        size: "S",
        color: { name: "Gris", value: "#808080" },
        stock: 5,
      },
      {
        id: "7-gris-m",
        size: "M",
        color: { name: "Gris", value: "#808080" },
        stock: 9,
      },
      {
        id: "7-gris-l",
        size: "L",
        color: { name: "Gris", value: "#808080" },
        stock: 6,
      },
      {
        id: "7-beige-m",
        size: "M",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 4,
      },
      {
        id: "7-beige-xl",
        size: "XL",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 2,
      },
    ],
  },

  {
    id: "8",
    name: "Pantalón Cargo Urbano",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80",
    originalPrice: 79000,
    category: "Parte inferior",
    subcategory: "Pantalones",
    isNew: true,
    variants: [
      {
        id: "8-verde-s",
        size: "S",
        color: { name: "Verde Militar", value: "#4B5D16" },
        stock: 3,
      },
      {
        id: "8-verde-m",
        size: "M",
        color: { name: "Verde Militar", value: "#4B5D16" },
        stock: 5,
      },
      {
        id: "8-verde-l",
        size: "L",
        color: { name: "Verde Militar", value: "#4B5D16" },
        stock: 6,
      },
      {
        id: "8-negro-l",
        size: "L",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "8-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 2,
      },
    ],
  },

  {
    id: "9",
    name: "Musculosa Básica Blanca",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&auto=format&fit=crop&q=80",
    originalPrice: 28000,
    category: "Parte superior",
    subcategory: "Musculosas",
    isNew: false,
    variants: [
      {
        id: "9-blanco-s",
        size: "S",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 12,
      },
      {
        id: "9-blanco-m",
        size: "M",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 10,
      },
      {
        id: "9-blanco-l",
        size: "L",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 7,
      },
      {
        id: "9-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 6,
      },
      {
        id: "9-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 3,
      },
    ],
  },

  {
    id: "10",
    name: "Camisa de Lino Holgada",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80",
    originalPrice: 58000,
    category: "Parte superior",
    subcategory: "Camisas",
    isNew: true,
    variants: [
      {
        id: "10-beige-s",
        size: "S",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 4,
      },
      {
        id: "10-beige-m",
        size: "M",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 8,
      },
      {
        id: "10-beige-l",
        size: "L",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 5,
      },
      {
        id: "10-blanco-m",
        size: "M",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 6,
      },
      {
        id: "10-blanco-xl",
        size: "XL",
        color: { name: "Blanco", value: "#F5F5F5" },
        stock: 2,
      },
    ],
  },

  {
    id: "11",
    name: "Jean Negro Ajustado",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&auto=format&fit=crop&q=80",
    originalPrice: 74000,
    category: "Denim",
    subcategory: "Jeans",
    isNew: false,
    variants: [
      {
        id: "11-negro-s",
        size: "S",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "11-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 7,
      },
      {
        id: "11-negro-l",
        size: "L",
        color: { name: "Negro", value: "#121212" },
        stock: 5,
      },
      {
        id: "11-azul-m",
        size: "M",
        color: { name: "Azul Oscuro", value: "#1E3A8A" },
        stock: 6,
      },
      {
        id: "11-azul-xl",
        size: "XL",
        color: { name: "Azul Oscuro", value: "#1E3A8A" },
        stock: 2,
      },
    ],
  },

  {
    id: "12",
    name: "Campera Puffer de Invierno",
    image:
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=900&auto=format&fit=crop&q=80",
    originalPrice: 132000,
    category: "Abrigos",
    subcategory: "Camperas",
    isNew: true,
    variants: [
      {
        id: "12-marron-s",
        size: "S",
        color: { name: "Marrón", value: "#6F4E37" },
        stock: 3,
      },
      {
        id: "12-marron-m",
        size: "M",
        color: { name: "Marrón", value: "#6F4E37" },
        stock: 6,
      },
      {
        id: "12-marron-l",
        size: "L",
        color: { name: "Marrón", value: "#6F4E37" },
        stock: 5,
      },
      {
        id: "12-negro-l",
        size: "L",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
      {
        id: "12-negro-xl",
        size: "XL",
        color: { name: "Negro", value: "#121212" },
        stock: 2,
      },
    ],
  },
  {
    id: "13",
    name: "Pantalón Sastrero Pierna Ancha",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&auto=format&fit=crop&q=80",
    originalPrice: 82000,
    category: "Parte inferior",
    subcategory: "Pantalones",
    isNew: false,
    variants: [
      {
        id: "13-negro-m",
        size: "M",
        color: { name: "Negro", value: "#121212" },
        stock: 4,
      },
    ],
  },

  {
    id: "14",
    name: "Buzo Cuello Redondo Minimalista",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=900&auto=format&fit=crop&q=80",
    originalPrice: 66000,
    category: "Parte superior",
    subcategory: "Buzos",
    isNew: true,
    variants: [
      {
        id: "14-gris-l",
        size: "L",
        color: { name: "Gris", value: "#808080" },
        stock: 6,
      },
    ],
  },

  {
    id: "15",
    name: "Piloto Largo Clásico",
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=900&auto=format&fit=crop&q=80",
    originalPrice: 158000,
    category: "Abrigos",
    subcategory: "Pilotos",
    isNew: false,
    variants: [
      {
        id: "15-beige-xl",
        size: "XL",
        color: { name: "Beige", value: "#D6C6A5" },
        stock: 3,
      },
    ],
  },
];
