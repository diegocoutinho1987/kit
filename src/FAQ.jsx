import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "O acesso é imediato mesmo?",
    answer: "Sim. Após a confirmação do pagamento (PIX e Cartão são instantâneos), você recebe o link de acesso no seu e-mail."
  },
  {
    question: "E se eu ainda estiver grávida?",
    answer: "Este é o melhor momento! Você já vai para a “batalha” com seu kit de primeiros socorros pronto."
  },
  {
    question: "Não tenho tempo de ver um curso!",
    answer: "Perfeito! O Kit não é um curso longo, são 5 técnicas em vídeo (3-5 min cada). Você usa a que precisa, na hora que precisa."
  },
  {
    question: "E se meu caso for mastite? O Kit resolve?",
    answer: "A técnica 4 é um protocolo de emergência. Ela te mostra os primeiros socorros para alívio imediato e te orienta sobre quando é essencial procurar um médico (o que o kit não substitui em caso de infecção grave), mas você já saberá o que fazer até lá."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é seu por 1 ano inteiro!"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <p className="faq-subtitle">P E R G U N T A S &nbsp; F R E Q U E N T E S</p>
        <h2 className="faq-title">Você ainda tem alguma dúvida?</h2>
        
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                {item.question}
              </button>
              <div 
                className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}
              >
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
