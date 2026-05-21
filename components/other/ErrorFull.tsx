import SpaceX from "@/components/layout/SpaceX";
import clsx from "clsx";
import { CircleAlert } from "lucide-react";

type ErrorFullProps = {
  text: string;
  withoutPadding?: boolean;
  containerClassName?: string;
  footerComponent?: React.ReactNode;
};

const ErrorFull = ({
  text,
  withoutPadding,
  containerClassName,
  footerComponent,
}: ErrorFullProps) => {
  const Container = withoutPadding ? "div" : SpaceX;
  return (
    <Container
      className={clsx(
        "flex flex-col gap-4 xl:gap-6 items-center justify-center absolute inset-0 min-h-dvh",
        containerClassName,
      )}
    >
      <div>
        <CircleAlert className="w-15 h-15 xl:w-18 xl:h-18 stroke-red" />
      </div>
      <p className="text-on-surface text-base xl:text-lg text-center">{text}</p>
      {footerComponent}
    </Container>
  );
};

export default ErrorFull;
