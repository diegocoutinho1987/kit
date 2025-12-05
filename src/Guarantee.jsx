import React from 'react';
import './Guarantee.css';
import badge from './assets/garantia-7-dias-pb-1-150x150.png';

const Guarantee = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        <div className="guarantee-badge-wrapper">
          <img src={badge} alt="Garantia de 7 dias" className="guarantee-badge" width="150" height="150" />
        </div>
        <div className="guarantee-content">
          <h2 className="guarantee-title">Você não tem nada a perder!</h2>
          <p className="guarantee-text">
            Você terá 7 dias para testar. Se nesse período você acreditar que o conteúdo não é para você, não tem problema, eu devolvo 100% do seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
