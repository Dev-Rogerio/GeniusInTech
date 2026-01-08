/**
 * Firebase Cloud Functions – SendGrid Email
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const sgMail = require("@sendgrid/mail");

// Limite de instâncias (controle de custo)
setGlobalOptions({maxInstances: 10});

// API Key do SendGrid (vinda do config)
sgMail.setApiKey(process.env.SENDGRID_KEY || "");

// Função HTTP para receber o formulário da landing page
exports.sendLeadEmail = onRequest(async (req, res) => {
  try {
    const {name, email, phone} = req.body;

    if (!name || !email) {
      return res
          .status(400)
          .json({success: false, message: "Dados inválidos"});
    }

    const msg = {
      to: "roger@geniusintech.com.br",
      from: "contato@em6186.geniusintech.com.br",
      subject: "Novo lead da Landing Page",
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone || "-"}`,
    };

    await sgMail.send(msg);

    logger.info("Email enviado com sucesso", {email});

    return res.status(200).json({success: true});
  } catch (error) {
    logger.error("Erro ao enviar email", error);
    return res.status(500).json({success: false});
  }
});
