"use client";
import ErrorFull from "@/components/other/ErrorFull";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { routes } from "@/constants/routes";

const NotFoundPage = () => {
  return (
    <ErrorFull
      text="Página no encontrada. Por favor, verifique la URL o regrese a la página de inicio."
      footerComponent={
        <LinkButton href={routes.home} customUppercase>
          Inicio
        </LinkButton>
      }
    />
  );
};

export default NotFoundPage;
