import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icoImg from '../assets/ofkkbMI.png';

const HeaderAll = styled.header`
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 1550px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  height: 110px;
  @media (max-width: 790px) {
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
  }
  @media (max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`;
const NavUl = styled.ul`
  /* text-align: left; */
  /* width: 100%; */
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: left; */
`;
const HeaderLink = styled.a`
  text-decoration: none;
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
  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
    font-size: 10px;
    padding: 15px;
  }
`;

const Header = () => {
  return (
    <HeaderAll>
      <HeaderLink href="/" id="isologotipo">
        <HeaderImg src={icoImg} alt="isologotipo" />
      </HeaderLink>
      <NavUl>
        <HeaderLink href="/" target="_self">
          Inicio
        </HeaderLink>
        <HeaderLink href="/conocenos">Conócenos</HeaderLink>
        <HeaderLink href="/contacto">Contacto</HeaderLink>
        <HeaderLink href="#">Idioma/Language</HeaderLink>
      </NavUl>
    </HeaderAll>
  );
};

export default Header;
