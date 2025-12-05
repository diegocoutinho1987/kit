import React from 'react';
import './Steps.css';

const stepsData = [
  {
    step: 'Passo 01',
    title: 'O ACOLHIMENTO',
    description: 'Uma conversa rápida para blindar sua mente contra a culpa e o medo'
  },
  {
    step: 'Passo 02',
    title: 'A TÉCNICA ANTI-DOR',
    description: 'O ajuste visual que previne 90% dos problemas e acaba com a dor em minutos.'
  },
  {
    step: 'Passo 03',
    title: 'LIDANDO COM FERIMENTOS',
    description: 'O que fazer para cicatrizar o mamilo rápido e conseguir amamentar sem chorar'
  },
  {
    step: 'Passo 04',
    title: 'TRATANDO MAMA EMPEDRADA',
    description: 'O protocolo de emergência para o ingurgitamento: massagem + compressa'
  },
  {
    step: 'Passo 05',
    title: 'LIDANDO COM MASTITE',
    description: 'O que fazer IMEDIATAMENTE se você suspeitar de mastite para evitar que piore'
  },
  {
    step: 'Passo 06',
    title: 'AUMENTANDO A PRODUÇÃO',
    description: 'Como saber se seu leite é suficiente e o que funciona para aumentar a produção'
  }
];

const Steps = () => {
  return (
    <section className="steps-section">
      <div className="steps-container">
        <h2 className="steps-main-title">Faça parte do nosso grupo de mães e tenha acesso a todo este conteúdo:</h2>
        <div className="steps-grid">
          {stepsData.map((item, index) => (
            <div className="step-card" key={index}>
              <div className="step-badge">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
