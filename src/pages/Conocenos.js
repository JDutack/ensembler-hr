import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '../components/Card';
import belen from '../assets/belen.jfif';
import facundo from '../assets/facundo.jfif';
import ConocenosComp from '../components/ConocenosComp';

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FoundersDiv = styled.section`
  background-color: f5f5f5;
  /* width: 100%; */

  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
  }
`;

const CardH2 = styled.h2`
  text-align: start;
  letter-spacing: 3px;
  width: min-content;
  border-bottom: 4px solid #dc1d25;
`;

const CardCollectionDiv = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
    padding-left: 60px;
    flex-direction: column;
    /* align-content: center;
    justify-content: center; */
  }
`;

const Conocenos = () => {
  return (
    <TodoDiv>
      <Header />

      <ConocenosComp />
      <FoundersDiv>
        <CardH2>&nbsp;&nbsp;&nbsp;&nbsp;Nosotros</CardH2>
        <CardCollectionDiv>
          <div data-aos="zoom-in" data-aos-duration="3000">
            <Card
              img={belen}
              name="María Belén Arroyo"
              inEnsemble="Founder Ensemble HR"
              work="Organizadora de Eventos | Estudiante de Relaciones del
        Trabajo"
            />
          </div>

          <div data-aos="zoom-in" data-aos-duration="3000">
            <Card
              img={facundo}
              name="Facundo Corbalan"
              inEnsemble="Co founder Ensemble HR"
              work=" Experto en Payroll y procesos de implementación"
            />
          </div>
        </CardCollectionDiv>
      </FoundersDiv>

      <Footer />
    </TodoDiv>
  );
};

export default Conocenos;
