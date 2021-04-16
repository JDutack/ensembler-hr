import React from 'react';
import styled from 'styled-components';
import { TitleBtn } from '../styles/componentStyles/VideoSectionStyle';

const CourseImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CardDiv = styled.div`
  width: min-content;
  /* border: 1px solid black; */
`;

const ImgDiv = styled.div`
  width: 400px;

  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 850px) {
    width: 200px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const DataDiv = styled.div`
  padding: 25px;
`;

const TitleCourse = styled.h3`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 1235px) {
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const PCourse = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 30px;
  @media (max-width: 1235px) {
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const CourseBtn = styled(TitleBtn)`
  font-size: 22px;
  width: 100%;
  background-color: white;
  color: var(--ensembleRed);
  border: 2px solid var(--ensembleRed);
  @media (max-width: 800px) {
    font-size: 16px;
  }

  &:hover {
    background-color: var(--ensembleRed);
    color: white;
  }
`;

const Card = ({ courses, image }) => {
  const { Titulo, desc } = courses;

  return (
    <CardDiv>
      <ImgDiv>
        <CourseImg src={image} alt=""></CourseImg>
      </ImgDiv>
      <DataDiv>
        <TitleCourse>{Titulo.toUpperCase()}</TitleCourse>
        <PCourse>{desc}</PCourse>
        <CourseBtn>Ver detalles</CourseBtn>
      </DataDiv>
    </CardDiv>
  );
};

export default Card;
