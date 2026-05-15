import { NewsletterSchema } from "@/features/newsletter/schemas/NewsletterSchema";
import { createSupabaseServerClient } from "@/supabase/clients/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = NewsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Email inválido" }, { status: 400 });
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: parsed.data.email,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            code: "EMAIL_ALREADY_SUBSCRIBED",
            message: "Este email ya está suscripto",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { message: "No se pudo guardar la suscripción" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Suscripción creada correctamente" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ message: "Error inesperado" }, { status: 500 });
  }
}
