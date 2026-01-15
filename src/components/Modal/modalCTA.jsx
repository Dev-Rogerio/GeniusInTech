import React, { useEffect, useRef, useState } from "react";
import "../../components/Modal/modal.cta.css";
import CampaignCountdown from "../CampaignCountdown";

function ModalCTA({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    requestAnimationFrame(() => {
      modalRef.current?.scrollTo(0, 0);
    });

    nameInputRef.current?.focus();
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🚀 SUBMIT DISPARADO");

    const { name, email, phone } = form;

    if (!name || !email || !phone) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      console.log("📡 ENVIANDO PARA API");

      const response = await fetch("/.netlify/functions/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log("📥 RESPOSTA DA API:", data);

      if (!response.ok) {
        console.error("❌ Erro da API:", data);
        alert("Erro ao enviar lead.");
        return;
      }

      console.log("✅ LEAD ENVIADO COM SUCESSO");

      alert("Lead enviado com sucesso!");
      setForm({ name: "", email: "", phone: "" });
      onClose();
    } catch (error) {
      console.error("🔥 Erro de conexão:", error);
      alert("Falha ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>Transforme visitantes em clientes</h2>

        <p>
          Desenvolvo landing pages profissionais com foco total em conversão e
          geração de leads reais para o seu negócio.
        </p>

        <div className="modal-price-info">
          <div className="price-content">
            <p className="price-title">
              Landing Page Profissional + Sistema de Leads
            </p>
            <strong className="price-value">R$ 700,00</strong>

            <span className="price-subtitle">
              Valor promocional de campanha • Vagas limitadas
            </span>

            <p className="modal-price-note">
              💡 Projetos desse tipo normalmente variam entre
              <strong> R$ 1.200 e R$ 2.000</strong>.
              <br />
              Este valor é uma <strong>condição especial de campanha</strong>.
            </p>
          </div>
        </div>

        <div className="modal-includes">
          <h3>O que você recebe</h3>
          <ul>
            <li>Landing page estratégica focada em conversão</li>
            <li>Design profissional e personalizado</li>
            <li>Totalmente responsiva</li>
            <li>Integração com WhatsApp</li>
            <li>Sistema de captura de leads</li>
            <li>Entrega rápida + suporte inicial</li>
          </ul>
        </div>

        <CampaignCountdown />

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            ref={nameInputRef}
            name="name"
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Seu telefone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <p className="modal-cta-hint">
            🔒 Seus dados estão seguros. Entrarei em contato pelo WhatsApp sem
            compromisso.
          </p>

          <button type="submit" className="modal-btn" disabled={loading}>
            {loading ? "Enviando..." : "Quero gerar mais clientes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalCTA;
