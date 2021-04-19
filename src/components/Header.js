import React from 'react';

import { Link, NavLink } from 'react-router-dom';
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
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Home
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/quienessomos"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Nosotros
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/capacitaciones"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Capacitaciones
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/contacto"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Contacto
          </NavLink>
        </HeaderLink>
      </Navegacion>
    </HeaderAll>
  );
};

export default Header;
