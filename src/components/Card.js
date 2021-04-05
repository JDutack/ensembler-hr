import React from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedin.svg';
import whatsapp from '../assets/whatsapp.svg';

import RedesSociales from './RedesSociales';

const PersonalCard = styled.div`
  background-color: rgba(193, 197, 201, 0.4);
  width: 100px;
  height: 400px;
  min-width: 250px;
  margin: 10px;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const PersonalImage = styled.div`
  text-align: center;
`;

const FounderImg = styled.img`
  height: 140px;
  border-radius: 50%;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
  }
`;

const PersonalInfo = styled.div`
  text-align: center;
  padding-top: 30px;
  font-family: 'HKGrotesk', sans-serif !important;
`;

const Card = ({ name, inEnsemble, work, img }) => {
  return (
    <PersonalCard>
      <PersonalImage>
        <FounderImg src={img} alt="" />
      </PersonalImage>
      <PersonalInfo>
        <h3>{name}</h3>
        <h4>{inEnsemble}</h4>
        <p>{work}</p>
      </PersonalInfo>
      <RedesSociales linke={linkedin} whats={whatsapp} />
    </PersonalCard>
  );
};

export default Card;
