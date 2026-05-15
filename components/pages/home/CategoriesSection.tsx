import CategoryCard from "@/components/common/categories/CategoryCard";
import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import MotionStagger from "@/components/motion/MotionStagger";
import AnimatedTextButton from "@/components/ui/buttons/AnimatedTextButton";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  const categoryItems = [
    {
      id: "1",
      category: "Ropa",
      quantity: 20,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBft-EMTjvAqqmh5MVmM0Frzq1QDDBbQl9dCU04WmLVbnLpr2FbPYlWI21g9eltKoGlIz6-eqs-AthBvB0N3Fa0847TjKIrZxh1Ojj3YfTqBplDxy0gB6jta-RfhFoaJSY0LR1KM4Nrlc4dDdrVP6pzeYFvLhW6U-5HyLbzwh7HdYT-utQX8D3UKoFCtyp1MbX9NMXyWhEur5YH3gmfOjjDBjZkog5R0ZC6bAKVYfr51WMGSkukrLaAEbPSvTkP56LbbFh68yoTFi_4",
    },
    {
      id: "2",
      category: "Tecnología",
      quantity: 18,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZVk22Kso7iaz8hZBc5_Xn7SxkUIAP3NwHDY6lmL0N98zoE7n4zYjdWRYtr9k3dn_HVdyiSDjjN9G-rjixP9o0uDCU1YkmQBwviF8CaYe4xpnJ_ndEBpcL5ymfP00liJ8LsnOF-mVOwEJqgCVk1EZ4qyFvmCS3z81ItW4q36mqMi3jELnNbs7_vif0hzbI8-DUZYNEVKpqxhVEPwELJE2feM6ZcCaXPGB3tGI196dDIptxUXg5YHLtVGTifiKwSJ5lEgNMoRGz59xN",
    },
    {
      id: "3",
      category: "Mobiliario",
      quantity: 9,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCBTbFg7QbsaW7Mklx_rhbl_yuC9l8UdFTo2Ho_VXnpmMqu4IOyCXhHIru25MOWP12aM9K3woBl5D3g6-b99NvOoPsb-eJDicV3GBX0z62k5iUS5-IqgwHc-AKRSmRSW8ATPHudVe1lwFp6Y8wNTY26vCtq7WGOYO8rUp7Yz7NtObWT6jojD0TrUbP89x0aCIbwgFcxHjLObSa_zD3MLZlEPk-LPnG5cNC7Q4x-VX2YkDq661TANcL0jDJpmOcN0X-U3WWbWz4nTmkS",
    },
    {
      id: "4",
      category: "Accesorios",
      quantity: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLEUHPL-U1WFSid5nQ1_GO6YjdwzRKGGqtnOnwY0iFQb0T8a-Dl1vbST_o1MjGQnCc2QLcnlL1eZ2Vf8ma7beb0vIIDetn8ClT89ur0rd37QLWwVTNKThlM05vmLl5vAuxoxdhCtCZq7WhTcAwnUc0gP91iGZ4ANmZkTqHM4O10RncXULkJ2eyAWGHr8JBG8w0L5_A-NCvNtaB8twrb8bFYn76b3isUvQ_phjBio0qihmCwJr_uXG-T2nccaL8X31p91f2ZbVg6jA9",
    },
  ];

  return (
    <SpaceX className="py-vertical-mobile lg:py-vertical-desktop bg-surface border-b border-outline">
      <div className="flex justify-between items-center lg:items-end mb-xl border-b-4 border-outline pb-sm">
        <MotionSlide>
          <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.4] text-on-surface uppercase">
            Categorías
          </h2>
        </MotionSlide>
        <MotionFade>
          <AnimatedTextButton
            text="ver más"
            href="#"
            icon={<ArrowRight className="w-4 h-4 stroke-on-surface" />}
          />
        </MotionFade>
      </div>
      <MotionStagger
        direction="down"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-lg"
      >
        {categoryItems.map((item) => (
          <CategoryCard key={item.id} data={item} />
        ))}
      </MotionStagger>
    </SpaceX>
  );
}
