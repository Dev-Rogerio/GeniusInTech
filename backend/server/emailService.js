import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendLeadEmail = async ({ name, email, phone }) => {
  await sgMail.send({
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: "🔥 Novo lead capturado no site",
    html: `
      <h2>Novo Lead Recebido</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <hr />
      <p>📅 ${new Date().toLocaleString()}</p>
    `,
  });
};
