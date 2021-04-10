import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  SliderBackDiv,
  CarrouselSlider,
  SliderDiv,
  TitleDiv,
  TitleH1,
  EmployerDiv,
  ImgBelen,
  Employerh3,
  Employerh4,
  EmployerP,
  EmployerSpan,
} from '../styles/componentStyles/CarrouselStyle.js';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';
import belen from '../assets/belen.jfif';
import facundo from '../assets/facundo.jfif';

// const swiper = new Swiper('.swiper-container', {
//   speed: 400,
//   spaceBetween: 100,
// });
// var slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName('mySlides');
  let arraySlides = [...slides];
  console.log(arraySlides);
  // setInterval(() => {
  //   console.log(Swiper.activeIndex);
  // }, 2000);
  // setTimeout(showSlides, 2000);
}
const Carrousel = () => {
  showSlides();
  // let swiper = new Swiper('.swiper-container', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  // Now you can use all slider methods like
  // swiper.slideNext();

  // const slidechangefn = () => {
  //   setInterval(() => {
  //     Swiper.SlideChange();
  //   }, 2000);
  // };
  return (
    <SliderBackDiv>
      <CarrouselSlider>
        <TitleDiv>
          <TitleH1>NUESTRO EQUIPO</TitleH1>
        </TitleDiv>

        <Swiper
          className="swiper-container"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="mySlides">
            <SliderDiv>
              <EmployerDiv>
                <ImgBelen src={belen} alt="" />
                <Employerh3>María Belén Arroyo</Employerh3>
                <Employerh4>Organizadora de eventos</Employerh4>
                <EmployerP>
                  Soy curiosa e inquieta. Mi talento es el francés
                </EmployerP>
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
      </CarrouselSlider>
    </SliderBackDiv>
  );
};

export default Carrousel;
