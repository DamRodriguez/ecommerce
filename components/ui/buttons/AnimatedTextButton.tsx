import HoverTextBounce from "@/components/motion/HoverTextBounce";
import Link from "next/link";

type AnimatedTextButtonProps = {
  text: string;
  href: string;
  icon?: React.ReactNode;
};

export default function AnimatedTextButton({
  text,
  href,
  icon,
}: AnimatedTextButtonProps) {
  return (
    <div className="flex items-center justify-center flex-col group relative cursor-pointer">
      <div className="flex items-center gap-1">
        <Link
          className="font-accent text-xs lg:text-sm font-medium tracking-[0.1em] uppercase text-on-surface"
          href={href}
        >
          <HoverTextBounce text={text} />
        </Link>
        {icon && icon}
      </div>
      <span className="absolute scale-x-0 group-hover:scale-x-100 bottom-0 left-0 w-full h-[1px] bg-on-surface custom-transition-all origin-left" />
    </div>
  );
}
