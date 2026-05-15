import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import CustomImage from "@/components/other/CustomImage";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { ArrowRight } from "lucide-react";

export default function AboutUsSection() {
  return (
    <MotionSlide className="w-full bg-surface-bright border-b border-outline">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[30rem] relative overflow-hidden">
          <CustomImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUxjMymXPJva_rm9iUakb5V3q6d95i9iBCNMXbp08uYAlsQnTHapX4rXM8BUcWLkjwS3f1j9x_pz1mUtTQe-Zpi-nm8MFJh_X85vp0sOnOZO1i3zFzNjwl0IzeUHv92UGnaGbNj0yx8KUFxQNe0C98xoc8co8Y9Gy3wT-4Mxk_Ywo2K--o1nnyomJ45LbVaNpiCLySCQQVPuDPLbCeP7Q3G_tBgwG6ixQs-mwVgs4a4-WXELQ46uvW08LPGWa1cCPbOKjc22lJfe_y"
            alt="Architectural Studio Space"
            sizes="(max-width: 1024px) 100vw, 50vw"
            fill
            className="absolute inset-0 w-full h-full object-cover hover:scale-110 custom-transition-all"
          />
        </div>
        <SpaceX className="w-full lg:w-1/2 py-vertical-mobile lg:py-vertical-desktop flex flex-col justify-center">
          <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface mb-md block">
            SOBRE EL ESTUDIO
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] text-on-surface mb-lg uppercase">
            Ingeniería
            <br />
            Estética
          </h2>
          <p className="text-lg leading-[1.6] text-on-surface mb-lg">
            Fundado en los principios del brutalismo y el diseño industrial, el
            estudio ARCHITECT existe en la intersección de la belleza austera y
            la utilidad intransigente. No diseñamos para las masas; diseñamos
            para el individuo exigente.
          </p>
          <p className="text-base leading-[1.6] text-secondary-text mb-xl">
            Cada prototipo es sometido a rigurosas pruebas de estrés, no solo
            por durabilidad física, sino por resistencia visual. Nuestro
            objetivo es crear objetos que sean inmunes a las tendencias,
            existiendo como elementos permanentes en un mundo temporal.
          </p>
          <LinkButton href="#" outline customUppercase>
            <p>Leer Manifiesto</p>
            <ArrowRight />
          </LinkButton>
        </SpaceX>
      </div>
    </MotionSlide>
  );
}
