import React, { useState } from "react";

import "../Modal/modal-services.css";

const Services = ({ showModalServices, setShowModalServices }) => {
  const handleCloseModal = () => {
    setShowModalServices(false);
  };

  return showModalServices ? (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={handleCloseModal}>
            &times;
          </span>
          <h2>Nossos Serviços</h2>
          <p>
            Oferecemos uma gama de serviços inovadores para impulsionar sua
            empresa:
          </p>
          <ul>
            <li>Desenvolvimento de Software sob medida</li>
            <li>Consultoria em Tecnologia</li>
            <li>Transformação Digital</li>
            <li>Integração de Sistemas</li>
            <li>Suporte e Manutenção Técnica</li>
          </ul>
        </div>
      </div>
    </>
  ) : null;
};
export default Services;
