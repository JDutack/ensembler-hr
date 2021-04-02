import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Gradient } from '../components/Portada';
import Form from '../components/Form';
import Header from '../components/Header';
import Contactanos from '../components/Contactanos';

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

const Contacto = () => {
  return (
    <Fragment>
      <Header />
      <ContainerContacto>
        <Form />
        <Contactanos />
      </ContainerContacto>
    </Fragment>
  );
};

export default Contacto;
