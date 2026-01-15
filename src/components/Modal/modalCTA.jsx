import React, { useEffect, useRef, useState } from "react";
import "../../components/Modal/modal.cta.css";
import CampaignCountdown from "../CampaignCountdown";

function ModalCTA({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    requestAnimationFrame(() => {
      modalRef.current?.scrollTo(0, 0);
      nameInputRef.current?.focus();
    });
  }, [isOpen]);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Lead enviado com sucesso 🚀");
      onClose();
    }, 800);
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

        <CampaignCountdown />

        {/* 🔥 NETLIFY FORM REAL */}
        <form
          name="leads"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="modal-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="leads" />
          <input type="hidden" name="bot-field" />

          <input
            ref={nameInputRef}
            name="name"
            type="text"
            placeholder="Seu nome"
            required
          />

          <input name="email" type="email" placeholder="Seu e-mail" required />

          <input name="phone" type="tel" placeholder="Seu telefone" required />

          <p className="modal-cta-hint">
            🔒 Seus dados estão seguros. Entrarei em contato pelo WhatsApp.
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
