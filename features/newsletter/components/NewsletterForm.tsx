"use client";
import showToast from "@/components/toast/showToast";
import Button from "@/components/ui/buttons/Button";
import Form from "@/components/ui/form/Form";
import { routes } from "@/constants/routes";
import {
  NewsletterSchema,
  NewsletterSchemaFieldNames,
  NewsletterSchemaType,
} from "@/features/newsletter/schemas/NewsletterSchema";
import useFormError from "@/hooks/useFormError";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const NewsletterForm = () => {
  const methods = useForm<NewsletterSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(NewsletterSchema),
    mode: "onSubmit",
  });
  const { apiErrorMessage } = useFormError(methods.formState);
  const { isSubmitting } = methods.formState;

  const inputCommonProps = {
    error: apiErrorMessage !== undefined,
    errorMessage: apiErrorMessage,
  };

  const onSubmit = async (data: NewsletterSchemaType) => {
    try {
      const response = await fetch(routes.api.newsletter, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.code === "EMAIL_ALREADY_SUBSCRIBED") {
          showToast("warning", "El email ingresado ya está suscripto");
          return;
        }

        throw new Error("Error en la respuesta del servidor");
      }

      showToast("success", "Te suscribiste correctamente!");
      methods.reset();
    } catch {
      showToast("error", "Ha ocurrido un error, intente nuevamente");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} methods={methods} className="flex flex-row">
        <Form.InputText
          {...inputCommonProps}
          name={NewsletterSchemaFieldNames.email}
          placeholder="INGRESE SU EMAIL"
          className="border border-r-0 px-[1rem] h-[3rem] xl:h-[4rem]"
        />
        <div>
          <Button customUppercase type="submit" isLoading={isSubmitting}>
            <p>Suscribirse</p>
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewsletterForm;
