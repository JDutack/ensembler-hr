import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Portada from '../components/Portada';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Portada />
      <Footer />
    </Fragment>
  );
};

export default Home;
