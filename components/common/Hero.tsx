"use client";
import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import Image from "next/image";

type HeroProps = {
  overline: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  underTitleComponent?: React.ReactNode;
};

const Hero = (props: HeroProps) => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-visible">
      <div
        className="absolute inset-0 [clip-path:inset(0_0_0_0)] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="fixed inset-0 w-full h-[100lvh] transform-gpu">
          <Image
            src={props.backgroundImage}
            alt={`Imagen de ${props.title}`}
            fill
            quality={80}
            className="object-cover bg-placeholder"
            priority
            sizes="(min-width: 1280px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface-strong/75 to-on-surface-strong/60" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] py-20">
        <SpaceX className="w-full text-surface pt-[2rem] xl:pt-[3rem]">
          <div className="max-w-[60rem] flex flex-col gap-[1.5rem] xl:gap-[2.5rem]">
            <div className="flex flex-col gap-[0.5rem] xl:gap-[1rem]">
              <MotionFade
                order={1}
                className="text-xs xl:text-sm text-surface/90 text-shadow-sm font-extrabold uppercase tracking-widest max-w-[18rem] sm:max-w-full"
              >
                <span>{props.overline}</span>
              </MotionFade>
              <MotionSlide direction="down" order={0}>
                <h1 className="text-4xl xl:text-6xl leading-[2.6rem] xl:leading-[4.5rem] text-surface font-extrabold text-shadow-sm">
                  {props.title}
                </h1>
              </MotionSlide>
              {props.subtitle && (
                <MotionFade order={1} className="mt-[0.5rem] max-w-[50rem]">
                  <p className="text-base xl:text-lg text-surface text-shadow-sm">
                    {props.subtitle}
                  </p>
                </MotionFade>
              )}
            </div>
            <MotionFade order={1}>{props.underTitleComponent}</MotionFade>
          </div>
        </SpaceX>
      </div>
    </section>
  );
};

export default Hero;
