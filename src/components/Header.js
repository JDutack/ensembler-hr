import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icoImg from '../assets/ofkkbMI.png';

const HeaderAll = styled.header`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: stretch;
  background-color: rgba(255, 255, 255, 0.8);
  height: 110px;
  @media (max-width: 790px) {
    height: 85px;
  }
  @media (max-width: 650px) {
    height: 60px;
  }
`;
const HeaderImg = styled.img`
  width: 120px;
  height: 120px;
  transition-duration: 1.5s;
  &:hover {
    -webkit-filter: blur(100px);
    filter: blur(100px);
  }
  @media (max-width: 790px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 650px) {
    width: 40px;
    height: 40px;
  }
`;

const Navegacion = styled.nav`
  display: flex;
  flex-direction: row;
`;

const HeaderLink = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  color: #dc1d25;
  padding: 30px;
  transition-duration: 0.5s;
  &:hover {
    opacity: 50%;
    color: #dc1d25;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }

  @media (max-width: 865px) {
    font-size: 15px;
    padding: 22px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    padding: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderAll>
      <HeaderLink>
        <Link to="/">
          <HeaderImg src={icoImg} alt="isologotipo" />
        </Link>
      </HeaderLink>
      <Navegacion>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
            to="/"
          >
            Inicio
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
            to="/conocenos"
          >
            Conócenos
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
            to="/contacto"
          >
            Contacto
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
            to="/"
          >
            Idioma/Language
          </Link>
        </HeaderLink>
      </Navegacion>
    </HeaderAll>
  );
};

export default Header;
