import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Gradient } from '../components/Portada';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '../components/Card';
import belen from '../assets/belen.jfif';
import facundo from '../assets/facundo.jfif';

const ConocenosInfo = styled.div`
  /* width: 100%; */
  padding-bottom: 100px;
  height: min-content;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ecf0f1, #bdc3c7, #2980b9, #3498db);
  background-size: 400% 400%;
  animation: ${Gradient} 10s ease infinite;
`;
const ConocenosTitle = styled.h3`
  margin-top: 75px;
  font-size: 40px;
  color: white;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 790px) {
    font-size: 35px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const ConocenosDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 900px;
  padding: 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: justify;
  word-spacing: 5px;
  line-height: 30px;
  border-radius: 2px 25px 25px 25px;

  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  @media (max-width: 1200px) {
    width: 600px;
    font-size: 18px;
  }
  @media (max-width: 950px) {
    width: 550px;
    font-size: 15px;
  }
  @media (max-width: 650px) {
    width: 280px;
    font-size: 10px;
  }
`;

const ConocenosP = styled.p`
  padding: 15px;

  @media (max-width: 790px) {
    word-spacing: 2.5px;

    /* width: 450px; */
  }
  @media (max-width: 650px) {
    word-spacing: 0;
    /* width: 230px; */
    text-align: justify;
  }
`;

const ValoresContainer = styled.div`
  padding: 20px;
  /* width: max-content; */
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  word-spacing: 5px;
  line-height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 25px 2px 25px 2px;
  box-shadow: 0px 50px 94px 51px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 50px 94px 51px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 50px 94px 51px rgba(0, 0, 0, 0.72);
`;

const ValoresUl = styled.ul`
  list-style: none;
`;

const ValoresLi = styled.li`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 790px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
  }
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
    <Fragment>
      <Header />
      <ConocenosInfo>
        <ConocenosTitle>¿Quiénes somos?</ConocenosTitle>
        <ConocenosDiv>
          <ConocenosP>
            Ensemble HR es un proyecto que busca dar soluciones tanto a empresas
            con sus procesos de selección, capacitación, administración de
            personal, liquidación de sueldos y compensaciones y beneficios, así
            como también ofrecer un abanico de servicios a todos aquellos que
            buscan trabajo, como revisiones de CV, entrenamientos para
            entrevista y capacitaciones variadas que ayuden a aquellos que no
            tienen experiencia a poder insertarse laboralmente, como aquellos
            que desean reconvertirse profesionalmente o simplemente buscan
            crecer profesionalmente en su senority. Ensemble HR es un lugar en
            donde todos pueden encontrar ayuda y pretendemos ser un puente para
            que tanto empresas como candidatos puedan progresar en el mundo
            laboral, ayudando a las empresas con procesos eficientes, que les
            permitan concentrarse en la productividad de sus organizaciones y a
            los candidatos, a poder ayudarlos a conseguir las mejores
            oportunidades posibles.
          </ConocenosP>
        </ConocenosDiv>

        <div data-aos="fade-right">
          <ConocenosTitle>Nuestra misión</ConocenosTitle>
          <ConocenosDiv>
            <ConocenosP>
              Ayudar a las organizaciones con procesos eficientes, dando
              servicios de excelencia y enfocados en la atención al cliente. Dar
              a nuestros candidatos las mejores herramientas a nuestro alcance
              para que puedan cumplir sus metas laborales, dando lo mejor de
              nosotros, para que ellos puedan sacar lo mejor de ellos y cumplir
              sus sueños.
            </ConocenosP>
          </ConocenosDiv>
        </div>

        <div data-aos="fade-left">
          <ConocenosTitle>Nuestros valores</ConocenosTitle>
          <ValoresContainer>
            <ValoresUl>
              <ValoresLi data-aos="fade-right">- Honestidad</ValoresLi>
              <ValoresLi data-aos="fade-left">- Eficiencia</ValoresLi>
              <ValoresLi data-aos="fade-right">- Enfoque al cliente</ValoresLi>
              <ValoresLi data-aos="fade-left">- Pasión</ValoresLi>
              <ValoresLi data-aos="fade-right">
                - Respeto a las personas
              </ValoresLi>
            </ValoresUl>
          </ValoresContainer>
        </div>
      </ConocenosInfo>

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
    </Fragment>
  );
};

export default Conocenos;
