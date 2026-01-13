const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const { name, email, phone } = JSON.parse(event.body);

    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Campos obrigatórios ausentes" }),
      };
    }

    await sgMail.send({
      to: process.env.LEAD_RECEIVER_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "🚀 Novo Lead - Landing Page",
      text: `Nome: ${name}
Email: ${email}
Telefone: ${phone}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Erro SendGrid:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
