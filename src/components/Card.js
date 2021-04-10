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
`;

const DataDiv = styled.div`
  padding: 25px;
`;

const TitleCourse = styled.h3`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 30px;
`;

const PCourse = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 30px;
`;

const CourseBtn = styled(TitleBtn)`
  width: 100%;
  background-color: white;
  color: var(--ensembleRed);
  border: 2px solid var(--ensembleRed);
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
