import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Gradient } from '../components/Portada';
import Header from '../components/Header';
import Footer from '../components/Footer';

import linkedin from '../assets/linkedin.svg';
import belen from '../assets/belen.jfif';
import fondoCards from '../assets/fondocards.jpg';

const ConocenosInfo = styled.div`
  padding: 100px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
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

const ConocenosP = styled.p`
  padding: 25px;
  width: 600px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: justify;
  word-spacing: 5px;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px 25px 25px 25px;
  box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px 17px rgba(0, 0, 0, 0.75);
  @media (max-width: 790px) {
    word-spacing: 2.5px;
    font-size: 15px;
    width: 450px;
  }
  @media (max-width: 650px) {
    word-spacing: 0;
    font-size: 10px;
    width: 300px;
  }
`;

const ValoresContainer = styled.div`
  padding: 25px;
  width: max-content;
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
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  padding: 100px 25px;
  background-image: url(${fondoCards});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const FounderDiv = styled.div`
  background-color: rgba(156, 158, 160, 0.6);
  width: 30%;
  align-self: flex-end;
  height: min-content;
  border-radius: 8px;
  /* border: 1px solid black; */
  padding: 10px;
`;

const FounderImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* padding-right: 20px; */
`;

const FounderImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const FounderData = styled.div`
  display: flex;
  flex-direction: column;
`;

const CofounderDiv = styled.div`
  width: 50%;
  justify-self: center;
  height: min-content;
  /* width: 300px; */
  border: 1px solid black;
`;

const CofounderImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const CofounderData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LinkeImg = styled.img`
  width: 30px;
  height: 30px;
`;

const PortaRedes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: wheat;
`;

const CardCollectionDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
`;

const PersonalCard = styled.div`
  background-color: white;
  width: calc(100% / 3 - 20px);
  min-width: 250px;
  margin: 10px;
  padding: 30px 0;
  border-bottom: 2px solid #ccc;
`;
const PersonalImage = styled.div`
  margin: auto;
  text-align: center;
  height: 148px;
  & img {
    margin: auto;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #35b652;
  }
`;
const PersonalInfo = styled.div`
  text-align: center;
  padding-top: 30px;
  font-family: 'HKGrotesk', sans-serif !important;
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Icon = styled.div`
  border: 2px solid #0f6bb6;
  padding: 8px;
  margin: 8px;
  font-size: 14pt;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  text-align: center;
  cursor: pointer;
  background-image: url(${linkedin});
  &:hover {
    background-color: #ccc;
    border: 4px solid #0f6bb6;
    padding: 6px;
  }
`;

const Conocenos = () => {
  return (
    <Fragment>
      <Header />
      <ConocenosInfo>
        <ConocenosTitle>¿Quiénes somos?</ConocenosTitle>
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

        <div data-aos="fade-right">
          <ConocenosTitle>Nuestra misión</ConocenosTitle>
          <ConocenosP>
            Ayudar a las organizaciones con procesos eficientes, dando servicios
            de excelencia y enfocados en la atención al cliente. Dar a nuestros
            candidatos las mejores herramientas a nuestro alcance para que
            puedan cumplir sus metas laborales, dando lo mejor de nosotros, para
            que ellos puedan sacar lo mejor de ellos y cumplir sus sueños.
          </ConocenosP>
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
        <FounderDiv>
          <FounderImageDiv>
            <FounderImg src={belen} alt="" />
          </FounderImageDiv>
          <FounderData>
            <h3>María Belén Arroyo</h3>
            <h4>Founder Ensemble HR</h4>
          </FounderData>
          <PortaRedes>
            <LinkeImg src={linkedin} alt="" />
          </PortaRedes>
        </FounderDiv>
        <CardCollectionDiv>
          <PersonalCard>
            <PersonalImage>
              <img src={belen} alt="" />
            </PersonalImage>
            <PersonalInfo>
              <h3>María Belén Arroyo</h3>
              <h4>Founder Ensemble HR</h4>
              <p>
                Organizadora de Eventos | Estudiante de Relaciones del Trabajo
              </p>
            </PersonalInfo>
            <div class="social-info">
              <SocialIcons>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
              </SocialIcons>
              <div class="social-details">
                <div class="details"></div>
                <div class="details"></div>
                <div class="details"></div>
                <div class="details"></div>
              </div>
            </div>
          </PersonalCard>
        </CardCollectionDiv>
        <CofounderDiv>
          <CofounderData>
            <h3>Facundo Corbalan</h3>
            <h4>Co founder Ensemble HR</h4>
            <p>Experto en Payroll y procesos de implementación.</p>
          </CofounderData>
          <PortaRedes>
            <LinkeImg src={linkedin} alt="" />
          </PortaRedes>
          <CofounderImageDiv>
            <FounderImg src={belen} alt="" />
          </CofounderImageDiv>
        </CofounderDiv>
      </FoundersDiv>
      <Footer />
    </Fragment>
  );
};

export default Conocenos;
