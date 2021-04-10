import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/"
            >
              <FooterLi>HOME</FooterLi>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/quienessomos"
            >
              <FooterLi>QUIENES SOMOS</FooterLi>
            </Link>

            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/capacitaciones"
            >
              <FooterLi>CAPACITACIONES</FooterLi>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/contacto"
            >
              <FooterLi>CONTACTO</FooterLi>
            </Link>
          </FooterUl>
        </UpLeft>
        <UpRight>
          <a
            href="https://www.linkedin.com/company/ensemble-hr/"
            target="blank"
          >
            <RedesImg src={icoLkd} alt="" />
          </a>
          <a href="https://www.instagram.com/ensemblehrar/" target="blank">
            <RedesImg src={icoInsta} alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=541134276663&text= Hola!%20Quiero%20contratar%20sus%20servicios!"
            target="blank"
          >
            <RedesImg src={icoWsp} alt="" />
          </a>
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
