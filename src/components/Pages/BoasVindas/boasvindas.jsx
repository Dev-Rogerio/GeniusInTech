import React from 'react';
import '../BoasVindas/boasvindas.css'
function BoasVindas() {
  return (
    <div className="boas-vindas-container">
      <div className="boas-vindas-content">
        <h1>Bem-vindo!</h1>
        <p>Recebemos suas informações e entraremos em contato em breve.</p>
        <button className="voltar-btn" onClick={() => window.location.href = '/'}>Voltar para a página inicial</button>
      </div>
    </div>
  );
}

export default BoasVindas;
