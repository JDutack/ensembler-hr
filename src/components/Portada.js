import React from 'react';
import styled, { keyframes } from 'styled-components';

import imgPortada from '../assets/portada.png';

const ImgPortada = styled.img`
  height: 900px;
  width: 900px;
  @media (max-width: 790px) {
    height: 600px;
    width: 600px;
  }
  @media (max-width: 650px) {
    height: 500px;
    width: 500px;
  }
`;

export const Gradient = keyframes`

  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #bdc3c7, #ecf0f1, #e74c3c, #c0392b);
  background-size: 400% 400%;
  animation: ${Gradient} 10s ease infinite;
`;
const Portada = () => {
  return (
    <MainTitle>
      <ImgPortada src={imgPortada} />
    </MainTitle>
  );
};

export default Portada;
