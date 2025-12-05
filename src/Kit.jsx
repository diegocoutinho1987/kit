import React from "react";
import "./Kit.css";
import kitImg from "./assets/Kit-de-Sobrevivencia-na-Amamentacao-01.webp";

const Checkbox = ({ color }) => (
  <div className="kit-checkbox">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function KitSection() {
  return (
    <section className="kit-section">
      <div className="kit-container">
        
        {/* Intro Section */}
        <div className="kit-intro">
          <div className="kit-img-wrapper">
            <img src={kitImg} alt="Kit de Sobrevivência" className="kit-main-img" width="500" height="500" />
          </div>
          <div className="kit-intro-text-content">
            <h2 className="kit-intro-title">O que é o Kit de Sobrevivência na Amamentação?</h2>
            <p className="kit-intro-desc">
              São 5 técnicas simples que te ajudam a entender o que está errado, daí você mesma corrige e sente alívio ainda hoje, mesmo se você for mamãe de primeira viagem.
            </p>
            <div className="kit-list-wrapper">
                <ul className="kit-list">
                <li><Checkbox color="#a672b5" /> Técnicas sempre atualizadas</li>
                <li><Checkbox color="#a672b5" /> 100% comprovadas e validadas</li>
                <li><Checkbox color="#a672b5" /> Risco ZERO Garantia de 7 dias</li>
                </ul>
            </div>
          </div>
        </div>

        {/* Blue Card 1 */}
        <div className="kit-card">
          <h3 className="kit-card-title">Mamãe, se você não aguenta mais:</h3>
          <div className="kit-list-wrapper">
            <ul className="kit-list">
                <li><Checkbox color="#5ea6e5" /> Dor intensa nos mamilos e nas mamas</li>
                <li><Checkbox color="#5ea6e5" /> Sangramento, feridas e fissuras</li>
                <li><Checkbox color="#5ea6e5" /> Dificuldade de posicionar o bebê corretamente</li>
                <li><Checkbox color="#5ea6e5" /> Sentimento de culpa e incapacidade</li>
                <li><Checkbox color="#5ea6e5" /> Medo de o bebê não estar mamando o suficiente</li>
                <li><Checkbox color="#5ea6e5" /> Falta de orientação profissional prática</li>
            </ul>
          </div>
        </div>

        {/* Middle Text */}
        <p className="kit-middle-text">
          Se você está passando por qualquer uma dessas situações,<br className="desktop-only" />
          o Kit de Sobrevivência na Amamentação é para você
        </p>

        {/* Blue Card 2 */}
        <div className="kit-card">
          <h3 className="kit-card-title">Lá dentro você vai encontrar:</h3>
          <div className="kit-list-wrapper">
            <ul className="kit-list">
                <li><Checkbox color="#5ea6e5" /> Técnicas simples, visuais e 100% práticas</li>
                <li><Checkbox color="#5ea6e5" /> Alívio da dor na primeira mamada após o ajuste</li>
                <li><Checkbox color="#5ea6e5" /> Aumento natural da produção de leite</li>
                <li><Checkbox color="#5ea6e5" /> Passo a passo que funciona mesmo sozinha em casa</li>
                <li><Checkbox color="#5ea6e5" /> Entendimento do que causa o problema (clareza)</li>
                <li><Checkbox color="#5ea6e5" /> Bebê mais tranquilo e mamadas mais longas</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
