import { z } from "zod";

const emptyFieldMessage = "Debe completar el campo";
const emailErrorMessaage = "El email ingresado no es válido";

export const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: emptyFieldMessage })
    .pipe(z.email({ message: emailErrorMessaage })),
});

export const NewsletterSchemaFieldNames = NewsletterSchema.keyof().enum;

export type NewsletterSchemaType = z.infer<typeof NewsletterSchema>;
