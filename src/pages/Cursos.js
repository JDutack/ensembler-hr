import React, { Fragment } from 'react';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BackgroundHead } from './Home';

const Cursos = () => {
  return (
    <Fragment>
      <BackgroundHead>
        <Header />
        <Courses />
      </BackgroundHead>

      <Footer />
    </Fragment>
  );
};

export default Cursos;
