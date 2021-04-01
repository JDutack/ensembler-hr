import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import footerImg from '../assets/title.png';
import backFooter from '../assets/fondoFooter.jfif';

const FooterComp = styled.footer`
  background-image: url(${backFooter});
  background-size: cover;
`;

const FooterBack = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterTitle = styled.h3`
  color: white;
  font-size: 45px;
  @media (max-width: 790px) {
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
            Queremos dejar una marca positiva en el mundo. ¿Te sumás?.
          </FooterTitle>
          <FooterImg src={footerImg} alt="isologotipo-ensemble" />
        </ConclusionContainer>
      </FooterBack>
    </FooterComp>
  );
};

export default Footer;
