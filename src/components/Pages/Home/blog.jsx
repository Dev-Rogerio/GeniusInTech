import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Home/blog.deskTop.css';
import ContactPage from "../../../SiteLanding/contactPage";


function Blog() {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade da modal
  const navigate = useNavigate();

  const openModal = () => setModalVisible(true); // Função para abrir a modal
  const closeModal = () => setModalVisible(false); // Função para fechar a modal

  const goBack = () => navigate(-1);

  return (
    <div className="blogPage-container"> {/* Atualizado para blogPage-container */}
      <header>
        <div className="blogPage-header"> {/* Atualizado para blogPage-header */}
          <h1>Nosso Blog</h1>
          <p>A Importância da Presença Online</p>
        </div>
      </header>
      <button className="blogPage-backButton" onClick={goBack}>← Voltar</button>

      <main>
        <article className="blogPage-post"> {/* Atualizado para blogPage-post */}
          <h2>Por que Toda Empresa Precisa de um Site Institucional?</h2>
          <p>No mundo digital de hoje, é essencial que as empresas estejam presentes onde seus clientes estão: na internet. Um site institucional bem projetado é crucial para transmitir profissionalismo e estabelecer uma comunicação direta com os seus clientes.</p>
          <button className="blogPage-button" onClick={openModal}>Assistir Vídeo</button> {/* Atualizado para blogPage-button */}
        </article>

        <article className="blogPage-post"> {/* Atualizado para blogPage-post */}
          <h2>O que é uma Landing Page e Como Ela Pode Ajudar Seu Negócio?</h2>
          <p>Uma landing page eficiente é uma ferramenta essencial para capturar leads e converter visitantes em clientes. Aprenda como uma landing page pode otimizar suas vendas e estratégias de marketing.</p>
          <button className="blogPage-button" onClick={openModal}>Assistir Vídeo</button>
        </article>

        <article className="blogPage-post"> {/* Atualizado para blogPage-post */}
          <h2>Dicas para Criar um Site Institucional Eficiente</h2>
          <p>Descubra as melhores práticas para criar um site institucional que se destaque, incluindo design responsivo e SEO.</p>
          <button className="blogPage-button" onClick={openModal}>Assistir Vídeo</button>
        </article>

        <article className="blogPage-post"> {/* Atualizado para blogPage-post */}
          <h2>Erros Comuns ao Criar um Site e Como Evitá-los</h2>
          <p>Listamos os principais erros que as empresas cometem ao criar seus sites e como você pode evitá-los.</p>
          <button className="blogPage-button" onClick={openModal}>Assistir Vídeo</button>
        </article>

        <article className="blogPage-post"> {/* Atualizado para blogPage-post */}
          <h2>Estudo de Caso: Como um Site Transformou uma Pequena Empresa</h2>
          <p>Veja como uma pequena empresa conseguiu crescer após implementar um site e uma landing page eficazes.</p>
          <button className="blogPage-button" onClick={openModal}>Assistir Vídeo</button>
        </article>
      </main>


      {/* {modalVisible && (
        <div className="blogPage-modal">
          <div className="blogPage-modalContent">
            <span className="blogPage-close" onClick={closeModal}>&times;</span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              frameBorder="0"
              allowFullScreen
              title="Vídeo"
            />
          </div>
        </div>
      )} */}

      <ContactPage />

      <footer className="blogPage-footer"> {/* Atualizado para blogPage-footer */}
        <p>&copy; 2024 - Genius In Tech - Todos os direitos reservados</p>
      </footer>

    </div>
  );
}

export default Blog;
