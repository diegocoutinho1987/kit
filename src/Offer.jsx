import React from 'react';
import './Offer.css';
import safePurchaseImg from './assets/compra-segura-1024x147-1-768x110.png';

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <h3 className="offer-top-text">
          Com tudo o que você vai receber, o protocolo poderia custar R$ 197, mas eu decidi que o seu investimento vai ser de apenas:
        </h3>

        <div className="offer-card">
          <h2 className="offer-card-title">
            Oferta Exclusiva Válida Apenas Neste Mês de Dezembro
          </h2>

          <ul className="offer-list">
            <li>
              <span className="icon-check">✅</span> Videoaulas com as técnicas (O Kit Principal)
            </li>
            <li>
              <span className="icon-gift">🎁</span> BÔNUS DE OURO: O Ebook "Guia da Amamentação"
            </li>
            <li>
              <span className="icon-gift">🎁</span> BÔNUS 2: Acesso por 1 ano para rever quando precisar
            </li>
          </ul>

          <div className="offer-pricing">
            <p className="offer-investimento">INVESTIMENTO</p>
            <p className="offer-old-price">TOTAL: de <span>R$ 197</span></p>
            <p className="offer-por-apenas">por apenas</p>
            <p className="offer-price">3x de R$ 16,77</p>
            <p className="offer-cash-price">Ou R$ 47,00 à vista</p>
          </div>

          <button className="offer-button">QUERO ELIMINAR A DOR</button>

          <p className="offer-secure-text">Compra segura. Acesso instantâneo por e-mail</p>
          
          <div className="offer-secure-img-wrapper">
            <img src={safePurchaseImg} alt="Compra Segura, Satisfação Garantida, Privacidade Protegida" className="offer-secure-img" width="768" height="110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
