import React, { useState } from "react";

import ModalLeads from "../../components/Modal/modal.leads";
import "../../components/Modal/leads.desktop.css";

const Leads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div class="quiz-container">
        <h1>Descubra o Site Ideal para o Seu Negócio</h1>
        <p>
          Responda as perguntas abaixo e descubra qual tipo de site é ideal para
          suas necessidades.
        </p>
        <form id="quiz-form" onSubmit={handleSubmit}>
          <div class="section">
            <h2>Sobre seu Negócio</h2>
            <div class="question">
              <label>Qual é o principal objetivo do seu site?</label>
              <select name="objetivo">
                <option value="gerar_leads">Gerar Leads</option>
                <option value="vender_online">Vender Online</option>
                <option value="mostrar_portfolio">Mostrar Portfólio</option>
                <option value="publicar_conteudo">
                  Publicar Conteúdo (Blog)
                </option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          <div class="section">
            <h2>Serviços/Produtos Oferecidos</h2>
            <div class="question">
              <label>Quantos produtos ou serviços você oferece?</label>
              <select name="produtos_servicos">
                <option value="1_5">1-5</option>
                <option value="5_10">5-10</option>
                <option value="10_plus">10 ou mais</option>
              </select>
            </div>
          </div>
          <div class="section">
            <h2>Sobre seu Site Atual</h2>
            <div class="question">
              <label>Você já tem um site atualmente?</label>
              <select name="site_atual">
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
          </div>
          <div class="section">
            <h2>Orçamento para Desenvolvimento</h2>
            <div class="question">
              <label>
                Qual é o seu orçamento aproximado para o desenvolvimento do
                site?
              </label>
              <select name="orcamento">
                <option value="ate_3000">Até R$ 3.000</option>
                <option value="3000_10000">De R$ 3.000 a R$ 10.000</option>
                <option value="acima_10000">Acima de R$ 10.000</option>
              </select>
            </div>
          </div>
          <div class="section">
            <h2>Funcionalidades Desejadas</h2>
            <div class="question">
              <label>Qual funcionalidade é mais importante para você?</label>
              <select name="funcionalidade">
                <option value="design_personalizado">
                  Design Personalizado
                </option>
                <option value="seo">Otimização para SEO</option>
                <option value="vendas_online">Vendas Online</option>
                <option value="integracao_redes_sociais">
                  Integração com Redes Sociais
                </option>
                <option value="blog">Blog</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          <div class="section">
            <h2>Contato</h2>
            <div class="question">
              <label>
                Informe seu e-mail para receber a recomendação personalizada:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ModalLeads isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default Leads;
