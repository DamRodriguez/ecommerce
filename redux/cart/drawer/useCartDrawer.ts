import {
  closeCartDrawer,
  openCartDrawer,
  toggleCartDrawer,
} from "@/redux/cart/drawer/cartDrawerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function useCartDrawer() {
  const dispatch = useAppDispatch();

  const isCartDrawerOpen = useAppSelector((state) => state.cartDrawer.isOpen);

  const openDrawer = () => {
    dispatch(openCartDrawer());
  };

  const closeDrawer = () => {
    dispatch(closeCartDrawer());
  };

  const toggleDrawer = () => {
    dispatch(toggleCartDrawer());
  };

  return {
    isCartDrawerOpen,
    openCartDrawer: openDrawer,
    closeCartDrawer: closeDrawer,
    toggleCartDrawer: toggleDrawer,
  };
}
