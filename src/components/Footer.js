import React from 'react';
import { Link } from 'react-router-dom';

// import ensembleImg from '../assets/title.png';
// import lnkd from '../assets/ofkkbMI.png';
import {
  FooterSection,
  FooterUp,
  UpLeft,
  ImgDiv,
  FooterUl,
  FooterLi,
  UpRight,
  FooterDown,
  DownLeft,
  DownRigth,
  RedesImg,
} from '../styles/componentStyles/FooterStyle';

import footerImg from '../assets/Ensemble HR - Logotipo Final Positivo 1.png';
import icoWsp from '../assets/whatsVector.svg';
import icoLkd from '../assets/Vector (1).svg';
import icoInsta from '../assets/Group 33.svg';

const Footer = () => {
  return (
    <FooterSection>
      <FooterUp>
        <UpLeft>
          <ImgDiv src={footerImg} />
          <FooterUl>
            <FooterLi>HOME</FooterLi>
            <FooterLi>QUIENES SOMOS</FooterLi>
            <FooterLi>CAPACITACIONES</FooterLi>
            <FooterLi>CONTACTO</FooterLi>
          </FooterUl>
        </UpLeft>
        <UpRight>
          <Link
            to="https://api.whatsapp.com/send?phone=5491165282142&text=Hola!%20Quieres%20contactarte%20con%20nosotros!"
            target="_blank"
          >
            <RedesImg src={icoLkd} alt="" />
          </Link>
          <Link>
            <RedesImg src={icoInsta} alt="" />
          </Link>
          <Link>
            <RedesImg src={icoWsp} alt="" />
          </Link>
        </UpRight>
      </FooterUp>
      <hr />
      <FooterDown>
        <DownLeft>@ 2021 Ensemble HR todos los derechos reservados</DownLeft>
        <DownRigth>Diseño y desarrollo...</DownRigth>
      </FooterDown>
    </FooterSection>
  );
};

export default Footer;
