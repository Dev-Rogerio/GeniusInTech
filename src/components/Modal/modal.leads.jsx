// Modal.js
import React from "react";

import '../Modal/modal.desktop.css';

const ModalLeads = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Obrigado!</h2>
        <p>Sua resposta foi enviada com sucesso.</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};
export default ModalLeads;
