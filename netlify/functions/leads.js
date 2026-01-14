const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

// 🔐 Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

// 🔐 SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, phone } = JSON.parse(event.body);

    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Campos obrigatórios" }),
      };
    }

    // 💾 SALVA NO FIRESTORE
    await db.collection("leads").add({
      name,
      email,
      phone,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 📧 ENVIA EMAIL
    await sgMail.send({
      to: process.env.LEAD_RECEIVER_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "🔥 Novo Lead - Genius In Tech",
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Erro:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno" }),
    };
  }
};
