import React from 'react';
import Card from './Card';
import cursos from '../utils/CursosOfrecidos.json';
import img from '../assets/contento.png';
import {
  CoursesDiv,
  CourseH1,
  CourseTitleDiv,
} from '../styles/componentStyles/CoursesStyles.js';

const Courses = () => {
  return (
    <>
      <CourseTitleDiv>
        <CourseH1>NUEVOS CURSOS PARA VOS</CourseH1>
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
