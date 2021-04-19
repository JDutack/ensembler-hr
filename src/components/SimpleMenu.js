import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { FooterLi, FooterUl } from '../styles/componentStyles/FooterStyle';
import { Link } from 'react-router-dom';

const Hamburguer = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Hamburguer className="hambur">
        {/* <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        id="hamburguer"
      > */}
        <img
          src={'https://imgur.com/HAO8pk2.png'}
          alt="icono-menu"
          width="15px"
          heigth="13px"
        />
        {/* </Button> */}
        {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > */}
        <div className="tuvieja">
          {/* <li>Home</li>
          <li>Nosotros</li>
          <li>Capacitaciones</li>
          <li>Contacto</li> */}
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
        </div>
        {/* <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>Nosotros</MenuItem>
      <MenuItem onClick={handleClose}>Capacitaciones</MenuItem>
      <MenuItem onClick={handleClose}>Contacto</MenuItem> */}
        {/* </Menu> */}
      </Hamburguer>
    </>
  );
};

export default SimpleMenu;

// export default function SimpleMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Hamburguer>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         id="hamburguer"
//       >
//         <img
//           src={'https://imgur.com/HAO8pk2.png'}
//           alt="icono-menu"
//           width="15px"
//           heigth="13px"
//         />
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Home</MenuItem>
//         <MenuItem onClick={handleClose}>Nosotros</MenuItem>
//         <MenuItem onClick={handleClose}>Capacitaciones</MenuItem>
//         <MenuItem onClick={handleClose}>Contacto</MenuItem>
//       </Menu>
//     </Hamburguer>
//   );
// }
