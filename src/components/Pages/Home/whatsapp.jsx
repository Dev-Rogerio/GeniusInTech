import React from "react";
import './whatsappButton.css';

function WhatsAppButton() {
  const phoneNumber = "5511973418998";
  const message = "Olá, estou interessado nos seus serviços!"
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="whatsapp-button">
          <img src="URL_DO_ICONE_DO_WHATSAPP" alt="WhatsApp Icon" />
          Fale Conosco
        </button>
      </a>
    </div>
  )
};
export default WhatsAppButton;