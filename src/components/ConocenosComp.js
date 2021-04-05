import React from 'react';
import styled from 'styled-components';
import { Gradient } from './Portada';

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

const ConocenosComp = () => {
  return (
    <ConocenosInfo>
      <ConocenosTitle>¿Quiénes somos?</ConocenosTitle>
      <ConocenosDiv>
        <ConocenosP>
          Ensemble HR es un proyecto que busca dar soluciones tanto a empresas
          con sus procesos de selección, capacitación, administración de
          personal, liquidación de sueldos y compensaciones y beneficios, así
          como también ofrecer un abanico de servicios a todos aquellos que
          buscan trabajo, como revisiones de CV, entrenamientos para entrevista
          y capacitaciones variadas que ayuden a aquellos que no tienen
          experiencia a poder insertarse laboralmente, como aquellos que desean
          reconvertirse profesionalmente o simplemente buscan crecer
          profesionalmente en su senority. Ensemble HR es un lugar en donde
          todos pueden encontrar ayuda y pretendemos ser un puente para que
          tanto empresas como candidatos puedan progresar en el mundo laboral,
          ayudando a las empresas con procesos eficientes, que les permitan
          concentrarse en la productividad de sus organizaciones y a los
          candidatos, a poder ayudarlos a conseguir las mejores oportunidades
          posibles.
        </ConocenosP>
      </ConocenosDiv>

      {/* <div data-aos="fade-right"> */}
      <ConocenosTitle>Nuestra misión</ConocenosTitle>
      <ConocenosDiv>
        <ConocenosP>
          Ayudar a las organizaciones con procesos eficientes, dando servicios
          de excelencia y enfocados en la atención al cliente. Dar a nuestros
          candidatos las mejores herramientas a nuestro alcance para que puedan
          cumplir sus metas laborales, dando lo mejor de nosotros, para que
          ellos puedan sacar lo mejor de ellos y cumplir sus sueños.
        </ConocenosP>
      </ConocenosDiv>
      {/* </div> */}

      {/* <div data-aos="fade-left"> */}
      <ConocenosTitle>Nuestros valores</ConocenosTitle>
      <ValoresContainer>
        <ValoresUl>
          <ValoresLi data-aos="fade-right">- Honestidad</ValoresLi>
          <ValoresLi data-aos="fade-left">- Eficiencia</ValoresLi>
          <ValoresLi data-aos="fade-right">- Enfoque al cliente</ValoresLi>
          <ValoresLi data-aos="fade-left">- Pasión</ValoresLi>
          <ValoresLi data-aos="fade-right">- Respeto a las personas</ValoresLi>
        </ValoresUl>
      </ValoresContainer>
      {/* </div> */}
    </ConocenosInfo>
  );
};

export default ConocenosComp;
