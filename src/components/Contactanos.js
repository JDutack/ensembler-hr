import React from 'react';
import styled from 'styled-components';

import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import lnkdn from '../assets/lnkdn.png';

const LinkImg = styled.img`
  height: 60px;
  width: 60px;
  padding: 0px 20px 0px 0px;
  @media (max-width: 790px) {
    height: 45px;
    width: 45px;
  }
  @media (max-width: 650px) {
    height: 30px;
    width: 30px;
  }
`;

const DatosContacto = styled.div`
  height: 450px;
  width: 550px;
  border-left: 5px solid #de1d26;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  /* align-content: stretch; */
  justify-content: space-evenly;
  @media (max-width: 1100px) {
    height: min-content;
    width: 450px;
    border: none;
    font-size: 16px;
  }
  @media (max-width: 650px) {
    height: min-content;
    width: 350px;
    border: none;
    font-size: 12px;
  }
`;

const ContactoA = styled.a`
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0px 15px 30px;
  margin: 10px;
  text-decoration: none;
  background-color: #de1d26;
  border-radius: 15px 2px 15px 2px;
  transition-duration: 0.5s;
  cursor: pointer;
  box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -webkit-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  &:hover {
    background-color: #ea5e64;
  }
  @media (max-width: 1150px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

const Contactanos = () => {
  return (
    <DatosContacto>
      <ContactoA href="mailto:info@ensemble-hr.com">
        <LinkImg src={mail} alt="icono-mail" />
        info@ensemble-hr.com
      </ContactoA>
      <ContactoA href="#">
        <LinkImg src={phone} alt="icono-tel" />
        +541134276663
      </ContactoA>
      <ContactoA
        href="https://www.linkedin.com/company/ensemble-hr/"
        target="_blank"
      >
        <LinkImg src={lnkdn} alt="icono-linkedin" />
        https://www.linkedin.com/company/ensemble-hr/
      </ContactoA>
    </DatosContacto>
  );
};

export default Contactanos;
