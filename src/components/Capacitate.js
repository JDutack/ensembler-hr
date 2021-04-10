import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sonri from '../assets/contento.png';
import { TitleBtn } from '../styles/componentStyles/VideoSectionStyle';

const GralDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
`;
const LeftDiv = styled.div`
  /* width: 50%; */
`;
const CapDiv = styled.div``;
const CapH1 = styled.h1`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 40px;
`;
const CapP = styled.p`
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 40px;
`;
const CapBtn = styled(TitleBtn)``;

const RigthDiv = styled.div`
  width: 50%;
`;
const SonriImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Capacitate = () => {
  return (
    <GralDiv>
      <LeftDiv>
        <CapDiv>
          <CapH1>
            CAPACITATE DESDE <br />
            DONDE ESTES
          </CapH1>
          <CapP>
            Aprender nos permite conseguir <br /> habilidades que nos abrirán
            <br />
            nuevas oportunidades
          </CapP>
          <Link
            style={{
              textDecoration: 'none',
              color: ' var(--ensembleBtnLetter)',
            }}
            to="/cursos"
          >
            <CapBtn>VER CAPACITACIONES</CapBtn>
          </Link>
        </CapDiv>
      </LeftDiv>
      <RigthDiv>
        <SonriImg src={sonri} alt="" />
      </RigthDiv>
    </GralDiv>
  );
};

export default Capacitate;
