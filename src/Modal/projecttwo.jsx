import React from "react";


const ProjectTwo = ({ ativo, setAtivo }) => {

  return (
    <>
      {ativo ? (

        <div className="modal-overlayProjectAll">
          <div className="modal-contentProjectAll">
            <div className="close-buttonProjectAll" onClick={() => setAtivo(false)}>X</div>
            <h1>Projeto 2</h1>
            <p>Projeto 2: Sistema de Gerenciamento de Produção - Kamisaria</p>
            <p>
              Descrição do Projeto:
              O Projeto 2 foi desenvolvido para a Kamisaria, uma empresa do setor têxtil, com o objetivo de criar um Sistema de Gerenciamento de Produção eficiente. O sistema visa otimizar os processos de fabricação e monitoramento da produção, desde a entrada de pedidos até a entrega final.
            </p>
            <p>
              Descrição do Projeto:
              O Projeto 2 foi desenvolvido para a Kamisaria, uma empresa do setor têxtil, com o objetivo de criar um Sistema de Gerenciamento de Produção eficiente. O sistema visa otimizar os processos de fabricação e monitoramento da produção, desde a entrada de pedidos até a entrega final.
            </p>
            <p>
              Minhas principais contribuições no projeto incluíram:
            </p>
            <p>
              Desenvolvimento de um sistema web em React.js com integração a uma API back-end em Node.js e Express para manipulação de dados.
              Automatização do fluxo de trabalho de produção, incluindo acompanhamento de pedidos, controle de estoque, e cálculo de datas de entrega com base em prazos personalizados.
              Implementação de uma interface de fácil uso para a gestão de clientes e pedidos, com funcionalidades de busca por CPF, exibição de dados detalhados e relatórios.
            </p>
            <p>
              Validação e verificação de dados para garantir a consistência e integridade das informações inseridas no sistema.
              Integração com APIs externas, como serviços de CEP, para automação de preenchimento de endereços e integração com sistemas de pagamento.
              Desenvolvimento de modais e feedbacks em tempo real para exibição de mensagens de erro e sucesso, garantindo uma experiência de usuário mais intuitiva.
              Este projeto resultou em uma melhoria significativa na eficiência operacional da Kamisaria, reduzindo erros manuais e acelerando o processo de produção, além de proporcionar maior controle sobre a gestão de pedidos.
            </p>
            <p>
              Essa descrição destaca as principais responsabilidades e impacto que o sistema trouxe para a empresa, além de demonstrar habilidades técnicas e de gestão que foram aplicadas.
            </p>
            <button className="cta-button" onClick={() => setAtivo(false)}>Fechar</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default ProjectTwo;