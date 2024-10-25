import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ContactPage from './contactPage';

function SiteLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const sendEmail = async (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message
    };
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setFormData({ name: '', email: '', message: '' });
      navigate('/boas-vindas')
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      alert(`Erro ao enviar o e-mail: ${error.text || error.message}`);
    }
  };
  return (
    <div className="site-landing-container">
      <header className="landing-header">
        <h1>Genius In Tech - Criação de Sites e Blogs</h1>
        <p>Desenvolvemos soluções web para o seu negócio crescer!</p>
        <a href="#contact" className="cta-button">Solicite um Orçamento</a>
      </header>
      <div className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Sites Institucionais</h3>
            <p>Criação de sites modernos para apresentar sua empresa de forma profissional.</p>
          </div>
          <div className="service-item">
            <h3>Landing Pages</h3>
            <p>Páginas otimizadas para conversão, focadas em gerar leads para seu negócio.</p>
          </div>
          <div className="service-item">
            <h3>Blogs</h3>
            <p>Desenvolvemos blogs personalizados para sua marca e conteúdo.</p>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonial">
          <p>"A Genius In Tech criou um site incrível para a nossa empresa. Recomendo!"</p>
          <span>- Cliente Satisfeito</span>
        </div>
      </div>
      <div id="contact" className="contact-section">
        <h2>Entre em Contato</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Nome"
            required
          />
          <input
            name='email'
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required>
          </textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ContactPage />
      <footer className="landing-footer">
        <p>&copy; 2024 Genius In Tech - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
export default SiteLanding;
