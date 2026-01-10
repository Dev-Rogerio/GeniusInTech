import admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

// 🔐 Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

// 📧 SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  let data;

  try {
    data = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "JSON inválido" }),
    };
  }

  const { name, email, phone } = data;

  if (!name || !email || !phone) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Campos obrigatórios ausentes" }),
    };
  }

  try {
    // 🔥 Firestore
    await db.collection("leads_landingpage").add({
      name,
      email,
      phone,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "landing-prod",
    });

    // 📧 Email
    await sgMail.send({
      to: process.env.LEAD_RECEIVER_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL, // ⚠️ domínio verificado
      subject: "Novo lead - Landing Page",
      text: `
Nome: ${name}
Email: ${email}
Telefone: ${phone}
      `,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Erro Function:", err);

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Erro ao processar lead" }),
    };
  }
}
