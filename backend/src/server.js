import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import { google } from "googleapis";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 🔎 Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend GeniusInTech rodando 🚀",
  });
});

// 📌 ID da planilha
const SPREADSHEET_ID = "1SfIqF0Cx3RU3C6_PgH-cSv501BJnjYPONTvEkB2YrwA";

// 🔐 Autenticação Google
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "service-account.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// 📥 Rota de leads
app.post("/api/leads", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos",
    });
  }

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "leads!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, phone]],
      },
    });

    console.log("✅ Lead salvo no Google Sheets");

    return res.status(201).json({
      success: true,
      message: "Lead salvo com sucesso",
    });
  } catch (error) {
    console.error("❌ Erro ao salvar no Sheets:", error.message);

    return res.status(500).json({
      success: false,
      message: "Erro ao salvar lead",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
