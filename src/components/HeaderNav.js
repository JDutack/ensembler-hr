import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLink } from '../styles/componentStyles/HeaderStyles';

const HeaderNav = () => {
  return (
    <>
      <HeaderLink display="none">
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
          to="/"
          activeClassName={'activo'}
        >
          Home
        </NavLink>
      </HeaderLink>
      <HeaderLink>
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
          to="/quienessomos"
          activeClassName="activo"
        >
          Nosotros
        </NavLink>
      </HeaderLink>
      <HeaderLink>
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
          to="/capacitaciones"
          activeClassName="activo"
        >
          Capacitaciones
        </NavLink>
      </HeaderLink>
      <HeaderLink>
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
          to="/contacto"
          activeClassName="activo"
        >
          Contacto
        </NavLink>
      </HeaderLink>
    </>
  );
};

export default HeaderNav;
