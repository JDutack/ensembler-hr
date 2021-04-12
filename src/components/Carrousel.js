import React from 'react';

import {
  SliderBackDiv,
  CarrouselSlider,
  TitleDiv,
  TitleH1,
} from '../styles/componentStyles/CarrouselStyle.js';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle';

import SwiperSlider from './SwiperSlider.js';

const Carrousel = () => {
  return (
    <SliderBackDiv>
      <CarrouselSlider>
        <TitleDiv>
          <TitleH1>NUESTRO EQUIPO</TitleH1>
        </TitleDiv>
        <SwiperSlider />
      </CarrouselSlider>
    </SliderBackDiv>
  );
};

export default Carrousel;
