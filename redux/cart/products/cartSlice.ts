import { ProductData } from "@/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = ProductData & {
  quantity: number;
};

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

    addToCart: (state, action: PayloadAction<ProductData>) => {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        ...product,
        quantity: 1,
      });
    },

    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      const existingItem = state.items.find((item) => item.id === productId);

      if (!existingItem) return;

      if (existingItem.quantity <= 1) {
        state.items = state.items.filter((item) => item.id !== productId);
        return;
      }

      existingItem.quantity -= 1;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      state.items = state.items.filter((item) => item.id !== productId);
    },

    clearCart: (state) => {
      state.items = [];
    },

    setItemQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
      }>,
    ) => {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== productId);
        return;
      }

      const existingItem = state.items.find((item) => item.id === productId);

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
