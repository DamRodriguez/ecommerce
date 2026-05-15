import SpaceX from "@/components/layout/SpaceX";
import { Lock, MessageSquareReply, Truck } from "lucide-react";

export default function BenefitsSection() {
  const items = [
    {
      id: "1",
      title: "Tránsito Global",
      text: "Envío acelerado y neutral en carbono en todos los pedidos internacionales superiores a $500.",
      icon: <Truck />,
    },
    {
      id: "2",
      title: "Bóveda Encriptada",
      text: "Encriptación de grado militar para todas las transacciones. Seguridad absoluta garantizada.",
      icon: <Lock />,
    },
    {
      id: "3",
      title: "Devoluciones Impecables",
      text: "Una ventana de 30 días para devoluciones, siempre que la integridad estructural no esté comprometida.",
      icon: <MessageSquareReply />,
    },
  ];

  return (
    <SpaceX className="w-full p-margin-mobile lg:p-margin-desktop bg-surface border-b border-outline grid grid-cols-1 md:grid-cols-3 gap-y-xl md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-outline">
      {items.map((item) => (
        <div
          key={item.id}
          className="pt-xl md:pt-0 pb-xl md:pb-0 md:px-lg flex flex-col items-start"
        >
          <div className="[&_svg]:w-6 [&_svg]:h-6 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:stroke-on-surface mb-md">
            {item.icon}
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold leading-[1.4] text-on-surface mb-sm uppercase">
            {item.title}
          </h3>
          <p className="text-base lg:text-lg leading-[1.6] text-secondary-text">
            {item.text}
          </p>
        </div>
      ))}
    </SpaceX>
  );
}
