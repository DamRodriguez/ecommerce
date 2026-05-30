import showToast from "@/components/toast/showToast";
import {
  addToCart as addToCartAction,
  clearCart as clearCartAction,
  removeFromCart as removeFromCartAction,
  removeOneFromCart as removeOneFromCartAction,
  setCart as setCartAction,
  setItemQuantity as setItemQuantityAction,
} from "@/redux/cart/products/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CartItem, ProductCardData, ProductVariant } from "@/types/product";
import { getCurrentPrice } from "@/utils/product-price/getCurrentPrice";
import { useEffect, useMemo, useState } from "react";

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
      return acc + getCurrentPrice(item.product) * item.quantity;
    }, 0);
  }, [cartItems]);

  const isCartEmpty = cartItems.length === 0;

  const addToCart = (product: ProductCardData, variant: ProductVariant) => {
    const variantAlreadyInCart = isInCart(variant.id);

    const toastMessage = variantAlreadyInCart
      ? `Unidad de ${product.name} añadida al carrito`
      : `${product.name} ha sido añadido al carrito`;

    dispatch(
      addToCartAction({
        product,
        variant,
      }),
    );

    showToast("success", toastMessage);
  };

  const removeOneFromCart = (variantId: string) => {
    const quantity = getItemQuantity(variantId);

    const item = getCartItem(variantId);

    if (!item) return;

    dispatch(removeOneFromCartAction(variantId));

    if (quantity <= 1) {
      showToast("info", `${item.product.name} ha sido eliminado del carrito`);

      return;
    }

    showToast("info", `Unidad de ${item.product.name} eliminada del carrito`);
  };

  const removeFromCart = (variantId: string) => {
    const item = getCartItem(variantId);

    if (!item) return;

    dispatch(removeFromCartAction(variantId));

    showToast("info", `${item.product.name} ha sido eliminado del carrito`);
  };

  const clearCart = () => {
    if (isCartEmpty) return;

    dispatch(clearCartAction());
    showToast("info", "Carrito vaciado");
  };

  const setItemQuantity = (variantId: string, quantity: number) => {
    dispatch(
      setItemQuantityAction({
        variantId,
        quantity,
      }),
    );
  };

  const isInCart = (variantId: string) => {
    return cartItems.some((item) => item.variant.id === variantId);
  };

  const getCartItem = (variantId: string) => {
    return cartItems.find((item) => item.variant.id === variantId);
  };

  const getItemQuantity = (variantId: string) => {
    return getCartItem(variantId)?.quantity ?? 0;
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
