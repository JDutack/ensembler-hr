import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterSection,
  FooterSection2,
  FooterUp,
  UpLeft,
  ImgDiv,
  FooterUl,
  FooterLi,
  UpRight,
  FooterDown,
  Copyright,
  RedesImg,
} from '../styles/componentStyles/FooterStyle';

import footerImg from '../assets/Ensemble HR - Logotipo Final Positivo 1.png';
import icoWsp from '../assets/whatsVector.svg';
import icoLkd from '../assets/Vector (1).svg';
import icoInsta from '../assets/Group 33.svg';

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterSection2>
          <FooterUp>
            <UpLeft>
              <FooterUl>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: ' var(--headerLink)',
                  }}
                  to="/"
                >
                  <FooterLi>HOME</FooterLi>
                </Link>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: ' var(--headerLink)',
                  }}
                  to="/quienessomos"
                >
                  <FooterLi>QUIENES SOMOS</FooterLi>
                </Link>

                <Link
                  style={{
                    textDecoration: 'none',
                    color: ' var(--headerLink)',
                  }}
                  to="/capacitaciones"
                >
                  <FooterLi>CAPACITACIONES</FooterLi>
                </Link>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: ' var(--headerLink)',
                  }}
                  to="/contacto"
                >
                  <FooterLi>CONTACTO</FooterLi>
                </Link>
              </FooterUl>
            </UpLeft>
            <UpRight>
              <ImgDiv src={footerImg} />
              <div>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/ensemblehrar/"
                  target="blank"
                >
                  <RedesImg src={icoInsta} alt="" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=541134276663&text= Hola!%20Quiero%20contratar%20sus%20servicios!"
                  target="blank"
                >
                  <RedesImg src={icoWsp} alt="" />
                </a>
              </div>
              <Copyright>
                &copy; 2021 Ensemble HR todos los derechos reservados
              </Copyright>
            </UpRight>
          </FooterUp>
          <hr />
          <FooterDown>
            <section>
              <p>
                <u>Diseño UX-UI:</u>
              </p>
              <name>Annie Oestereicher</name>
              <div>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
              </div>
            </section>
            <section>
              <p>
                <u>Desarrollo web:</u>
              </p>
              <name>Damian Giannico</name>
              <div>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
              </div>
            </section>
            <section>
              <p>
                <u>Desarrollo web:</u>
              </p>
              <name>Juan</name>
              <div>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ensemble-hr/"
                  target="blank"
                >
                  <RedesImg src={icoLkd} alt="" />
                </a>
              </div>
            </section>
          </FooterDown>
        </FooterSection2>
      </FooterSection>
    </>
  );
};

export default Footer;
