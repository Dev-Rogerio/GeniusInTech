import React from 'react';
import whatsappIcon from '../assets/image.png';
import '../SiteLanding/contactPage.css';
import '../SiteLanding/site.landing.page.css';

const ContactPage = () => {
  return (
    <div className='_pageWhats'>
      <a href="https://wa.me/5511973418998?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="_blank" className="whatsapp-button">
        <img src={whatsappIcon} alt="WhatsApp" /> Fale Conosco
      </a>
    </div>
  );
};
export default ContactPage;
