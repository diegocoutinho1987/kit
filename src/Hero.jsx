import React from "react";
const headerImg = "/Header-1.webp";
import img01 from "./assets/img01.webp";

export default function Hero() {
	return (
		<section className="hero bg-secondary">
			{/* First Section - Header with text on the right */}
			<div className="hero-section hero-section-1">
				<div className="hero-content-1">
					<div className="hero-text-1">
						<h1 className="hero-title">
							Elimine a DOR Ainda Hoje Com Esse Passo a Passo 100% Prático, Criado Por Especialista em Amamentação
						</h1>
						<p className="hero-subtitle">
							Entenda o que está dando errado, corrija sozinha e sinta alívio em poucas horas, mesmo se você for mãe de primeira viagem
						</p>
					</div>
					<div className="hero-image-1">
						<img src={headerImg} alt="Mães amamentando" className="hero-img" fetchPriority="high" width="600" height="400" />
					</div>
				</div>
			</div>

			{/* Second Section - Image on left, text on right */}
			<div className="hero-section hero-section-2">
				<div className="hero-content-2">
					<div className="hero-image-2">
						<img src={img01} alt="Mãe com dificuldade na amamentação" className="hero-img second" width="1080" height="1080" />
					</div>
					<div className="hero-text-2">
						<p className="hero-problem">
							Você está sofrendo porque não sabe o que está fazendo de errado.
						</p>
						<p className="hero-description">
							Ninguém explica de forma simples, <strong>passo a passo</strong>, o que precisa ajustar.
						</p>
						<p className="hero-description">
							Talvez você quase tenha desistido porque cada mamada é uma mistura de <strong>dor, medo e culpa</strong>, não é mesmo?
						</p>
						<p className="hero-description">
							Diferente dos conselhos genéricos e informações confusas da internet, te ensino <strong>técnicas simples e comprovadas</strong> que você pode aplicar sozinha, em casa, e sentir alívio e confiança <strong>ainda hoje</strong>.
						</p>
						<p className="hero-description">
							Em <strong>menos de 1 hora</strong> você aprende o que realmente precisa, e já sente diferença na próxima mamada.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

