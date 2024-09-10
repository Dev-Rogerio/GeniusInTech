import React, { useEffect } from "react";

import LogoMarca from '../../../assents/genius.png';
import FundoTransparent from '../../../assents/fundotransparent.png';
import WhatsAppButton from "./whatsapp";
import WhatsappIcon from '../../../assents/image.png';

import '../Home/home.css';

function Home() {

  // Função para adicionar a classe "in-view" quando a seção entra em visão
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

    // Limpar o observador quando o componente for desmontado
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="page-container"> {/* Contêiner principal que envolve todo o conteúdo */}
      <div className="content-wrap"> {/* Contêiner para o conteúdo principal */}
        <div className="template">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <img className="fundo" src={FundoTransparent} alt="" />
          <section className="logo">
            <section className="logoBlack">
              <img src={LogoMarca} alt="Logo Genius In Tech" />
            </section>
          </section>

          <main>
            <section className="_secHome" id="home">
              <h1>Bem-vindo ao Genius In Tech</h1>
              <p>Inovação e tecnologia ao seu alcance.</p>
              <button className="cta-button">Conheça nossos serviços</button>
            </section>
            <section className="_secSobreNos" id="about">
              <h2>Sobre Nós</h2>
              <p>Somos uma empresa focada em soluções inovadoras no campo da tecnologia e desenvolvimento de software. Nosso objetivo é transformar ideias em produtos digitais eficientes e de alta qualidade.</p>
            </section>

            <section className="_secMissao">
              <h3>Missão</h3>
              <p>Entregar soluções tecnológicas que façam a diferença na vida de nossos clientes.</p>
            </section>
            <section className="_secVisao">
              <h3>Visão</h3>
              <p>Conheça nossa visão.</p>
              <p>Ser referência em inovação e desenvolvimento tecnológico no mercado global.</p>
            </section>
            <section className="_secValores">
              <h3>Valores</h3>
              <ul>
                <li>Inovação</li>
                <li>Qualidade</li>
                <li>Compromisso com o cliente</li>
                <li>Transparência</li>
              </ul>
            </section>

            <section className="_secSevicos" id="services">
              <h2>Serviços</h2>
              <p>Descubra os serviços que oferecemos.</p>
            </section>


            <section className="_secContato" id="contact">
              <h2>Contato</h2>
              <form>
                <article>
                  <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" name="name" required />
                </article>
                <article>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </article>
                <article>
                  <button type="submit">Enviar</button>
                </article>
              </form>
            </section>

            <section className="_secPortfolio" id="portfolio">
              <h2>Portfólio</h2>
              <div className="portfolio-list">
                <div className="portfolio-item">
                  <h3>Projeto 1</h3>
                  <p>Descrição do projeto.</p>
                </div>
              </div>
              <div className="portfolio-item">
                <h3>Projeto 2</h3>
                <p>Descrição do projeto.</p>
              </div>
              <div className="portfolio-item">
                <h3>Projeto 3</h3>
                <p>Descrição do projeto.</p>
              </div>
            </section>


            <section className="_secTestimonials" id="testimonials">
              <h2>Depoimentos</h2>
              <div className="testimonials-list">
                <div className="testimonial-item">
                  <p>"A Genius In Tech transformou a maneira como operamos nosso negócio. A solução deles foi fundamental para nosso sucesso." - Cliente A</p>
                </div>
                <div className="testimonial-item">
                  <p>"Excelente equipe, sempre inovando e entregando projetos de alta qualidade." - Cliente B</p>
                </div>
                <div className="testimonial-item">
                  <p>"Nosso sistema ficou muito mais eficiente graças à consultoria da Genius In Tech." - Cliente C</p>
                </div>
              </div>
            </section>


            <section className="_secContato" id="contact">
              <h2>Contato</h2>
              <form>
                <article>
                  <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" name="name" required />
                </article>
                <article>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </article>
                <article>
                  <label htmlFor="message">Mensagem:</label>
                  <textarea id="message" name="message" required></textarea>
                </article>
                <article>
                  <button type="submit">Enviar</button>
                </article>
              </form>
            </section>

          </main>
        </div>
      </div>
      <section className='whatsappIcon'>
        <img src={WhatsappIcon} alt="" />
        <WhatsAppButton style={{ marginRight: '10px' }} />

      </section>

      <footer className="Footer">
        <div className="Footer-sections">
          <div className="Footer-contact">
            <h3>Entre em Contato</h3>
            <p>Email: contato@geniusintech.com.br</p>
            <p>Telefone: (11) 96980-9561</p>
            <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
          </div>

          <div className="Footer-links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="Footer-social">
            <h3>Siga-nos</h3>
            <a href="https://facebook.com/geniusintech" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com/company/geniusintech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/geniusintech" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div className="Footer-newsletter">
            <h3>Assine nossa Newsletter</h3>
            <article>
              <input type="email" placeholder="Seu email" />
              <button>Inscrever-se</button>
            </article>
          </div>
        </div>

        <div className="Footer-copyright">
          <p>&copy; 2024 Geniusintech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
