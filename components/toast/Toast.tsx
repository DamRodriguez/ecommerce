import CustomCloseButton from "@/components/toast/CustomCloseButton";
import clsx from "clsx";

export interface ToastProps {
  type: "error" | "success" | "warning" | "info";
  text: string;
  closeToast: () => void;
  manualClose?: boolean;
}

const toastItems: Record<
  ToastProps["type"],
  {
    title?: string;
    textClassName: string;
    bgClassName: string;
  }
> = {
  error: {
    textClassName: "",
    bgClassName: "",
  },
  success: {
    textClassName: "",
    bgClassName: "",
  },
  warning: {
    textClassName: "",
    bgClassName: "",
  },
  info: {
    textClassName: "",
    bgClassName: "",
  },
};

const Toast = ({ type, text, closeToast, manualClose }: ToastProps) => {
  const toastItem = toastItems[type];

  return (
    <div
      className={clsx(
        "w-full flex justify-between items-center pl-[0.2rem] py-[0.8rem] sm:py-[1rem]",
        toastItem.bgClassName,
      )}
    >
      <div className="flex flex-col w-full pr-[0.5rem]">
        {toastItem.title && (
          <p className={clsx("text-base font-medium", toastItem.textClassName)}>
            {toastItem.title}
          </p>
        )}
        <p className="text-base sm:text-lg text-on-surface font-accent">
          {text}
        </p>
      </div>
      {manualClose && <CustomCloseButton closeToast={closeToast} />}
    </div>
  );
};

export default Toast;
