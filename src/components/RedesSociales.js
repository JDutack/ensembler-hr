import React from 'react';
import styled from 'styled-components';

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const IcoRedes = styled.img`
  margin: 8px;
  font-size: 14pt;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
  &:hover {
    width: 30px;
    height: 30px;
  }
`;

const RedesSociales = ({ img1, img2 }) => {
  return (
    <SocialIcons>
      <IcoRedes src={img1} alt=""></IcoRedes>
      <IcoRedes src={img2} alt=""></IcoRedes>
    </SocialIcons>
  );
};

export default RedesSociales;
