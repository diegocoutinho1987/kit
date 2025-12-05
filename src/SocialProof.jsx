import React, { useState, useEffect } from "react";
import googleLogo from "./assets/google.svg";
import starsSvg from "./assets/f.svg";
import googleIcon from "./assets/icon.svg";

import arielyImg from "./assets/ariely.png";
import polianaImg from "./assets/poliana.png";
import karineImg from "./assets/karine.png";
import lorenaImg from "./assets/lorena.png";
import raissaImg from "./assets/raissa.png";
import flavianaImg from "./assets/flaviana.png";
import taisseImg from "./assets/taisse.png";
import pamellaImg from "./assets/pamella.png";
import johnyImg from "./assets/johny.png";
import brendaImg from "./assets/brenda.png";

const featuredReviews = [
    {
        id: 'f1',
        name: "Lorena Gomes",
        image: lorenaImg,
        text: "Elivia é maravilhosa. Além do profissionalismo ímpar, também é um ser humano extremamente amoroso e cuidadoso, o que faz com que seu trabalho seja impecável e se torne único. Me acompanhou na gestação e no puerpério com todo o cuidado do mundo. Só gratidão por cada ensinamento!!!"
    },
    {
        id: 'f2',
        name: "Karine França",
        image: karineImg,
        text: "Experiência incrível, Elivia é uma excelente profissional, extremamente atenciosa e dedicada. Sempre demonstra paciência, cuidado e conhecimento, tornando o tratamento muito mais eficaz e acolhedor. Sinto-me valorizada e bem cuidada em cada atendimento."
    },
    {
        id: 'f3',
        name: "Brenda Carolina",
        image: brendaImg,
        text: "Fiz fisioterapia obstétrica com a Tia Elivia desde 20 semanas de gestação, e foi a melhor coisa que fiz 🥰 no parto ela me acompanhou desde o momento que a bolsa estourou e ficou conosco até a primeira mamada do bebê, me ensinando a pega correta, já tinha feito o curso, mas tê-la conosco no primeiro momento foi de suma importância para conseguir amamentar sem sofrer. Elivia é muito necessária na vida de uma gestante/lactante, ela ensina e apoia, é um suporte e tanto!!! Eu só tenho amor e gratidão 🥰 ❤️"
    }
];

const reviews = [
    {
        id: 1,
        name: "Ariely Pinho",
        date: "14/10/2025",
        image: arielyImg,
        text: "Maravilhosa, foi extremamente dedicada e atenciosa comigo durante todo o processo. Sempre...",
        fullText: "Maravilhosa, foi extremamente dedicada e atenciosa comigo durante todo o processo. Sempre disposta a me ajudar, esclarecer dúvidas e me acompanhar com muito cuidado. Ela realmente me salvou, porque se não fosse pelo apoio e orientação dela, eu não teria conseguido. 💕 Sou muito grata por todo o carinho e profissionalismo!"
    },
    {
        id: 2,
        name: "Poliana Leal",
        date: "01/09/2025",
        image: polianaImg,
        text: "Maravilhosa ! Nada a reclamar só agradecer ! Elivia é uma benção de Deus aqui na terra .",
        fullText: "Maravilhosa ! Nada a reclamar só agradecer ! Elivia é uma benção de Deus aqui na terra ."
    },
    {
        id: 3,
        name: "Karine França",
        date: "01/09/2025",
        image: karineImg,
        text: "Experiência incrível, Elivia é uma excelente profissional, extremamente atenciosa e dedicada. Sempre...",
        fullText: "Experiência incrível, Elivia é uma excelente profissional, extremamente atenciosa e dedicada. Sempre demonstra paciência, cuidado e conhecimento, tornando o tratamento muito mais eficaz e acolhedor. Sinto-me valorizada e bem cuidada em cada atendimento."
    },
    {
        id: 4,
        name: "Lorena Gomes",
        date: "31/08/2025",
        image: lorenaImg,
        text: "Elivia é maravilhosa. Além do profissionalismo ímpar, também é um ser humano extremamente amoroso...",
        fullText: "Elivia é maravilhosa. Além do profissionalismo ímpar, também é um ser humano extremamente amoroso e cuidadoso, o que faz com que seu trabalho seja impecável e se torne único.Me acompanhou na gestação e no puerpério com todo o cuidado do mundo. Só gratidão por cada ensinamento!!!"
    },
    {
        id: 5,
        name: "Raiza Regia",
        date: "31/08/2025",
        image: raissaImg,
        text: "Profissional maravilhosa, foi essencial no meu puerpério 🩷",
        fullText: "Profissional maravilhosa, foi essencial no meu puerpério 🩷"
    },
    {
        id: 6,
        name: "Flaviana Pereira",
        date: "31/08/2025",
        image: flavianaImg,
        text: "Durante a minha gestação, a Elivia foi essencial, oferecendo apoio e cuidado que levarei para a vida toda...",
        fullText: "Durante a minha gestação, a Elivia foi essencial, oferecendo apoio e cuidado que levarei para a vida toda. Profissional excelente que super índico."
    },
    {
        id: 7,
        name: "Taíse Rolim",
        date: "31/08/2025",
        image: taisseImg,
        text: "Elivia é maravilhosa! Não soltou minha mão hora nenhuma durante os obstáculos que encontrei no processo...",
        fullText: "Elivia é maravilhosa! Não soltou minha mão hora nenhuma durante os obstáculos que encontrei no processo da amamentação. Indico de olhos fechados. Ela torna tudo mais leve!"
    },
    {
        id: 8,
        name: "Pâmella Moura",
        date: "09/04/2025",
        image: pamellaImg,
        text: "Profissional excelente, amei o atendimento e o cuidado que ela tem com suas pacientes ❤️",
        fullText: "Profissional excelente, amei o atendimento e o cuidado que ela tem com suas pacientes ❤️"
    },
    {
        id: 9,
        name: "Jonny Henrique",
        date: "01/11/2025",
        image: johnyImg,
        text: "Excelente profissional e especialista de verdade na área de atuação! Ficamos muitos satisfeitos com os resultados!",
        fullText: "Excelente profissional e especialista de verdade na área de atuação! Ficamos muitos satisfeitos com os resultados!"
    }
];

const VideoFacade = ({ videoId, title }) => {
    const [showVideo, setShowVideo] = useState(false);

    if (showVideo) {
        return (
            <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div 
            className="video-facade" 
            onClick={() => setShowVideo(true)}
            style={{
                backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '315px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden'
            }}
        >
            <div className="play-button" style={{
                width: '68px',
                height: '48px',
                backgroundColor: 'rgba(33, 33, 33, 0.8)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: 0,
                    height: 0,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '15px solid white'
                }}></div>
            </div>
        </div>
    );
};

export default function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedId, setExpandedId] = useState(null);
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia("(max-width: 1024px)").matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const handleChange = (e) => setIsMobile(e.matches);
        
        mediaQuery.addEventListener("change", handleChange);
        
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        let interval;
        if (isMobile) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isMobile]);

    const itemsToShow = isMobile ? 1 : 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < itemsToShow; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    };

	return (
		<section className="social-proof-section">
			<div className="social-proof-content">
				<div className="quote-icon">
					<svg aria-hidden="true" className="quote-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
					</svg>
				</div>
				<h2 className="social-proof-title">
					+ 1 Mil Mamães se livraram das dores e aprenderam a amamentar corretamente
				</h2>
				<p className="social-proof-subtitle">
					VEJA COMO ESSAS MÃES APRENDERAM A CORRIGIR A PEGA E ALIVIAR O DESCONFORTO EM POUCAS HORAS, SEGUINDO UM PROTOCOLO SIMPLES E TESTADO.
				</p>
				<h3 className="social-proof-heading">
					<span className="text-purple">Mamães Reais,</span> <span className="text-black">Resultados Reais</span>
				</h3>
				<div className="video-grid">
                        <div className="video-wrapper">
                            <VideoFacade videoId="7jGHFemfhko" title="Depoimento da Mamãe 1" />
                        </div>
                        <div className="video-wrapper">
                            <VideoFacade videoId="OJg6x7lMuv0" title="Depoimento da Mamãe 2" />
                        </div>
                        <div className="video-wrapper">
                            <VideoFacade videoId="4IRgK0LVVSQ" title="Depoimento da Mamãe 3" />
                        </div>
				</div>
                
                <div className="reviews-section-container">
                    <div className="ti-widget ti-goog ti-centered">
                        <div className="ti-widget-container">
                            <div className="ti-rating-top" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <div
                                    className="ti-title"
                                    style={{
                                        fontSize: '24px',
                                        display: 'block',
                                        marginBottom: '6px',
                                        fontFamily: 'Poppins, "Trustindex Poppins", sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '1.4em'
                                    }}
                                >
                                    EXCELENTE
                                </div>
                                <div className="ti-stars" style={{margin: '8px 0', display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center'}}>
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={starsSvg} alt={`star-${i}`} style={{height: '34px', display: 'block'}} />
                                    ))}
                                </div>
                            </div>
                            <div className="ti-rating-text">
                                <span className="nowrap">Com base em <strong>39 avaliações</strong></span>
                            </div>
                            <div className="ti-footer" style={{marginTop: '8px'}}>
                                <img src={googleLogo} alt="Google" style={{height: '28px'}} />
                            </div>
                        </div>
                    </div>

                    <div className="reviews-carousel-container">
                        <button className="carousel-btn prev-btn" onClick={prevSlide}>
                            &lt;
                        </button>
                        <div className="reviews-track">
                            {getVisibleReviews().map((review, index) => (
                                <div 
                                    key={`${review.id}-${index}`} 
                                    className={`review-card ${expandedId === review.id ? 'expanded' : ''}`}
                                >
                                    <div className="review-header">
                                        <div className="review-profile">
                                            <img src={review.image} alt={review.name} className="review-avatar" width="60" height="60" />
                                            <div className="review-info">
                                                <div className="review-name">{review.name}</div>
                                                <div className="review-date">{review.date}</div>
                                            </div>
                                        </div>
                                        <img src={googleIcon} alt="Google" className="review-platform-icon" />
                                    </div>
                                    <div className="review-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={starsSvg} alt="star" className="review-star" />
                                        ))}
                                        <span className="verified-badge">
                                            <svg viewBox="0 0 24 24" className="verified-icon" style={{width: '18px', height: '18px', fill: '#4285F4'}}>
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="review-content-wrapper">
                                        <div className="review-text">
                                            {expandedId === review.id ? review.fullText : review.text}
                                        </div>
                                        {review.fullText.length > review.text.length && (
                                            <div 
                                                className="review-footer"
                                                onClick={() => toggleExpand(review.id)}
                                            >
                                                {expandedId === review.id ? "Esconder" : "Consulte Mais informação"}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-btn next-btn" onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                    
                    {isMobile && (
                        <div className="carousel-dots">
                            {reviews.map((_, idx) => (
                                <span 
                                    key={idx} 
                                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(idx)}
                                ></span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="featured-reviews-section">
                    {featuredReviews.map((review) => (
                        <div key={review.id} className="featured-review-card">
                            <div className="featured-avatar-container">
                                <img src={review.image} alt={review.name} className="featured-avatar" />
                            </div>
                            <div className="featured-stars">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={starsSvg} alt="star" className="featured-star" />
                                ))}
                            </div>
                            <h4 className="featured-name">{review.name}</h4>
                            <p className="featured-text">{review.text}</p>
                        </div>
                    ))}
                </div>
			</div>
		</section>
	);
}
