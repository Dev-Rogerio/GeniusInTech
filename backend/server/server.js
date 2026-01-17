import "./config/env.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";
import path from "path";
import { sendLeadEmail } from "./emailService.js";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

// console.log("ENV CHECK:", {
//   EMAIL_USER: process.env.EMAIL_USER,
//   EMAIL_PASS: process.env.EMAIL_PASS ? "OK" : "MISSING",
//   EMAIL_TO: process.env.EMAIL_TO,
// });

console.log("ENV CHECK:", {
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? "OK" : "MISSING",
  EMAIL_TO: process.env.EMAIL_TO,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://geniusintech.com.br",
      "https://www.geniusintech.com.br",
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// app.get("/health", (req, res) => {
//   res.json({
//     status: "ok",
//     message: "Backend GeniusInTech rodando 🚀",
//   });
// });

app.get("/healthz", (req, res) => {
  res.json({ status: "ok" });
});

const SPREADSHEET_ID = "1SfIqF0Cx3RU3C6_PgH-cSv501BJnjYPONTvEkB2YrwA";

// 🔐 Autenticação Google
// const auth = new google.auth.GoogleAuth({
//   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

let googleAuthConfig;

if (process.env.GOOGLE_SERVICE_ACCOUNT) {
  // Produção (Render)
  googleAuthConfig = {
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
  };
} else {
  // Local (arquivo)
  googleAuthConfig = {
    keyFile: path.join(process.cwd(), "service-account.json"),
  };
}

const auth = new google.auth.GoogleAuth({
  ...googleAuthConfig,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

app.post("/api/leads", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos",
    });
  }

  try {
    // 1️⃣ Salva no Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "leads!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, phone]],
      },
    });

    console.log("✅ Lead salvo no Google Sheets");

    // 2️⃣ Envia email
    await sendLeadEmail({ name, email, phone });

    console.log("📧 Email enviado com sucesso");

    // 3️⃣ Responde ao front
    res.status(201).json({
      success: true,
      message: "Lead salvo e email enviado com sucesso",
    });
  } catch (error) {
    console.error("❌ Erro ao processar lead:", error);

    res.status(500).json({
      success: false,
      message: "Erro ao processar lead",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
