import React, { useEffect, useRef, useState } from "react";
import "../../components/Modal/modal.cta.css";
// import { db } from "../../../src/firebase";
// import { collection, addDoc } from "firebase/firestore";
import CampaignCountdown from "../CampaignCountdown";
// import { sendLead } from "../../services/sendLead";

function ModalCTA({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    // força no próximo frame
    requestAnimationFrame(() => {
      modalRef.current.scrollTop = 0;

      // reforço após animação começar
      setTimeout(() => {
        modalRef.current.scrollTop = 0;
      }, 50);
    });

    nameInputRef.current?.focus();
  }, [isOpen]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !phone) {
  //     alert("Preencha todos os campos!");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await addDoc(collection(db, "leads_landingpage"), {
  //       name,
  //       email,
  //       phone,
  //       timestamp: new Date(),
  //     });

  //     alert("Obrigado! Seus dados foram enviados.");
  //     setName("");
  //     setEmail("");
  //     setPhone("");
  //     onClose(); // fecha o modal após envio
  //   } catch (error) {
  //     console.error("Erro ao enviar lead:", error);
  //     alert("Houve um erro, tente novamente.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !phone) {
  //     alert("Preencha todos os campos!");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     // 🔹 1. Salva no Firebase
  //     await addDoc(collection(db, "leads_landingpage"), {
  //       name,
  //       email,
  //       phone,
  //       timestamp: new Date(),
  //     });

  //     // 🔹 2. Envia email via Netlify Function
  //     await sendLead({
  //       name,
  //       email,
  //       message: `Telefone: ${phone}`,
  //     });

  //     alert("Obrigado! Seus dados foram enviados.");
  //     setName("");
  //     setEmail("");
  //     setPhone("");
  //     onClose();
  //   } catch (error) {
  //     console.error("Erro ao enviar lead:", error);
  //     alert("Houve um erro, tente novamente.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !phone) {
  //     alert("Preencha todos os campos!");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await fetch("/.netlify/functions/leads", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         phone,
  //       }),
  //     });

  //     alert("Obrigado! Seus dados foram enviados.");
  //     setName("");
  //     setEmail("");
  //     setPhone("");
  //     onClose();
  //   } catch (error) {
  //     console.error("Erro ao enviar lead:", error);
  //     alert("Houve um erro, tente novamente.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Erro da function:", data);
        alert("Erro ao enviar lead. Verifique o console.");
        return;
      }

      alert("Lead enviado com sucesso!");
      setName("");
      setEmail("");
      setPhone("");
      onClose();
    } catch (error) {
      console.error("Erro geral:", error);
      alert("Falha de conexão com o servidor.");
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

        {/* <h2>Como funciona sua Landing Page?</h2> */}
        <h2>Transforme visitantes em clientes</h2>

        {/* <p>
          Vou te explicar o processo e criar uma landing page focada em
          conversão.
        </p> */}

        {/* <p>
          Eu crio landing pages profissionais com foco total em conversão e
          geração de leads reais para o seu negócio.
        </p> */}

        <p>
          Desenvolvo landing pages profissionais com foco total em conversão e
          geração de leads reais para o seu negócio.
        </p>

        <div className="modal-price-info">
          {/* <div className="price-icon">💼</div> */}
          {/* <div className="price-icon">📁</div> */}

          <div className="price-content">
            <p className="price-title">
              Landing Page Profissional + Sistema de Leads
            </p>
            <strong className="price-value">R$ 700,00</strong>

            <span className="price-subtitle">
              Valor promocional de campanha • Vagas limitadas
            </span>
            {/* <p className="modal-price-note">
              💡 Valor real do projeto varia entre{" "}
              <strong>R$ 1.200 e R$ 2.000</strong>, dependendo da complexidade.
              <br />
              Esta é uma <strong>condição especial de campanha</strong>.
            </p> */}

            <p className="modal-price-note">
              💡 Projetos desse tipo normalmente variam entre
              <strong> R$ 1.200 e R$ 2.000</strong>, conforme a complexidade.
              <br />
              Este valor é uma <strong>condição especial de campanha</strong>.
            </p>
          </div>
        </div>

        <div className="modal-includes">
          {/* <h3>O que está incluso</h3> */}
          <h3>O que você recebe</h3>

          {/* <ul>
            <li>Design moderno e profissional</li>
            <li>Página focada em conversão</li>
            <li>Totalmente responsiva</li>
            <li>Integração com WhatsApp</li>
            <li>Entrega rápida + suporte inicial</li>
          </ul> */}

          <ul>
            <li>Landing page estratégica focada em conversão</li>
            <li>Design profissional e personalizado</li>
            <li>Totalmente responsiva</li>
            <li>Integração com WhatsApp</li>
            <li>Sistema de captura e armazenamento de leads</li>
            <li>Entrega rápida + suporte inicial</li>
          </ul>

          <p className="modal-price-note">
            Valores a partir de <strong>R$ 700,00</strong>, conforme o projeto.
          </p>
        </div>
        <CampaignCountdown />

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* <p className="modal-cta-hint">
            🔒 Entraremos em contato pelo WhatsApp para entender seu projeto.
            Sem compromisso.
          </p> */}

          <p className="modal-cta-hint">
            🔒 Seus dados estão seguros. Entrarei em contato pelo WhatsApp para
            entender seu projeto, sem compromisso.
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
