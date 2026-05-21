import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  nombre: string;
  empresa?: string;
  correo: string;
  telefono?: string;
  necesidad?: string;
  mensaje: string;
}

const NEED_LABELS: Record<string, string> = {
  consulting: "Consultoría tecnológica",
  ai: "Inteligencia artificial",
  web: "Desarrollo web",
  mobile: "Aplicaciones móviles",
  customSoftware: "Software a la medida",
  digital: "Transformación digital",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const { nombre, empresa, correo, telefono, necesidad, mensaje } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "Correo inválido" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const needLine = necesidad && NEED_LABELS[necesidad] ? NEED_LABELS[necesidad] : "—";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1d3550; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Nueva consulta desde la web
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Nombre:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Empresa:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${empresa || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Correo:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${correo}" style="color: #2563eb;">${correo}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Teléfono:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${telefono || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Necesidad:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${needLine}</td>
          </tr>
        </table>
        <h3 style="color: #1d3550; margin-top: 20px;">Mensaje:</h3>
        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${mensaje}</div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 30px; text-align: center;">
          Este mensaje fue enviado desde el formulario de contacto de seven7company.com
        </p>
      </div>
    `;

    const textContent = `
Nueva consulta desde la web
===========================

Nombre: ${nombre}
Empresa: ${empresa || "—"}
Correo: ${correo}
Teléfono: ${telefono || "—"}
Necesidad: ${needLine}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de seven7company.com
    `.trim();

    await transporter.sendMail({
      from: `"Seven Siete Company" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: correo,
      subject: `Consulta web: ${nombre}${empresa ? ` — ${empresa}` : ""}`,
      text: textContent,
      html: htmlContent,
    });

    const confirmationHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(29, 53, 80, 0.08);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1d3550 0%, #2a4a6b 100%); padding: 40px 40px 32px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      Seven Siete Company
                    </h1>
                  </td>
                </tr>
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="margin: 0 0 16px; color: #1d3550; font-size: 22px; font-weight: 600;">
                      ¡Gracias por contactarnos, ${nombre}!
                    </h2>
                    <p style="margin: 0 0 24px; color: #4b5563; font-size: 16px; line-height: 1.7;">
                      Hemos recibido tu mensaje y nuestro equipo lo revisará pronto. Te responderemos en un plazo máximo de <strong style="color: #1d3550;">24 horas hábiles</strong>.
                    </p>
                    <!-- Divider -->
                    <div style="height: 1px; background: linear-gradient(90deg, transparent, #e5e7eb, transparent); margin: 28px 0;"></div>
                    <!-- Message summary -->
                    <p style="margin: 0 0 12px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Resumen de tu mensaje
                    </p>
                    <div style="background: #f8fafc; border-radius: 10px; padding: 20px; border-left: 4px solid #2563eb;">
                      <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.65; white-space: pre-wrap;">${mensaje.length > 200 ? mensaje.substring(0, 200) + "..." : mensaje}</p>
                    </div>
                    <!-- Divider -->
                    <div style="height: 1px; background: linear-gradient(90deg, transparent, #e5e7eb, transparent); margin: 28px 0;"></div>
                    <!-- CTA -->
                    <p style="margin: 0 0 20px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                      Mientras tanto, puedes conocer más sobre nuestros servicios:
                    </p>
                    <table role="presentation" style="margin: 0 auto;">
                      <tr>
                        <td style="background: #2563eb; border-radius: 8px;">
                          <a href="https://seven7company.com/es/services" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600;">
                            Ver servicios
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background: #f8fafc; padding: 28px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 8px; color: #1d3550; font-size: 15px; font-weight: 600;">
                      Seven Siete Company
                    </p>
                    <p style="margin: 0 0 4px; color: #6b7280; font-size: 13px;">
                      Bogotá, Colombia
                    </p>
                    <p style="margin: 0; color: #6b7280; font-size: 13px;">
                      <a href="mailto:info@seven7company.com" style="color: #2563eb; text-decoration: none;">info@seven7company.com</a>
                    </p>
                  </td>
                </tr>
              </table>
              <!-- Legal -->
              <p style="margin: 24px auto 0; max-width: 520px; color: #9ca3af; font-size: 11px; text-align: center; line-height: 1.5;">
                Este correo fue enviado porque completaste el formulario de contacto en seven7company.com. Si no fuiste tú, puedes ignorar este mensaje.
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const confirmationText = `
¡Gracias por contactarnos, ${nombre}!

Hemos recibido tu mensaje y nuestro equipo lo revisará pronto. Te responderemos en un plazo máximo de 24 horas hábiles.

---

Resumen de tu mensaje:
${mensaje}

---

Mientras tanto, puedes conocer más sobre nuestros servicios en:
https://seven7company.com/es/services

Seven Siete Company
Bogotá, Colombia
info@seven7company.com
    `.trim();

    await transporter.sendMail({
      from: `"Seven Siete Company" <${process.env.SMTP_USER}>`,
      to: correo,
      subject: "¡Recibimos tu mensaje! — Seven Siete Company",
      text: confirmationText,
      html: confirmationHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
