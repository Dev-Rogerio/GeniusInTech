import { useEffect, useState } from "react";
import "./countdown.css";

export default function CampaignCountdown() {
  const endDate = new Date("2026-01-31T23:59:59"); // ajuste a data

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
          2,
          "0"
        ),
        minutos: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
        segundos: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <p className="campaign-expired">
        🚫 Campanha encerrada. Consulte novos valores.
      </p>
    );
  }

  return (
    <div className="campaign-box">
      <p className="campaign-title">⏰ Campanha ativa por tempo limitado</p>

      <div className="countdown">
        <span>
          <strong className="countdown-days">{timeLeft.dias}</strong> dias
        </span>
        <span>
          <strong className="countdown-time">{timeLeft.horas}</strong>:
        </span>
        <span>
          <strong className="countdown-time">{timeLeft.minutos}</strong>:
        </span>
        <span className="countdown-seconds">
          <strong>{timeLeft.segundos}</strong>
        </span>
      </div>

      <p className="campaign-note">
        Valor promocional válido até o fim da campanha ou enquanto houver vagas.
      </p>

      <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "6px" }}>
        ⚠️ Após o encerramento da campanha, novos valores serão aplicados.
      </p>
    </div>
  );
}
