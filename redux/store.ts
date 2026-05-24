import cartDrawerReducer from "@/redux/cart/drawer/cartDrawerSlice";
import cartReducer from "@/redux/cart/products/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartDrawer: cartDrawerReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
