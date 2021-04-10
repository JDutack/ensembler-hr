import React, { Fragment } from 'react';
import ContactoDiv from '../components/ContactoDiv';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BackgroundHead } from './Home';

const Contacto = () => {
  return (
    <Fragment>
      <BackgroundHead>
        <Header />
        <ContactoDiv />
      </BackgroundHead>
      <Footer />
    </Fragment>
  );
};

export default Contacto;
