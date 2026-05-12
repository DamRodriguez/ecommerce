"use client";
import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SpaceX = ({ children, className, id }: SectionProps) => {
  return (
    <div
      id={id}
      className={clsx(
        "px-[1rem] scroll-mt-[8.5rem] xl:scroll-mt-[14rem]",
        "md:px-[5rem]",
        "xl:px-[7rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SpaceX;
