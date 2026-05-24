import MotionFade from "@/components/motion/MotionFade";
import Button from "@/components/ui/buttons/Button";
import { routes } from "@/constants/routes";
import useCartDrawer from "@/redux/cart/drawer/useCartDrawer";
import { ShoppingBasket } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function EmptyCart() {
  const { closeCartDrawer } = useCartDrawer();
  const router = useRouter();
  const pathname = usePathname();

  const handleShopButton = () => {
    closeCartDrawer();
    if (pathname === routes.shop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }
    router.push(routes.shop);
  };

  return (
    <MotionFade
      key="empty-cart"
      className="h-full px-lg text-on-surface text-base xl:text-lg flex flex-col justify-center items-center gap-sm xl:gap-md text-center"
    >
      <ShoppingBasket className="w-7 h-7 xl:w-9 xl:h-9 stroke-on-surface" />

      <div>
        <p>
          Tu carrito está vacío <br />
          <span className="text-secondary-text">
            Agregá productos para comenzar a comprar
          </span>
        </p>
      </div>

      <div className="mt-xs xl:mt-sm">
        <Button onClick={handleShopButton}>
          <p>Ver Tienda</p>
        </Button>
      </div>
    </MotionFade>
  );
}
