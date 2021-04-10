import React from 'react';
import Card from './Card';
import cursos from '../utils/CursosOfrecidos.json';
import img from '../assets/contento.png';
import styled from 'styled-components';
// import { TitleDiv } from '../styles/componentStyles/CarrouselStyle';

const CoursesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 0 250px 0;
`;
const CourseTitleDiv = styled.div`
  padding: 200px 0 0 100px;
`;

const Courses = () => {
  return (
    <>
      <CourseTitleDiv>
        <h1>NUEVOS CURSOS PARA VOS</h1>
      </CourseTitleDiv>
      <CoursesDiv>
        {cursos.map((curso) => {
          return <Card key={curso.id} courses={curso} image={img} />;
        })}
      </CoursesDiv>
    </>
  );
};

export default Courses;
