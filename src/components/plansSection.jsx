import "./plans.css";

export default function PlansSection({ onOpenModal }) {
  return (
    <section className="plans-section" id="planos">
      <h2>Planos pensados para gerar clientes</h2>
      <p className="plans-subtitle">
        Escolha o nível ideal para o seu negócio e comece a converter visitantes
        em oportunidades reais.
      </p>

      <div className="plans-grid">
        {/* STARTER */}
        <div className="plan-card featured">
          <span className="badge">Campanha</span>
          <h3>Starter</h3>
          <p className="price">R$ 700,00</p>
          <p className="price-note">Valor promocional por tempo limitado</p>

          <ul>
            <li>Landing page focada em conversão</li>
            <li>Design moderno e responsivo</li>
            <li>Integração com WhatsApp</li>
            <li>Captura de leads</li>
            <li>Entrega rápida</li>
          </ul>

          <button onClick={onOpenModal}>Quero esse plano</button>
        </div>

        {/* PROFISSIONAL */}
        <div className="plan-card">
          <h3>Profissional</h3>
          <p className="price">A partir de R$ 1.500</p>

          <ul>
            <li>Tudo do plano Starter</li>
            <li>Copy estratégica</li>
            <li>Otimização de conversão</li>
            <li>Personalizações</li>
            <li>Suporte prioritário</li>
          </ul>

          <button onClick={onOpenModal}>Quero algo mais completo</button>
        </div>

        {/* PREMIUM */}
        <div className="plan-card">
          <h3>Premium</h3>
          <p className="price">Sob consulta</p>

          <ul>
            <li>Solução sob medida</li>
            <li>Automações</li>
            <li>Integrações avançadas</li>
            <li>Estratégia completa</li>
          </ul>

          <button onClick={onOpenModal}>Solicitar proposta</button>
        </div>
      </div>
    </section>
  );
}
