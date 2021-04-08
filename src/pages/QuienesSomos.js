import React, { Fragment } from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Nosotros from '../components/Nosotros';
import { BackgroundHead } from './Home';

const QuienesSomos = () => {
  return (
    <Fragment>
      <BackgroundHead>
        <Header />
        <Nosotros />
      </BackgroundHead>
      <Footer />
    </Fragment>
  );
};

export default QuienesSomos;
