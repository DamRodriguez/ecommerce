"use client";
import ErrorFull from "@/components/other/ErrorFull";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { routes } from "@/constants/routes";

const ErrorPage = () => {
  return (
    <ErrorFull
      text="Ha ocurrido un error. Intente recargar la página o regrese a la página de inicio."
      footerComponent={
        <LinkButton href={routes.home} customUppercase>
          Inicio
        </LinkButton>
      }
    />
  );
};

export default ErrorPage;
