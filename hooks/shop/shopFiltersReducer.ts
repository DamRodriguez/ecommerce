import { ProductCardData } from "@/components/pages/shop/ProductCard";

export type SortOption = "default" | "newest" | "price-asc" | "price-desc";

export type ShopFiltersState = {
  search: string;
  categories: string[];
  sort: SortOption;
};

export type ShopFiltersAction =
  | {
      type: "SET_SEARCH";
      payload: string;
    }
  | {
      type: "TOGGLE_CATEGORY";
      payload: string;
    }
  | {
      type: "SET_CATEGORIES";
      payload: string[];
    }
  | {
      type: "CLEAR_CATEGORIES";
    }
  | {
      type: "TOGGLE_SORT";
      payload: Exclude<SortOption, "default">;
    }
  | {
      type: "RESET_FILTERS";
    };

export const initialShopFiltersState: ShopFiltersState = {
  search: "",
  categories: [],
  sort: "default",
};

export function shopFiltersReducer(
  state: ShopFiltersState,
  action: ShopFiltersAction,
): ShopFiltersState {
  if (action.type === "SET_SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }

  if (action.type === "TOGGLE_CATEGORY") {
    const categoryAlreadySelected = state.categories.includes(action.payload);

    return {
      ...state,
      categories: categoryAlreadySelected
        ? state.categories.filter((category) => category !== action.payload)
        : [...state.categories, action.payload],
    };
  }

  if (action.type === "SET_CATEGORIES") {
    return {
      ...state,
      categories: action.payload,
    };
  }

  if (action.type === "CLEAR_CATEGORIES") {
    return {
      ...state,
      categories: [],
    };
  }

  if (action.type === "TOGGLE_SORT") {
    return {
      ...state,
      sort: state.sort === action.payload ? "default" : action.payload,
    };
  }

  if (action.type === "RESET_FILTERS") {
    return initialShopFiltersState;
  }

  return state;
}

export function getFilteredProducts(
  products: ProductCardData[],
  filters: ShopFiltersState,
) {
  const normalizedSearch = filters.search.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.category.toLowerCase().includes(normalizedSearch) ||
      product.subcategory.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  if (filters.sort === "default") {
    return filteredProducts;
  }

  return [...filteredProducts].sort((a, b) => {
    if (filters.sort === "newest") {
      return Number(b.isNew) - Number(a.isNew);
    }

    if (filters.sort === "price-asc") {
      return a.price - b.price;
    }

    if (filters.sort === "price-desc") {
      return b.price - a.price;
    }

    return 0;
  });
}
