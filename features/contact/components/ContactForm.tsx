"use client";
import showToast from "@/components/toast/showToast";
import Button from "@/components/ui/buttons/Button";
import Form from "@/components/ui/form/Form";
import type { BaseOption } from "@/components/ui/inputs/InputCombobox";
import { routes } from "@/constants/routes";
import {
  ContactSchema,
  ContactSchemaFieldNames,
  ContactSchemaType,
} from "@/features/contact/schemas/ContactSchema";
import useFormError from "@/hooks/useFormError";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const ContactForm = () => {
  const methods = useForm<ContactSchemaType>({
    defaultValues: {
      fullName: "",
      email: "",
      options: undefined,
      message: "",
    },
    resolver: zodResolver(ContactSchema),
    mode: "onSubmit",
  });
  const { apiErrorMessage } = useFormError(methods.formState);
  const { isSubmitting } = methods.formState;

  const inputCommonProps = {
    error: apiErrorMessage !== undefined,
    errorMessage: apiErrorMessage,
  };

  const consultationOptions = [
    { id: 1, text: "Venta de Propiedad" },
    { id: 2, text: "Alquiler de Propiedad" },
    { id: 3, text: "Asesoramiento Jurídico" },
    { id: 4, text: "Tasación Profesional" },
    { id: 5, text: "Marketing Digital" },
    { id: 6, text: "Otro" },
  ];

  interface ConsultationOptionType extends BaseOption {
    text: string;
  }

  const renderAccountOption = (option: BaseOption) => {
    const consultation = option as ConsultationOptionType;
    return <p>{consultation.text}</p>;
  };

  const onSubmit = async (data: ContactSchemaType) => {
    try {
      const response = await fetch(routes.api.contact, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      showToast("success", "Mensaje enviado con éxito!");
      methods.reset();
    } catch {
      showToast("error", "Ha ocurrido un error, intente nuevamente");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={onSubmit}
        methods={methods}
        className="bg-surface-bright p-8 md:p-12 h-full flex flex-col justify-between gap-8"
      >
        <div className="space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.InputText
              {...inputCommonProps}
              label="Nombre Completo"
              name={ContactSchemaFieldNames.fullName}
              placeholder="Ingrese su nombre"
            />
            <Form.InputText
              {...inputCommonProps}
              label="Email"
              name={ContactSchemaFieldNames.email}
              placeholder="Ingrese su email"
            />
          </div>
          <Form.InputCombobox
            {...inputCommonProps}
            label="Tipo de Consulta"
            name={ContactSchemaFieldNames.options}
            placeholder="Seleccione una opción"
            options={consultationOptions}
            renderOption={renderAccountOption}
            optionsContainerClassName="bg-surface-bright border border-on-surface-strong"
            optionClassName="hover:bg-on-surface-strong hover:text-surface"
          />
          <Form.InputTextArea
            {...inputCommonProps}
            label="Mensaje"
            name={ContactSchemaFieldNames.message}
            placeholder="¿Cómo podemos ayudarle?"
            className="min-h-[10rem] border px-[1rem]"
          />
        </div>

        <Button full customUppercase type="submit" isLoading={isSubmitting}>
          <p>Enviar Consulta</p>
        </Button>
      </Form>
    </FormProvider>
  );
};

export default ContactForm;
