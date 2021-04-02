import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import footerImg from '../assets/title.png';
import backFooter from '../assets/fondoFooter.jfif';

const FooterComp = styled.footer`
  background-image: url(${backFooter});
  background-size: cover;
  margin-bottom: 50px;
`;

const FooterBack = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterTitle = styled.h3`
  color: white;
  font-size: 45px;
  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 1000px) {
    font-size: 26px;
  }
  @media (max-width: 790px) {
    font-size: 22px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const ConclusionContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FooterImg = styled.img`
  width: 500px;
  height: 150px;
  @media (max-width: 790px) {
    width: 400px;
    height: 100px;
  }
  @media (max-width: 650px) {
    width: 300px;
    height: 75px;
  }
`;

const Footer = () => {
  AOS.init();
  return (
    <FooterComp>
      <FooterBack>
        <ConclusionContainer data-aos="zoom-in">
          <FooterTitle>
            Queremos dejar una marca positiva en el mundo ¿Te sumás?
          </FooterTitle>
          <FooterImg src={footerImg} alt="isologotipo-ensemble" />
        </ConclusionContainer>
      </FooterBack>
    </FooterComp>
  );
};

export default Footer;
