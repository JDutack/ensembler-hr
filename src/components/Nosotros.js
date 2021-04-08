import React from 'react';
import styled from 'styled-components';

import quienesimg from '../assets/Candidates.png';
import misionimg from '../assets/Recruiter Network.png';
import valoresimg from '../assets/deals.png';

export const NosotrosDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  margin: 100px;
`;
const FlexDiv = styled.div`
  width: 1100px;
  height: 900px;
  display: flex;
  justify-content: space-between;
`;
const QuienesSomos = styled.div`
  width: 50%;
  height: min-content;
  margin: 10px;
  background: white;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
  padding: 40px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NosotrosP = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-top: 45px;
`;
const NuestraMision = styled.div`
  background: white;

  padding: 40px;
  margin: 10px;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
`;
const NuestrosValores = styled.div`
  background: white;

  padding: 40px;
  margin: 10px;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
`;

const Derecho = styled.div`
  width: 50%;
`;
const Titleh1 = styled.h1`
  font-weight: 500;
  font-size: 36px;
  width: max-content;
`;
const CardImg = styled.img`
  width: 50px;
`;

const Nosotros = () => {
  return (
    <NosotrosDiv>
      <FlexDiv>
        <QuienesSomos>
          <TitleDiv>
            <Titleh1>¿Quienes somos?</Titleh1>
            <CardImg alt="" src={quienesimg}></CardImg>
          </TitleDiv>
          <NosotrosP>
            Ensemble HR es un proyecto que busca dar soluciones tanto a empresas
            con sus procesos de selección, capacitación, administración de
            personal, liquidación de sueldos, compensaciones y beneficios, así
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
          </NosotrosP>
        </QuienesSomos>
        <Derecho>
          <NuestraMision>
            <TitleDiv>
              <Titleh1>Nuestra misión</Titleh1>
              <CardImg alt="" src={misionimg}></CardImg>
            </TitleDiv>
            <NosotrosP>
              Ayudar a las organizaciones con procesos eficientes, dando
              servicios de excelencia y enfocados en la atención al cliente. Dar
              a nuestros candidatos las mejores herramientas a nuestro alcance
              para que puedan cumplir sus metas laborales, dando lo mejor de
              nosotros, para que ellos puedan sacar lo mejor de ellos y cumplir
              sus sueños.
            </NosotrosP>
          </NuestraMision>
          <NuestrosValores>
            <TitleDiv>
              <Titleh1>Nuestros valores</Titleh1>
              <CardImg alt="" src={valoresimg}></CardImg>
            </TitleDiv>
            <ul>
              <li>Honestidad</li>
              <li>Eficiencia</li>
              <li>Enfoque al cliente</li>
              <li>Pasión</li>
              <li>Respeto a las personas</li>
            </ul>
          </NuestrosValores>
        </Derecho>
      </FlexDiv>
    </NosotrosDiv>
  );
};

export default Nosotros;
