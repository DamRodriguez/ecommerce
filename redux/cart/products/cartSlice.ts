import { CartItem, ProductCardData, ProductVariant } from "@/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },

    addToCart: (
      state,
      action: PayloadAction<{
        product: ProductCardData;
        variant: ProductVariant;
      }>,
    ) => {
      const { product, variant } = action.payload;

      const existingItem = state.items.find(
        (item) => item.variant.id === variant.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        product,
        variant,
        quantity: 1,
      });
    },

    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const variantId = action.payload;

      const existingItem = state.items.find(
        (item) => item.variant.id === variantId,
      );

      if (!existingItem) return;

      if (existingItem.quantity <= 1) {
        state.items = state.items.filter(
          (item) => item.variant.id !== variantId,
        );

        return;
      }

      existingItem.quantity -= 1;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const variantId = action.payload;

      state.items = state.items.filter((item) => item.variant.id !== variantId);
    },

    clearCart: (state) => {
      state.items = [];
    },

    setItemQuantity: (
      state,
      action: PayloadAction<{
        variantId: string;
        quantity: number;
      }>,
    ) => {
      const { variantId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.variant.id !== variantId,
        );

        return;
      }

      const existingItem = state.items.find(
        (item) => item.variant.id === variantId,
      );

      if (!existingItem) return;

      existingItem.quantity = quantity;
    },
  },
});

export const {
  setCart,
  addToCart,
  removeOneFromCart,
  removeFromCart,
  clearCart,
  setItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
