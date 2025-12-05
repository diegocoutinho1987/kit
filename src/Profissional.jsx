import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Profissional.css';
import eliviaImage from './assets/Elivia-Teles.jpg';

const carouselImages = [
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-10.png",
  "https://eliviateles.com.br/wp-content/uploads/2023/09/Fisioterapeuta-Obstetrica-Elivia-Teles-Semana-do-Bebe-2023-Alegrete-Piaui.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-01.png",
  "https://eliviateles.com.br/wp-content/uploads/2023/09/Fisioterapeuta-Obstetrica-Elivia-Teles-Semana-do-Bebe-2022-Padre-Marcos-Piaui.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-09.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-05.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-06.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-02.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-07.png",
  "https://eliviateles.com.br/wp-content/uploads/2025/10/Elivia-Teles-Amamentando-03.png"
];

const Profissional = () => {
  return (
    <section className="profissional-section">
      <div className="profissional-container">
        <div className="profissional-content">
          <div className="profissional-text">
            <h4 className="profissional-subtitle">QUEM MONTOU ESTE KIT PARA VOCÊ</h4>
            <h2 className="profissional-title">Elívia Teles</h2>
            <h3 className="profissional-role">Consultora de Amamentação</h3>
            <p className="profissional-crefito">CREFITO-PI 227759-F</p>
            
            <div className="profissional-description">
              <p>Há 10 anos, eu respiro o universo da maternidade.</p>
              <p>
                Como Fisioterapeuta Obstétrica, <strong>Consultora de Amamentação</strong> e,
                principalmente, <strong>MÃE</strong> eu já vi o que funciona (e o que não funciona)
                no "campo de batalha" do puerpério.
              </p>
              <p>
                Eu reuni apenas as técnicas essenciais, todas elas <strong>testadas e
                validadas</strong> por centenas de mães.
              </p>
            </div>
          </div>
          <div className="profissional-image-wrapper">
            <div className="image-circle-bg"></div>
            <img src={eliviaImage} alt="Elívia Teles" className="profissional-image" width="500" height="500" />
          </div>
        </div>
      </div>

      <div className="profissional-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {carouselImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Elívia Teles ${index + 1}`} className="carousel-image" loading="lazy" width="300" height="400" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Profissional;
