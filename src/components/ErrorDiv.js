import React from 'react';
import errorImg from '../assets/errorimg.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FooterLi, FooterUl } from '../styles/componentStyles/FooterStyle';

import icoWsp from '../assets/whatsblack.png';
import icoLkd from '../assets/linkeblack.png';
import icoInsta from '../assets/instablack.png';

const ErrorDivComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
  /* border: 1px solid black; */
  padding: 200px;
`;

const LeftSide = styled.div`
  width: 50%;
  /* border: 1px solid black; */
`;
const RigthSide = styled.div``;

const ErrorPic = styled.img`
  width: 100%;
  height: 100%;
`;
const ErrorText = styled.div``;

const ErrorH3 = styled.h3`
  color: var(--ensembleRed);
  font-size: 48px;
  font-weight: 500;
`;

const ErrorH1 = styled.h1`
  font-size: 64px;
  font-weight: 500;
`;
const ErrorP = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
const ErrorUl = styled(FooterUl)``;
const ErrorLi = styled(FooterLi)`
  color: var(--ensembleRed);
  font-size: 18px;
  font-weight: 300;
`;
const SubRedesDiv = styled.div``;

const RedesDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;
const RedesErrorImg = styled.img`
  color: blue;
`;

const ErrorDiv = () => {
  return (
    <ErrorDivComp>
      <LeftSide>
        <ErrorText>
          <ErrorH3>Error 404</ErrorH3>
          <ErrorH1>Ups! Hasta nosotros cometemos errores</ErrorH1>
          <ErrorP>
            Te invitamos a explorar las siguientes secciones mientras
            solucionamos los inconvenientes, tambien podés aprovechar a mirar
            nuestras Redes Sociales.
          </ErrorP>
          <ErrorUl>
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/"
            >
              <ErrorLi>HOME</ErrorLi>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/quienessomos"
            >
              <ErrorLi>QUIENES SOMOS</ErrorLi>
            </Link>

            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/capacitaciones"
            >
              <ErrorLi>CAPACITACIONES</ErrorLi>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
              to="/contacto"
            >
              <ErrorLi>CONTACTO</ErrorLi>
            </Link>
          </ErrorUl>
        </ErrorText>
        <SubRedesDiv>
          <RedesDiv>
            <a
              href="https://www.linkedin.com/company/ensemble-hr/"
              target="blank"
            >
              <RedesErrorImg src={icoLkd} alt="" />
            </a>
            <a href="https://www.instagram.com/ensemblehrar/" target="blank">
              <RedesErrorImg src={icoInsta} alt="" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=541134276663&text= Hola!%20Quiero%20contratar%20sus%20servicios!"
              target="blank"
            >
              <RedesErrorImg src={icoWsp} alt="" />
            </a>
          </RedesDiv>
          <div></div>
        </SubRedesDiv>
      </LeftSide>
      <RigthSide>
        <ErrorPic src={errorImg} alt="" />
      </RigthSide>
    </ErrorDivComp>
  );
};

export default ErrorDiv;
