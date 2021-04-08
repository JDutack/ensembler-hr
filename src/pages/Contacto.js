import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NosotrosDiv } from '../components/Nosotros';
import fondo from '../assets/Foto manos.png';

const FlexDiv = styled.div`
  width: 1500px;
  height: 900px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
`;

const LeftBox = styled.div`
  width: 50%;
`;

const BoxImg = styled.img`
  width: 100%;
  height: 100%;
`;
const RightBox = styled.div`
  width: 50%;
`;

const Contacto = () => {
  return (
    <Fragment>
      <Header />
      <NosotrosDiv>
        <FlexDiv>
          <LeftBox>
            <BoxImg src={fondo} alt="" />
          </LeftBox>
          <RightBox></RightBox>
        </FlexDiv>
      </NosotrosDiv>
      <Footer />
    </Fragment>
  );
};

export default Contacto;
