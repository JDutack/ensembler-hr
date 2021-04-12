import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import {
  SliderDiv,
  EmployerDiv,
  ImgBelen,
  Employerh3,
  Employerh4,
  EmployerP,
  EmployerSpan,
} from '../styles/componentStyles/CarrouselStyle.js';
import belen from '../assets/belen.jfif';
import facundo from '../assets/facundo.jfif';

const SwiperSlider = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        className="swiper-container"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="mySlides">
          <SliderDiv>
            <EmployerDiv>
              <ImgBelen src={belen} alt="" />
              <Employerh3>María Belén Arroyo</Employerh3>
              <Employerh4>Fundadora de Ensemble HR</Employerh4>
              <EmployerP>Futura Licenciada en Relaciones del Trabajo</EmployerP>
              <EmployerSpan>"Crea tu destino"</EmployerSpan>
            </EmployerDiv>
          </SliderDiv>
        </SwiperSlide>
        <SwiperSlide className="mySlides">
          <SliderDiv>
            <EmployerDiv>
              <ImgBelen src={facundo} alt="" />
              <Employerh3>Facundo Corbalan</Employerh3>
              <Employerh4>
                Experto en Payroll y procesos de implementación
              </Employerh4>
              <EmployerP>Apasionado por su profesión</EmployerP>
              <EmployerSpan>"De cara al futuro siempre"</EmployerSpan>
            </EmployerDiv>
          </SliderDiv>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
