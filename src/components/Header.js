import React from 'react';

import { Link } from 'react-router-dom';
import icoImg from '../assets/ofkkbMI.png';
import {
  HeaderAll,
  HeaderImg,
  Navegacion,
  HeaderLink,
  ImageLink,
} from '../styles/componentStyles/HeaderStyles';

const Header = () => {
  return (
    <HeaderAll>
      <ImageLink>
        <Link to="/">
          <HeaderImg src={icoImg} alt="isologotipo" />
        </Link>
      </ImageLink>
      <Navegacion>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/"
          >
            Home
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/quienessomos"
          >
            Nosotros
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/capacitaciones"
          >
            Capacitaciones
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/contacto"
          >
            Contacto
          </Link>
        </HeaderLink>
      </Navegacion>
    </HeaderAll>
  );
};

export default Header;
