import { MotionOpacity } from "@/components/motion/MotionOpacity";
import clsx from "clsx";

type FormErrorProps = {
  errorMessage?: string;
  className?: string;
};

const FormErrorMessage = ({ errorMessage, className }: FormErrorProps) => {
  if (!errorMessage) return null;

  return (
    errorMessage && (
      <MotionOpacity className={clsx("text-red text-xs xl:text-sm", className)}>
        {errorMessage}
      </MotionOpacity>
    )
  );
};

export default FormErrorMessage;
