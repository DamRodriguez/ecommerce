"use client";
import { routes } from "@/constants/routes";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";

type LeftItemProps = {
  onClick: () => void;
};

const LeftItem = (props: LeftItemProps) => {
  const { handleSmoothScroll } = useSmoothScroll();

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    props.onClick();
    handleSmoothScroll(e, routes.home);
  };

  return (
    <Link href={routes.home} onClick={handleOnClick}>
      <p className="text-2xl font-bold uppercase xl:text-4xl">Logo</p>
    </Link>
  );
};

export default LeftItem;
