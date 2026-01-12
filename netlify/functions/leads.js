import admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

/* =========================
   Firebase Admin Init
========================= */
function initFirebase() {
  if (admin.apps.length) return;

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

/* =========================
   SendGrid Init
========================= */
function initSendGrid() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

/* =========================
   Main Handler
========================= */
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    initFirebase();
    initSendGrid();

    const { name, email, phone } = JSON.parse(event.body);

    // 🔍 Validação básica
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Campos obrigatórios ausentes" }),
      };
    }

    const db = admin.firestore();

    /* -------------------------
       Salva no Firestore
    ------------------------- */
    await db.collection("leads_landingpage").add({
      name,
      email,
      phone,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "landing-page",
    });

    /* -------------------------
       Envia e-mail
    ------------------------- */
    await sgMail.send({
      to: process.env.LEAD_RECEIVER_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "🚀 Novo Lead recebido",
      text: `
Nome: ${name}
Email: ${email}
Telefone: ${phone}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("❌ ERRO NA FUNCTION:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro interno ao processar lead",
      }),
    };
  }
}
