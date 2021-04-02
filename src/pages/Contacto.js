import React, { Fragment } from 'react';
import styled from 'styled-components';

import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import lnkdn from '../assets/lnkdn.png';

import { Gradient } from '../components/Portada';
import Form from '../components/Form';
import Header from '../components/Header';

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

const ContainerContacto = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ecf0f1, #bdc3c7, #2ecc71, #27ae60);
  background-size: 400% 400%;
  animation: ${Gradient} 10s ease infinite;

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 180px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 100px;
  }
`;

const FormularioEncuesta = styled.div`
  display: flex;
  font-size: 25px;
  font-family: 'Raleway', sans-serif;
  color: #de1d26;
  background-color: white;
  padding: 50px;
  margin: 70px;
  border-radius: 25px;
  box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -webkit-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  @media (max-width: 790px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
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

const contacto = () => {
  return (
    <Fragment>
      <Header />

      <ContainerContacto>
        <FormularioEncuesta>
          <Form />
        </FormularioEncuesta>
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
      </ContainerContacto>
    </Fragment>
  );
};

export default contacto;
