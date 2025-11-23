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

    console.log("KORISNIK EMAIL:", email);

    // 1) EMAIL TO YOU (OWNER)
    await resend.emails.send({
      from: "ForConnect <info@forconnect.nl>",
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

    // 2) AUTO REPLY TO VISITOR
    if (email) {
      await resend.emails.send({
        from: "ForConnect <info@forconnect.nl>",
        to: email,
        subject:
          "Uw demo aanvraag is ontvangen ✔ / Your demo request has been received ✔",
        html: `
          <div style="font-family: Arial, sans-serif; font-size: 15px;">
            <h3>🇳🇱 Nederlands</h3>
            <p>Beste ${name || ""},</p>
            <p>Bedankt voor uw bericht! Uw demo aanvraag is succesvol ontvangen.</p>
            <p>Wij nemen zo snel mogelijk contact met u op om een live demo te plannen.</p>
            <p>Met vriendelijke groet,<br/>ForConnect Team</p>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />

            <h3>🇬🇧 English</h3>
            <p>Dear ${name || ""},</p>
            <p>Thank you for your message! Your demo request has been successfully received.</p>
            <p>We will contact you as soon as possible to schedule a live demo.</p>
            <p>Kind regards,<br/>ForConnect Team</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
