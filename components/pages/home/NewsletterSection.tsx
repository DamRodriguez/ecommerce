import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import NewsletterForm from "@/features/newsletter/components/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-surface-bright">
      <SpaceX className="py-vertical-mobile lg:py-vertical-desktop max-w-4xl mx-auto text-center">
        <MotionSlide>
          <h4 className="text-2xl lg:text-3xl font-semibold tracking-[-0.01em] leading-[1.3] text-on-surface mb-sm uppercase">
            El Boletín
          </h4>
          <p className="text-base leading-[1.6] text-on-surface mb-xl">
            Suscríbase para recibir anuncios de productos austeros, colecciones
            de acceso restringido y actualizaciones técnicas.
          </p>
        </MotionSlide>
        <MotionSlide direction="right">
          <NewsletterForm />
        </MotionSlide>
      </SpaceX>
    </section>
  );
}
