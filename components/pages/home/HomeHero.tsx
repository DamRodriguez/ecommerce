import SpaceX from "@/components/layout/SpaceX";
import CustomImage from "@/components/other/CustomImage";
import LinkButton from "@/components/ui/buttons/LinkButton";

export default function HomeHero() {
  return (
    <section className="w-full gap-xl pt-xl lg:pt-0 border-b border-outline relative flex flex-col lg:flex-row min-h-screen-content justify-between">
      <SpaceX className="w-full lg:w-1/2 flex flex-col justify-center bg-surface">
        <h1 className="text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.1] text-on-surface mb-md uppercase">
          Definiendo
          <br />
          Precisión
        </h1>
        <p className="text-lg lg:text-xl leading-[1.6] text-on-surface mb-xl">
          Estética diseñada para el profesional exigente. Descubra nuestra
          última colección de elementos esenciales meticulosamente elaborados.
        </p>
        <div className="flex flex-col md:flex-row gap-md flex-wrap">
          <LinkButton href="" customUppercase className="w-full md:w-fit">
            <p>Comprar Ahora</p>
          </LinkButton>
          <LinkButton
            href=""
            customUppercase
            outline
            className="w-full md:w-fit"
          >
            <p>Destacados</p>
          </LinkButton>
        </div>
      </SpaceX>
      <div className="w-full lg:w-1/2 relative flex-1 overflow-hidden">
        <CustomImage
          alt="Hero Product"
          fill
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 custom-transition-all"
          src="/images/home/hero.png"
        />
      </div>
    </section>
  );
}
