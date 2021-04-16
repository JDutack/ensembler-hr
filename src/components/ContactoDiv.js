import React from 'react';
import styled from 'styled-components';

import { NosotrosDiv } from '../styles/componentStyles/NosotrosStyles';
import fondo from '../assets/Foto manos.png';
import Form from './Form';

const FlexDiv = styled.div`
  width: 1500px;
  height: min-content;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
  margin: 100px;
`;

const LeftBox = styled.section`
  width: 50%;
`;

const BoxImg = styled.img`
  width: 100%;
  height: 100%;
`;
const RightBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: white;
`;
const ContactBox = styled.div`
  width: 80%;
  /* height: 80%; */
  /* border: 1px solid black; */
  background-color: white;
`;
const ContactTitles = styled.div``;
const ContactH2 = styled.h2`
  padding: 40px 0;
  font-weight: 500;
  font-size: 36px;
  /* line-height: 42px; */
`;
const Contactp = styled.p`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.015em;
  line-height: 174%;
`;
const ContactForm = styled.div``;

const ContactoDiv = () => {
  return (
    <NosotrosDiv>
      <FlexDiv>
        <LeftBox>
          <BoxImg src={fondo} alt="" />
        </LeftBox>
        <RightBox>
          <ContactBox>
            <ContactTitles>
              <ContactH2>Sigamos en contacto</ContactH2>
              <Contactp>
                Estamos para ayudarte, envianos tu consulta y la responderemos a
                la mayor brevedad posible.
              </Contactp>
              <ContactForm>
                <Form />
              </ContactForm>
            </ContactTitles>
          </ContactBox>
        </RightBox>
      </FlexDiv>
    </NosotrosDiv>
  );
};

export default ContactoDiv;
