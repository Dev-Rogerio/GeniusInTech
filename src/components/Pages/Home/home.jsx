import React, { useEffect, useRef, useState } from "react";

import LogoMarca from '../../../assets/genius.png';
import Portifolio from '../../../assets/portifolio.jpg';
import SobreNos from '../../../assets/sobrenos.jpg';
import Missao from '../../../assets/missao.jpg';
import Visao from '../../../assets/vision.jpg';
import Valores from '../../../assets/valores.jpg';
import Servicos from '../../../assets/servicos.jpg';
import Depoimentos from '../../../assets/depoimentos.jpg';

import FundoTransparent from '../../../assets/fundotransparent.png';
import WhatsAppButton from "./whatsapp";
import WhatsappIcon from '../../../assets/image.png';
import emailjs from 'emailjs-com';

import '../Home/home.css';
import '../Home/home.mobile.css';

import ContactPage from "../../../SiteLanding/contactPage";
import Services from "./modal-services";
import axios from "axios";

import ModalBoasVindas from "./modal-boasvindas";
import ProjectOne from "../../../Modal/projectOne";
import ProjectTwo from "../../../Modal/projecttwo";
import ProjectThree from "../../../Modal/projectThree";

function Home() {
  const [pageProjectOne, setPageProjectOne] = useState(false);
  const [isHovered, setisHovered] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [showModalServices, setShowModalServices] = useState(false);
  const [isModalBoasVindas, setIsModalBoasVindas] = useState(false);
  const [isProjectOne, setIsProjectOne] = useState(false);
  const [isProjectTwo, setIsProjectTwo] = useState(false);
  const [isProjectThree, setIsProjectThree] = useState(false);
  // const [projectTwo, setProjectTwo] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [textOne, setTextOne] = useState('saiba mais ⬎');
  const [textTwo, setTextTwo] = useState('saiba mais ⬎');
  const [textThree, setTextThree] = useState('saiba mais ⬎');
  const timeoutRefOne = useRef(null);
  const timeoutRefTwo = useRef(null);
  const timeoutRefThree = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  }

  const handleMouseProjectOne = () => {
    setTextOne('abrir ⬏');
    timeoutRefOne.current = setTimeout(() => {
      setIsProjectOne(true);
    }, 3000);
  };

  const handleMouseEnterProjectTwo = () => {
    setTextTwo('abrir ⬏');
    timeoutRefTwo.current = setTimeout(() => {
      setIsProjectTwo(true);
    }, 3000);
  };

  const handleMouseEnterProjectThree = () => {
    setTextThree('abrir ⬏');
    timeoutRefThree.current = setTimeout(() => {
      setIsProjectThree(true);
    }, 3000);
  };

  const handleMouseLeaveOne = () => {
    clearTimeout(timeoutRefOne.current);
    setTextOne('saiba mais ⬎');
  };

  const handleMouseLeaveProjectTwo = () => {
    clearTimeout(timeoutRefTwo.current);
    setTextTwo('saiba mais ⬎');
  };

  const handleMouseLeaveProjectThree = () => {
    clearTimeout(timeoutRefThree.current);
    setTextThree('saiba mais ⬎');
  };


  const handleClickSaibaMaisOne = () => {
    console.log('clicou');
    setIsProjectOne(true);
  };


  const handleClickSaibaMaisTwo = () => {
    setIsProjectTwo(true);
  };

  const handleClickSaibaMaisThree = () => {
    setIsProjectThree(true);
  };

  const handleCloseModal = () => {
    setIsProjectOne(false);
    setTextOne('saiba mais ⬎')
  }

  const sendEmail = async (e) => {
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
    };
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setFormData({ name: '', email: '' });

    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      alert(`Erro ao enviar o e-mail: ${error.text || error.message}`);
    }
  };

  useEffect(() => {
    if (showVideo) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showVideo]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="template">
          <img className="fundo" src={FundoTransparent} alt="Fundo decorativo" />

          <header className="_header">

            <section className="_secLogo">

              <section className="logoBlack">
                <img src={LogoMarca} alt="Logo Genius In Tech" />
              </section>
            </section>


            <div className="menu-toggle" onClick={handleToggle}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>



            <div className="menu-togle" onClick={handleToggle}>
              <div className={`bar ${isMenuOpen ? 'open' : ''} `}></div>
              <div className={`bar ${isMenuOpen ? 'open' : ''} `}></div>
              <div className={`bar ${isMenuOpen ? 'open' : ''} `}></div>
            </div>

          </header>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" aria-current="page">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>

          <main className="_main">

            <section className="_secHome" id="home">
              <h2>Bem-vindo ao Genius In Tech</h2>
              <p>Inovação e tecnologia ao seu alcance.</p>
              <div className="button-container">
                <Services showModalServices={showModalServices} setShowModalServices={setShowModalServices} />
                {showVideo && (
                  <div className="video-modal">
                    <div className="video-container">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cxRV8_PkP1s"
                        title="Apresentação Genius In Tech"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button className="close-video" onClick={() => setShowVideo(false)}>Fechar</button>
                    </div>
                  </div>
                )}
                <button className="cta-button" onClick={() => setShowModalServices(true)}>Conheça nossos serviços</button>
                <button className="video-button" onClick={() => setShowVideo(true)}>Assista o vídeo</button>
              </div>
            </section>

            <section className="_secSobreNos" id="about">
              <h2>Sobre Nós</h2>
              <div className="sobre-nos-container">
                <img src={SobreNos} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <div className="textP">
                <p>
                  Somos uma empresa focada em soluções inovadoras no campo da tecnologia e desenvolvimento de software. Nosso objetivo é transformar ideias em produtos digitais eficientes e de alta qualidade.
                </p>
              </div>
            </section>

            <section className="_secMissao">
              <h2>Missão</h2>
              <div className="sobre-nos-container">
                <img src={Missao} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <div className="textP">
                <p>Entregar soluções tecnológicas que façam a diferença na vida de nossos clientes.</p>
              </div>
            </section>

            <section className="_secVisao">
              <h2>Visão</h2>
              <div className="sobre-nos-container">
                <img src={Visao} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <div className="textP">
                <p>Ser referência em inovação e desenvolvimento tecnológico no mercado global.</p>
              </div>
            </section>

            <section className="_secValores">
              <h2>Valores</h2>
              <div className="sobre-nos-container">
                <img src={Valores} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <ul>
                <li>Inovação</li>
                <li>Qualidade</li>
                <li>Compromisso com o cliente</li>
                <li>Transparência</li>
              </ul>
            </section>

            <section className="_secServicos" id="services">
              <h2>Serviços</h2>
              <div className="sobre-nos-container">
                <img src={Servicos} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <div className="textP">
                <p>Descubra os serviços que oferecemos.</p>
              </div>
              <button className="cta-button">Clique aqui</button>
            </section>

            <ModalBoasVindas isModalBoasVindas={isModalBoasVindas} setIsModalBoasVindas={setIsModalBoasVindas} />

            <section className="_secContato" id="contact">
              <h2>serviços</h2>
              <section className="_secContatoBox">
                <h1>Qual o site ideal para seu negócio?</h1>
                <h1>Receba Nossos Serviços!</h1>
                <form onSubmit={handleSubmit}>
                  <article>
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required />
                  </article>
                  <article>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                  </article>
                  <article>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" required></textarea>
                  </article>
                  <article>
                    <button type="submit" onClick={() => setIsModalBoasVindas(true)} >Enviar</button>
                  </article>
                </form>
              </section>
            </section>

            <section className="_secPortfolio" id="portfolio">
              <ProjectOne ativo={isProjectOne} setAtivo={setIsProjectOne} />
              <ProjectTwo ativo={isProjectTwo} setAtivo={setIsProjectTwo} />
              <ProjectThree ativo={isProjectThree} setAtivo={setIsProjectThree} />

              <h2>Portfólio</h2>
              <div className="sobre-nos-container">
                <img src={Portifolio} alt="Sobre Nós" className="sobre-nos-image" />
              </div>

              <div className="portfolio-list">
                <div
                  className="portfolio-item"
                  onMouseEnter={handleMouseProjectOne}
                  onMouseLeave={handleMouseLeaveOne}
                  onClick={handleClickSaibaMaisOne}>
                  <h3>Projeto 1</h3>
                  <p>Descrição do projeto.</p>
                  <p>{textOne}</p>
                </div>
                <div className="portfolio-item"
                  onMouseEnter={handleMouseEnterProjectTwo}
                  onMouseLeave={handleMouseLeaveProjectTwo}
                  onClick={handleClickSaibaMaisTwo}>
                  <h3>Projeto 2</h3>
                  <p>Descrição do projeto.</p>
                  <p>{textTwo}</p>
                </div>
                <div className="portfolio-item"
                  onMouseEnter={handleMouseEnterProjectThree}
                  onMouseLeave={handleMouseLeaveProjectThree}
                  onClick={handleClickSaibaMaisThree}
                >
                  <h3>Projeto 3</h3>
                  <p>Descrição do projeto.</p>
                  <p>{textThree}</p>
                </div>
              </div>
            </section>

            {/* <section className="_secTestimonials" id="testimonials">
              <h2>Depoimentos</h2>
              <div className="sobre-nos-container">
                <img src={Depoimentos} alt="Sobre Nós" className="sobre-nos-image" />
              </div>
              <div className="testimonials-list">
                <div className="testimonial-item">
                  <div className="text-description">
                    <p> A Genius In Tech transformou a maneira como operamos nosso negócio. A solução deles foi fundamental para nosso sucesso.</p>
                  </div>
                  <p> Cliente - A Kamisaria Zanuto </p>
                </div>
                <div className="testimonial-item">
                  <div className="text-description">
                    <p> Excelente equipe, sempre inovando e entregando projetos de alta qualidade. </p>
                  </div>
                  <p> Cliente - B Cotovia</p>
                </div>
                <div className="testimonial-item">
                  <div className="text-description">
                    <p>Nosso sistema ficou muito mais eficiente graças à consultoria da Genius In Tech.</p>
                  </div>
                  <p>Cliente - C  VLZM</p>
                </div>
              </div>
            </section> */}

          </main>

        </div>
      </div>
      <ContactPage />
      <footer className="Footer">
        <div className="Footer-sections">
          <div className="Footer-contact">
            <h4>Entre em Contato</h4>
            <p>Email: contato@geniusintech.com.br</p>
            <p>Telefone: (11) 97341-8998</p>
            <p>Endereço: Praça Gen. Gentil Falcão, 51 </p>
            <p>Cep: 04571-150 - Brooklin - SP </p>
          </div>
          <div className="Footer-links">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            </ul>
          </div>
          <div className="Footer-social">
            <h4>Siga-nos</h4>
            <a href="https://facebook.com/geniusintech" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com/company/geniusintech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/geniusintech" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="Footer-newsletter">
            <h4>Assine nossa Newsletter</h4>
            <article>
              <input type="email" placeholder="Seu email" />
              <button className="cta-button">Inscrever-se</button>
            </article>
          </div>
        </div>
        <div className="Footer-copyright">
          <p>&copy; 2024 Geniusintech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div >
  );
}
export default Home;
