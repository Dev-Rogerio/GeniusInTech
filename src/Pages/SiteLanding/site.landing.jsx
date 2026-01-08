import React, { useState } from "react";
import "./site.landing.page.css";
import logo from "../../assets/genius.png";
import ModalCTA from "../../components/Modal/modalCTA";

function SiteLandingWhatsApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const phoneNumber = "5511945599306";

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitModal = ({ name, email, phone }) => {
    const message = `Olá, meu nome é ${name}, email: ${email}, telefone: ${phone}. Quero uma landing page.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="lp-root">
      {/* HERO */}
      <section className="lp-hero">
        <img src={logo} alt="Genius In Tech" className="lp-logo" />

        <h1>🚀 Landing Pages que transformam visitantes em clientes.</h1>

        <p>
          Crio landing pages profissionais focadas em conversão, ideais para
          anúncios e vendas online.
        </p>

        <button className="lp-btn" onClick={handleOpenModal}>
          Como funciona? Clique aqui
        </button>
      </section>

      {/* PROBLEMA */}
      <section className="lp-section">
        <h2>Seu site não gera resultados?</h2>
        <p>
          Um site bonito não vende sozinho. Sem estratégia, você perde leads
          todos os dias.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="lp-section lp-dark">
        <h2>A solução certa para vender mais</h2>
        <p>
          Desenvolvo landing pages rápidas, modernas e estruturadas para gerar
          contatos reais para o seu negócio.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className="lp-section">
        <h2>Como funciona o processo</h2>

        <div className="lp-grid">
          <div className="lp-card">
            <h3>1️⃣ Diagnóstico</h3>
            <p>Entendo seu negócio e objetivo.</p>
          </div>

          <div className="lp-card">
            <h3>2️⃣ Criação</h3>
            <p>Desenvolvo a landing page focada em conversão.</p>
          </div>

          <div className="lp-card">
            <h3>3️⃣ Entrega</h3>
            <p>Página pronta para gerar leads e vendas.</p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="lp-section lp-highlight">
        <h2>Quanto custa?</h2>
        {/* <p>
          Landing pages profissionais a partir de
          <strong> R$ 700,00</strong>
        </p> */}

        <button className="lp-btn" onClick={handleOpenModal}>
          Quero saber mais
        </button>
      </section>

      {/* PROVA SOCIAL */}
      {/* <section className="lp-section">
        <h2>Clientes satisfeitos</h2>

        <div className="lp-grid">
          <div className="lp-card">
            <p>"Depois da landing page, meus leads dobraram."</p>
            <span>— João S.</span>
          </div>
        </div>
      </section> */}

      <section className="lp-section">
        <h2>Clientes satisfeitos</h2>

        <div className="lp-grid">
          {/* Kamisaria Zanuto */}
          <div className="lp-card">
            <p>
              "A landing page trouxe exatamente o tipo de cliente que a
              Kamisaria Zanuto procura. Hoje recebemos contatos mais
              qualificados e com real interesse em camisa sob medida."
            </p>
            <span>— Kamisaria Zanuto | Camisas Sob Medida</span>
          </div>

          {/* Advogada e Perita */}
          <div className="lp-card">
            <p>
              "O site passou mais credibilidade ao meu trabalho como advogada e
              perita. Facilitou o primeiro contato com clientes e profissionais
              que buscavam atendimento jurídico especializado."
            </p>
            <span>— Carolina Toledo | Advogada e Perita</span>
          </div>
          <div className="lp-card">
            <p>
              "A landing page facilitou muito o contato com novos clientes. Hoje
              recebo solicitações mais organizadas para seguro auto e
              residencial, o que agilizou meu atendimento e aumentou as
              oportunidades."
            </p>
            <span>— Ana Ribeiro | Corretora de Seguros</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="lp-section lp-cta-final">
        <h2>Pronto para vender mais?</h2>
        <p>Clique abaixo e vamos conversar.</p>

        <button className="lp-btn" onClick={handleOpenModal}>
          Quero minha landing page
        </button>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        © 2026 Genius In Tech — Todos os direitos reservados
      </footer>

      {/* MODAL */}
      <ModalCTA
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
    </div>
  );
}

export default SiteLandingWhatsApp;
