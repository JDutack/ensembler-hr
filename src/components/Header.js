import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import icoImg from '../assets/ofkkbMI.png';
import SimpleMenu from '../components/SimpleMenu';
import {
  HeaderAll,
  HeaderImg,
  Navegacion,
  ImageLink,
} from '../styles/componentStyles/HeaderStyles';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <HeaderAll>
      <ImageLink>
        <Link to="/">
          <HeaderImg src={icoImg} alt="isologotipo" />
        </Link>
      </ImageLink>
      <Navegacion>
        <HeaderNav />
        <SimpleMenu />
      </Navegacion>
    </HeaderAll>
  );
};
export default Header;
