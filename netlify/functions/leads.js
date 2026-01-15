import admin from "firebase-admin";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";

let db;
let sheets;

function initFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
    });
  }
  db = admin.firestore();
}

function initSendGrid() {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }
}

function initGoogleSheets() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  sheets = google.sheets({ version: "v4", auth });
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, phone } = JSON.parse(event.body || "{}");

    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Campos obrigatórios" }),
      };
    }

    initFirebase();
    initSendGrid();
    initGoogleSheets();

    await db.collection("leads").add({
      name,
      email,
      phone,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    if (process.env.LEAD_RECEIVER_EMAIL) {
      await sgMail.send({
        to: process.env.LEAD_RECEIVER_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: "🔥 Novo Lead - Genius In Tech",
        text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}`,
      });
    }

    await sheets.spreadsheets.values.append({
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
}
