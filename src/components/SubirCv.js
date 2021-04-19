import React from 'react';

import { TitleBtn } from '../styles/componentStyles/VideoSectionStyle';

import imgCv from '../assets/resume.png';

import {
  CvDiv,
  CvSection,
  CvImg,
  ContactSection,
  CvP,
  TextDiv,
} from '../styles/componentStyles/SubirCvStyle.js';
import icoLkd from '../assets/Vector (1).svg';
import icoInsta from '../assets/Group 33.svg';
import { RedesImg } from '../styles/componentStyles/FooterStyle';

const SubirCv = () => {
  return (
    <CvDiv>
      <CvSection>
        <div>
          <CvImg src={imgCv} width="157" alt=""></CvImg>
        </div>
        <TextDiv>
          <CvP>
            ¿Te gustaría dejarnos tu CV para <br></br> futuras búsquedas
            laborales?
          </CvP>
          <a href="mailto:info@ensemble-hr.com">
            <TitleBtn>¿QUERÉS SUBIR TU CV?</TitleBtn>
          </a>
        </TextDiv>
      </CvSection>
      <ContactSection>
        <a href="https://www.instagram.com/ensemblehrar/" target="blank">
          <RedesImg src={icoInsta} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/ensemble-hr/" target="blank">
          <RedesImg src={icoLkd} alt="" />
        </a>
      </ContactSection>
    </CvDiv>
  );
};

export default SubirCv;
