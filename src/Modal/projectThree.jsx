import React from "react";

const ProjectThree = ({ ativo, setAtivo }) => {
  return (
    <>
      {ativo ? (
        <div className="modal-overlayProjectAll">
          <div className="modal-contentProjectAll">
            <button className="close-buttonProjectAll" onClick={() => setAtivo(false)} >X</button>
            <h1>Projeto 3</h1>
            <h1>
              Plataforma de Gestão de Clientes e Vendas - Kamisaria
            </h1>
            <p>
              Descrição do Projeto:
              O Projeto 3 foi desenvolvido para a Kamisaria com foco na criação de uma Plataforma de Gestão de Clientes e Vendas. O objetivo principal foi aprimorar o relacionamento com os clientes e otimizar o processo de vendas, oferecendo uma interface moderna e funcional para gestão de dados e acompanhamento de pedidos.
            </p>
            <p>
              Minhas principais contribuições no projeto incluíram:
            </p>
            <p>
              Criação de um painel de controle em React.js para gerenciar clientes, pedidos e vendedores, com exibição de dados em uma tabela organizada e facilmente navegável.
              Validação de dados de clientes, como CPF e e-mails, para evitar duplicidade de cadastros e garantir a integridade das informações.
              Implementação de formulários dinâmicos com validação em tempo real, fornecendo mensagens de erro e sucesso por meio de modais personalizados.
              Automatização do processo de vendas, desde o cadastro do pedido até a geração de relatórios, garantindo uma visão clara dos indicadores de desempenho de vendas.
              Integração com serviços de armazenamento de dados, utilizando Firebase para persistência e consulta de informações de clientes e pedidos.
              Utilização de APIs externas, como o envio de e-mails automáticos e a verificação de endereços por CEP, melhorando a precisão das informações fornecidas.
              Melhorias na experiência do usuário (UX), tornando a plataforma intuitiva e responsiva, adaptada para uso em diferentes dispositivos (desktop e mobile).
              O sistema trouxe mais eficiência no gerenciamento de vendas e clientes, permitindo à Kamisaria melhorar seu atendimento e aumentar a taxa de retenção de clientes. O projeto resultou em maior produtividade para a equipe de vendas e uma visão clara de todo o processo de vendas em tempo real.
            </p>
            <p>
              Essa descrição foca no gerenciamento de clientes e vendas, destacando a otimização dos processos internos e o impacto positivo que o projeto trouxe para o negócio.
            </p>
            <button className="cta-button" onClick={() => setAtivo(false)}>Fechar</button>
          </div>
        </div>
      ) : null}
    </>
  )
}
export default ProjectThree;