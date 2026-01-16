import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  console.warn("⚠️ SENDGRID_API_KEY não definida");
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendLeadEmail({ name, email, phone }) {
  if (!process.env.SENDGRID_API_KEY) return;

  const msg = {
    to: process.env.EMAIL_TO,
    from: "contato@geniusintech.com.br",
    subject: "Novo lead - GeniusInTech",
    html: `
      <h3>Novo lead recebido</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
    `,
  };

  await sgMail.send(msg);
}
