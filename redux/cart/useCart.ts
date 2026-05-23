import { ProductCardData } from "@/components/pages/shop/ProductCard";
import showToast from "@/components/toast/showToast";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToCart as addToCartAction,
  clearCart as clearCartAction,
  removeFromCart as removeFromCartAction,
  removeOneFromCart as removeOneFromCartAction,
  setCart as setCartAction,
  setItemQuantity as setItemQuantityAction,
  type CartItem,
} from "./cartSlice";

const CART_STORAGE_KEY = "cart";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const [isCartLoaded, setIsCartLoaded] = useState(false);

  const cartItems = items;

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

      if (!storedCart) {
        setIsCartLoaded(true);
        return;
      }

      const parsedCart = JSON.parse(storedCart) as CartItem[];

      if (Array.isArray(parsedCart)) {
        dispatch(setCartAction(parsedCart));
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    } finally {
      setIsCartLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isCartLoaded) return;

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems, isCartLoaded]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const totalUniqueItems = cartItems.length;

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const isCartEmpty = cartItems.length === 0;

  const addToCart = (product: ProductCardData) => {
    const productAlreadyInCart = isInCart(product.id);

    const toastMessage = productAlreadyInCart
      ? `Unidad de ${product.name} añadida al carrito!`
      : `${product.name} ha sido añadido al carrito!`;

    dispatch(addToCartAction(product));
    showToast("success", toastMessage);
  };

  const removeOneFromCart = (productId: string) => {
    const quantity = getItemQuantity(productId);
    const product = getCartItem(productId);
    if (!product) return;

    dispatch(removeOneFromCartAction(productId));

    if (quantity <= 1) {
      showToast("info", `${product.name} ha sido eliminado del carrito`);
      return;
    }

    showToast("info", `Unidad de ${product.name} eliminada del carrito`);
  };

  const removeFromCart = (productId: string) => {
    const product = getCartItem(productId);
    if (!product) return;

    dispatch(removeFromCartAction(productId));
    showToast("info", `${product.name} ha sido eliminado del carrito`);
  };

  const clearCart = () => {
    if (isCartEmpty) return;

    dispatch(clearCartAction());
    showToast("info", "Carrito vaciado");
  };

  const setItemQuantity = (productId: string, quantity: number) => {
    dispatch(setItemQuantityAction({ productId, quantity }));
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.id === productId);
  };

  const getCartItem = (productId: string) => {
    return cartItems.find((item) => item.id === productId);
  };

  const getItemQuantity = (productId: string) => {
    return getCartItem(productId)?.quantity ?? 0;
  };

  return {
    cartItems,
    totalItems,
    totalUniqueItems,
    totalPrice,
    isCartEmpty,
    isCartLoaded,

    addToCart,
    removeOneFromCart,
    removeFromCart,
    clearCart,
    setItemQuantity,

    isInCart,
    getCartItem,
    getItemQuantity,
  };
};

export default useCart;
