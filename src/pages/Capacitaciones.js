import React, { Fragment } from 'react';
import Capacitate from '../components/Capacitate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BackgroundHead } from './Home';

const Capacitaciones = () => {
  return (
    <Fragment>
      <BackgroundHead>
        <Header />
        <Capacitate />
      </BackgroundHead>
      <Footer />
    </Fragment>
  );
};

export default Capacitaciones;
