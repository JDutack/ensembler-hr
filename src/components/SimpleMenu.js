import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}  id="hamburguer">
        <img src={"https://imgur.com/HAO8pk2.png"} alt="icono-menu" width="15px" heigth="13px" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl} 
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Nosotros</MenuItem>
        <MenuItem onClick={handleClose}>Capacitaciones</MenuItem>
        <MenuItem onClick={handleClose}>Contacto</MenuItem>
      </Menu>
    </div>
  );
}