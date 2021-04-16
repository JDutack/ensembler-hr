import React from 'react';

import { TitleBtn } from '../styles/componentStyles/VideoSectionStyle';
import ensembleImg from '../assets/title.png';
import imgCv from '../assets/resume.png';

import miniInsta from '../assets/instaRed.svg';
import miniLinke from '../assets/Vector (1).png';
import {
  CvDiv,
  CvSection,
  CvImg,
  ContactSection,
  CvP,
  TextDiv,
  ContactImg,
  RedesLink,
  RedesP,
  RedesDiv,
} from '../styles/componentStyles/SubirCvStyle.js';

const SubirCv = () => {
  return (
    <CvDiv>
      <CvSection>
        <div>
          <CvImg src={imgCv} width="157" alt=""></CvImg>
        </div>
        <TextDiv>
          <CvP>
            ¿Te gustaria dejarnos tu CV para <br></br> futuras busquedas
            laborales?
          </CvP>
          <a href="mailto:info@ensemble-hr.com">
            <TitleBtn>QUERES SUBIR TU CV</TitleBtn>
          </a>
        </TextDiv>
      </CvSection>
      <ContactSection>
        <ContactImg src={ensembleImg} alt="" />
        <RedesDiv>
          <RedesP>Seguinos en nuestras Redes Sociales</RedesP>
          <RedesLink>
            <img src={miniInsta} alt="" width="15" />
            <a
              style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
              href="https://www.instagram.com/ensemblehrar/"
              target="blank"
            >
              &nbsp;@ensemblehrar
            </a>
          </RedesLink>
          <RedesLink>
            <img src={miniLinke} alt="" width="15" height="15" />
            <a
              style={{ textDecoration: 'none', color: ' rgb(220, 29, 37)' }}
              href="https://www.linkedin.com/company/ensemble-hr/"
              target="blank"
            >
              &nbsp; linkedin.com/company/ensemble-hr/
            </a>
          </RedesLink>
        </RedesDiv>
      </ContactSection>
    </CvDiv>
  );
};

export default SubirCv;
