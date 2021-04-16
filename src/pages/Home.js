import React, { Fragment } from 'react';

import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import Carrousel from '../components/Carrousel';
import SubirCv from '../components/SubirCv';
import Footer from '../components/Footer';
import styled from 'styled-components';

import img from '../assets/headerBack.png';

export const BackgroundHead = styled.div`
  background-image: url(${img});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: right;
`;

const Home = () => {
  return (
    <Fragment>
      <BackgroundHead>
        <Header />
        <VideoSection />
      </BackgroundHead>
      <Carrousel />
      <SubirCv />
      <Footer />
    </Fragment>
  );
};

export default Home;
