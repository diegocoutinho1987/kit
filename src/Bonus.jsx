import React from 'react';
import './Bonus.css';
import bookImage from './assets/Guia-Pratico-da-Amamentacao-CAPA-1-192x300-1.jpg';

const Bonus = () => {
  return (
    <section className="bonus-section">
      <div className="bonus-container">
        <h2 className="bonus-title">Além do método completo, receba esse Bônus Exclusivo</h2>
        
        <div className="bonus-card">
          <h3 className="bonus-card-title">E-BOOK GUIA PRÁTICO DA AMAMENTAÇÃO</h3>
          <div className="bonus-image-wrapper">
            <img src={bookImage} alt="Capa do E-book Guia Prático da Amamentação" className="bonus-image" width="192" height="300" />
          </div>
        </div>

        <p className="bonus-footer-text">
          Somente esse Bônus custa R$ 97,00, Mas calma você não vai pagar nem perto disso...
        </p>
      </div>
    </section>
  );
};

export default Bonus;
