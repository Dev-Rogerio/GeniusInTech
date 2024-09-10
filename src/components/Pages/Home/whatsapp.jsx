import React from "react";
import './whatsappButton.css';
import { FaWhatsapp } from 'react-icons/fa';




function WhatsAppButton() {

  const phoneNumber = "5511969809561";
  const message = "Olá, estou interessado nos seus serviços!"
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <div className="whatsapp-button-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> <button className="whatsapp-button" >Fale Comosco</button>
      </a>
    </div>
  )
};
export default WhatsAppButton;