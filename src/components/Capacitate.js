import React from 'react';
import { Link } from 'react-router-dom';
import sonri from '../assets/contento.png';
import {
  GralDiv,
  LeftDiv,
  CapDiv,
  CapH1,
  CapP,
  CapBtn,
  RigthDiv,
  SonriImg,
} from '../styles/componentStyles/CapacitateStyles.js';

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
