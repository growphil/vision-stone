import { PRODUCTS, Product } from "./products";

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
  products?: Product[];
}

export const BRANDS: Brand[] = [
  {
    id: "01",
    name: "Vision Stones",
    slug: "vision-stones",
    description: "Mineral manufacturing & raw-material supply since 1997.",
    products: PRODUCTS,
  },
];
