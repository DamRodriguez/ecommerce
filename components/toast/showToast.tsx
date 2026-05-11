import type { ToastProps } from "@/components/toast/Toast";
import Toast from "@/components/toast/Toast";
import { toast, ToastPosition } from "react-toastify";

type ShowToastOptions = {
  position?: ToastPosition;
  className?: string;
};

const showToast = (
  type: ToastProps["type"],
  text: ToastProps["text"],
  options?: ShowToastOptions,
) => {
  toast[type](
    ({ closeToast }) => (
      <Toast text={text} type={type} closeToast={closeToast} />
    ),
    {
      position: options?.position ?? "top-left",
      autoClose: 3000,
      closeButton: false,
      className: options?.className ?? "top-[5rem] xl:top-[6rem]",
    },
  );
};

export default showToast;
