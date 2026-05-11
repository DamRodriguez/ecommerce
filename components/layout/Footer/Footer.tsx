"use client";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import Column, { ColumnItems } from "@/components/layout/Footer/Column";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import config from "@/config/config";
import { routes } from "@/constants/routes";
import { CodeXml, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const companyItems: ColumnItems[] = [
    {
      text: "Inicio",
      href: routes.home,
    },
    {
      text: "Ejemplo",
      href: routes.ejemplo,
    },
  ];

  const exampleItems: ColumnItems[] = [
    {
      text: "ejemplo1",
      href: "",
    },
    {
      text: "ejemplo2",
      href: "",
    },
  ];

  const contactItems = [
    {
      text: config.info.address,
      link: config.urls.googleMaps,
      icon: <MapPin className="stroke-surface" />,
    },
    {
      text: config.info.whatsApp,
      link: config.urls.whatsApp,
      icon: <WhatsAppIcon className="fill-surface" />,
    },
    {
      text: config.info.phone,
      icon: <Phone className="stroke-surface" />,
    },
    {
      text: config.info.instagram,
      link: config.urls.instagram,
      icon: <InstagramIcon className="fill-surface" />,
    },
    {
      text: config.info.email,
      link: config.urls.email,
      icon: <Mail className="stroke-surface" />,
    },
  ];

  return (
    <footer className="bg-on-surface">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <MotionFade className="flex items-center justify-start relative w-[13rem] h-[4rem] xl:w-[16rem] xl:h-[7rem]">
          {/*
          <Image
            src=""
            alt="Imágen del logo"
            fill
            sizes="(max-width: 1280px) 13rem, 16rem"
            className="object-contain"
          />
          */}
          <p className="text-2xl xl:text-4xl font-bold uppercase text-surface-bright">
            Logo
          </p>
        </MotionFade>
        <div className="grid grid-cols-2 gap-8">
          <Column title="Empresa" items={companyItems} />
          <Column title="Titulo" items={exampleItems} />
        </div>
        <MotionFade className="flex flex-col gap-4">
          <p className="font-bold text-xs xl:text-sm tracking-widest uppercase font-accent text-surface-bright">
            Contacto
          </p>
          <ul className="flex flex-col gap-2">
            {contactItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-xs xl:text-sm text-surface"
              >
                <div className="min-w-[1.5rem] flex justify-center [&_svg]:w-[15px] [&_svg]:h-[15px]">
                  {item.icon}
                </div>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </MotionFade>
      </div>
      <div className="border-t border-surface/15 py-5 bg-on-surface-strong">
        <div className="container mx-auto flex flex-col items-center justify-evenly gap-4 px-4 md:flex-row text-xs xl:text-sm text-surface">
          <MotionSlide>
            <p className="text-center">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">Empresa</span>.{" "}
              <br className="flex xl:hidden" />
              Todos los derechos reservados.
            </p>
          </MotionSlide>
          <MotionSlide direction="right" className="flex items-center gap-2">
            <CodeXml className="w-[15px] h-[15px] stroke-surface" />
            <p>
              Desarrollado por{" "}
              <Link
                href={config.urls.damrod}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
              >
                damrod
              </Link>
            </p>
          </MotionSlide>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
