const sgMail = require("@sendgrid/mail");

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY não definida");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  try {
    await sgMail.send({
      to: "contato@geniusintech.com.br",
      from: process.env.SENDGRID_FROM,
      subject: "Novo lead recebido",
      html: `
        <h3>Novo Lead</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
