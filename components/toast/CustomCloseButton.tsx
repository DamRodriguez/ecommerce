import { X } from "lucide-react";

const CustomCloseButton = ({ closeToast }: { closeToast: () => void }) => (
  <button onClick={closeToast} className="cursor-pointer">
    <X className="w-[1rem] h-[1rem] stroke-on-surface" />
  </button>
);

export default CustomCloseButton;
