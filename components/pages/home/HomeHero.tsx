import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import CustomImage from "@/components/other/CustomImage";
import LinkButton from "@/components/ui/buttons/LinkButton";

export default function HomeHero() {
  return (
    <section className="w-full gap-xl pt-margin-mobile lg:pt-0 border-b border-outline relative flex flex-col lg:flex-row min-h-screen-content justify-between">
      <SpaceX className="w-full lg:w-1/2 flex flex-col justify-center bg-surface">
        <MotionSlide order={0}>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.1] text-on-surface mb-md uppercase">
            Definiendo
            <br />
            Precisión
          </h1>
        </MotionSlide>
        <MotionFade order={1}>
          <p className="text-base lg:text-xl leading-[1.6] text-on-surface mb-xl">
            Estética diseñada para el profesional exigente. Descubra nuestra
            última colección de elementos esenciales meticulosamente elaborados.
          </p>
        </MotionFade>
        <div className="flex flex-col md:flex-row gap-md flex-wrap">
          <MotionSlide order={1}>
            <LinkButton href="" customUppercase className="w-full md:w-fit">
              <p>Comprar Ahora</p>
            </LinkButton>
          </MotionSlide>
          <MotionSlide order={1} direction="right">
            <LinkButton
              href=""
              customUppercase
              outline
              className="w-full md:w-fit"
            >
              <p>Destacados</p>
            </LinkButton>
          </MotionSlide>
        </div>
      </SpaceX>
      <MotionSlide
        direction="right"
        className="w-full flex-1 lg:w-1/2 relative overflow-hidden"
      >
        <CustomImage
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_3kySCAEBPwdO7TmeuysDwfpIntzoFrlNNnV_lvnmfXQiNH8XjeNf8dTGQVJd3nDiDax7FCpWmajCawO3iYJWopo__XFh-_eg588Ys4ud1nTVx7J9qxCiPLWY6NyDrcWSKW5IN6y6wYNdlsxahV_gwMxGG2emga9gHzxc920B8TTsz1QJxBYtbVJSiFF3ctfbqqMsUe7XVp3iTcq-03zDQnhFEPgUM8MCQLQ3EiDOL5rWJzaecfslEmvqZ3yJron039O-ytiYFlx"
          alt="Hero Product"
          sizes="(max-width: 1024px) 100vw, 50vw"
          fill
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 custom-transition-all"
        />
      </MotionSlide>
    </section>
  );
}
