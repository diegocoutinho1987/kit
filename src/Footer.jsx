import React from 'react';
import './Footer.css';
import safePurchaseImg from './assets/compra-segura-1024x147-1-768x110.png';

const Footer = () => {
  return (
    <>

      <section className="final-call-section">
        <div className="final-call-container">
          <div className="final-offer-box">
            <h2 className="final-call-title">
              Não passe pelo puerpério <br />
              <span className="highlight">"desarmada"</span>
            </h2>
            <p className="final-call-text">
              Você pode continuar na "zona de perigo", sofrendo, se sentindo culpada e buscando dicas soltas no Google, ou pode pegar seu <strong>Kit de Sobrevivência</strong> montado por uma especialista com 10 anos de experiência, na palma da sua mão, <strong>agora</strong>.
            </p>
            <ul className="final-offer-list">
              <li><span className="icon-check">✅</span> Videoaulas com as técnicas (O Kit Principal)</li>
              <li><span className="icon-gift">🎁</span> BÔNUS DE OURO: O Ebook "Guia da Amamentação"</li>
              <li><span className="icon-gift">🎁</span> BÔNUS 2: Acesso por 1 ano para rever quando precisar</li>
            </ul>
            <div className="final-pricing">
              <p className="final-investimento">INVESTIMENTO</p>
              <p className="final-old-price">TOTAL: de <span>R$ 197</span></p>
              <p className="final-por-apenas">por apenas</p>
              <p className="final-price">3x de R$ 16,77</p>
              <p className="final-cash-price">Ou R$ 47,00 à vista</p>
            </div>
            <button className="final-button">QUERO ELIMINAR A DOR</button>
            <p className="final-secure-text">Compra segura. Acesso instantâneo por e-mail</p>
            <div className="final-secure-img-wrapper">
              <img src={safePurchaseImg} alt="Compra Segura" className="final-secure-img" width="768" height="110" />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <p className="footer-title">AVISO LEGAL E DE PRIVACIDADE</p>
          <p className="footer-text">
            As informações contidas nesta página têm caráter informativo e educacional. O conteúdo sobre amamentação visa oferecer apoio e orientação, mas <strong>não substitui o acompanhamento médico regular</strong> de um pediatra, obstetra ou outro profissional de saúde qualificado. Sempre consulte seu médico para qualquer questão relacionada à sua saúde ou à saúde do seu bebê. <strong>Os resultados do treinamento podem variar</strong> de pessoa para pessoa. O sucesso na amamentação depende de diversos fatores individuais, incluindo condições de saúde da mãe e do bebê, e do comprometimento em seguir as orientações fornecidas. Não garantimos resultados específicos. Este site utiliza cookies e pixels de rastreamento para melhorar a sua experiência e para fins de marketing. Ao continuar a navegar, você concorda com o uso dessas tecnologias, conforme detalhado em nossa <strong>Política de Privacidade</strong>. Este site não faz parte nem é endossado pelo Facebook, Google ou qualquer uma de suas entidades. Facebook™ e Google™ são marcas registradas de suas respectivas empresas. Todas as menções e logos são utilizados para fins de referência e pertencem aos seus respectivos proprietários.
          </p>
          
          <div className="footer-links">
            <a href="#">Sobre</a>
            <a href="#">Elívia Teles | Contato</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Políticas de Privacidade</a>
            <a href="#">Mapa do Site</a>
          </div>
          
          <p className="footer-copyright">© 2025 Elívia Teles. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
