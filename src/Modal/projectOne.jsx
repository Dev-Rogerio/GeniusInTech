import React from "react";
import '../Modal/projectOne.css';

const ProjectOne = ({ ativo, setAtivo }) => {
  if (!ativo) {
    return null;
  }
  return (
    <>
      {ativo ? (
        <div className="modal-overlayProjectAll">
          <div className="modal-contentProjectAll">
            <button className="close-buttonProjectAll" onClick={() => setAtivo(false)} >X</button>
            <h1>Projeto 1</h1>
            <p>
              O projeto Geniuns in Tech consiste no desenvolvimento de uma plataforma digital voltada para soluções inovadoras em tecnologia, com foco em oferecer serviços personalizados em áreas como desenvolvimento web, marketing digital e automação de processos. O objetivo do projeto é atender empresas de pequeno e médio porte, proporcionando soluções eficientes para aumentar a presença digital e otimizar operações internas. A plataforma inclui funcionalidades como criação de sites, gerenciamento de campanhas em redes sociais, análise de dados e suporte técnico contínuo.
            </p>
            <p>
              Como parte do projeto, participei ativamente da concepção, planejamento e execução de diversas fases, incluindo:
            </p>
            <ul>
              <li>Pesquisa de mercado para identificar as principais demandas tecnológicas das empresas-alvo.</li>
              <li>Desenvolvimento de soluções web personalizadas utilizando tecnologias modernas, como React e Node.js.</li>
              <li>Estratégia de marketing digital focada em aumentar o engajamento e a visibilidade online dos clientes.</li>
              <li>Automatização de processos internos, integrando ferramentas para melhorar a produtividade e reduzir custos operacionais.</li>
            </ul>
            <br />
            <p>
              O projeto também envolveu a criação de uma equipe multidisciplinar para colaborar com parceiros, garantindo a qualidade dos serviços entregues e a satisfação dos clientes.
            </p>
            <button className="cta-button" onClick={() => setAtivo(false)}>Fechar</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProjectOne;
