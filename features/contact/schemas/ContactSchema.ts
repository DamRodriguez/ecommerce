import { z } from "zod";

const noSelectedOption = "Debe seleccionar una opción";
const emptyFieldMessage = "Debe completar el campo";
const emailErrorMessaage = "El email ingresado no es válido";

export const ContactSchema = z.object({
  fullName: z.string().min(1, { message: emptyFieldMessage }),
  email: z
    .string()
    .min(1, { message: emptyFieldMessage })
    .pipe(z.email({ message: emailErrorMessaage })),
  options: z.any().refine((val) => val !== undefined && val !== null, {
    message: noSelectedOption,
  }),
  message: z.string().min(1, { message: emptyFieldMessage }),
});

export const ContactSchemaFieldNames = ContactSchema.keyof().enum;

export type ContactSchemaType = z.infer<typeof ContactSchema>;
