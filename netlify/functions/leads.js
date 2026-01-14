const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const { google } = require("googleapis");

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

// 🔐 Google Sheets
const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

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
    const docRef = await db.collection("leads").add({
      name,
      email,
      phone,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Lead salvo no Firestore com ID:", docRef.id);

    // 📧 ENVIA EMAIL
    try {
      await sgMail.send({
        to: process.env.LEAD_RECEIVER_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: "🔥 Novo Lead - Genius In Tech",
        text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}`,
      });
      console.log("Email enviado com sucesso!");
    } catch (err) {
      console.error("Erro enviando email:", err);
    }

    // 📝 ADICIONA NO GOOGLE SHEETS
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Leads!A:G",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              new Date().toLocaleString("pt-BR"),
              name,
              email,
              phone,
              "Site",
              "Novo",
              "",
            ],
          ],
        },
      });
      console.log("Google Sheets atualizado:", response.data);
    } catch (err) {
      console.error("Erro ao salvar no Google Sheets:", err);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Erro interno:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno" }),
    };
  }
};
