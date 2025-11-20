import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const phone = formData.get("phone") as string;
    const salon = formData.get("salon") as string;

    await resend.emails.send({
      from: "ForConnect <contact@forconnect.nl>",
      to: "info@forconnect.nl",
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>Nieuw bericht via uw website</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Salon:</strong> ${salon}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Bericht:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}
