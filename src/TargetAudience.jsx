import React from 'react';
import './TargetAudience.css';

const TargetAudience = () => {
  return (
    <section className="target-section">
      <div className="target-container">
        <h2 className="target-title">
          Este Kit é Para Você, <span className="target-highlight">MÃE</span>, Que
        </h2>
        
        <div className="target-grid">
          <div className="target-card">
            <p>
              <strong>É MÃE DE RECÉM-NASCIDO</strong> e está com dor, dificuldades ou se sentindo perdida
            </p>
          </div>

          <div className="target-card">
            <p>
              <strong>ESTÁ NO PUERPÉRIO</strong> imediato e precisa de soluções urgentes para não desistir
            </p>
          </div>

          <div className="target-card">
            <p>
              <strong>É GESTANTE</strong> e quer se preparar, já tendo um kit de primeiros socorros antes de se machucar
            </p>
          </div>

          <div className="target-card">
            <p>
              <strong>ESTÁ CANSADA</strong> de informações confusas e quer as técnicas de uma especialista
            </p>
          </div>

          <div className="target-card">
            <p>
              Se sente <strong>FRUSTRADA</strong> por não conseguir fazer algo que deveria ser “natural”
            </p>
          </div>

          <div className="target-card">
            <p>
              Não quer <strong>CHORAR DE DOR</strong> e cansaço na madrugada, pensando em desistir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
