import React from "react";

const ModalBoasVindas = ({ isModalBoasVindas, setIsModalBoasVindas }) => {
  const handleCloseModal = () => {
    setIsModalBoasVindas(false)
  }
  return isModalBoasVindas ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseModal}>&times;</span>
        <h2>Boas Vindas!</h2>
        <p>Agradecemos seu contato, avisaremos em breve sobre nossos serviços. </p>
        <button style={{ backgroundColor: '#007bff' }} onClick={handleCloseModal} >Fechar</button>
      </div>
    </div>
  ) : null;
};
export default ModalBoasVindas;