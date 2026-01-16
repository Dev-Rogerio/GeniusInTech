import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend GeniusInTech rodando 🚀",
  });
});

const SPREADSHEET_ID = "1SfIqF0Cx3RU3C6_PgH-cSv501BJnjYPONTvEkB2YrwA";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
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
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "leads!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, phone]],
      },
    });

    console.log("✅ Lead salvo no Google Sheets");

    res.status(201).json({
      success: true,
      message: "Lead salvo com sucesso",
    });
  } catch (error) {
    console.error("❌ Erro ao salvar no Sheets:", error);

    res.status(500).json({
      success: false,
      message: "Erro ao salvar lead",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
