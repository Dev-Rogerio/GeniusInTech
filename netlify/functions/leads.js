const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const jsonResponse = (statusCode, payload) => ({
    statusCode,
    body: JSON.stringify(payload),
  });

  try {
    // ❌ Bloqueia acesso via navegador (GET)
    if (event.httpMethod !== "POST") {
      return jsonResponse(405, {
        error: "Method Not Allowed. Use POST.",
      });
    }

    // ❌ Proteção contra body vazio
    if (!event.body) {
      return jsonResponse(400, {
        error: "Request body is required",
      });
    }

    const { name, email, phone } = JSON.parse(event.body);

    if (!name || !email || !phone) {
      return jsonResponse(400, { error: "Missing fields" });
    }

    await sgMail.send({
      to: process.env.LEAD_RECEIVER_EMAIL,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: "Genius In Tech",
      },
      replyTo: email,
      subject: "🔥 Novo Lead - Landing Page",
      html: `
        <h2>Novo Lead Recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
      `,
    });

    return jsonResponse(200, { success: true });
  } catch (err) {
    console.error("❌ SendGrid error:", err);
    return jsonResponse(500, { error: "Internal Server Error" });
  }
};
