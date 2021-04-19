import styled from 'styled-components';

export const NosotrosDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 1000px; */
  margin: 100px;
  @media (max-width: 600px) {
    justify-content: flex-start;
    margin: 0;
  }
`;
export const FlexDiv = styled.div`
  width: 1100px;
  height: min-content;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
  }
  @media (max-width: 1065px) {
  }

  @media (max-width: 835px) {
  }
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 660px) {
  }
  @media (max-width: 500px) {
  }
`;
export const QuienesSomos = styled.div`
  width: 50%;
  height: min-content;
  margin: 10px;
  background: white;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
  padding: 40px;
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    box-shadow: none;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NosotrosP = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-top: 45px;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1065px) {
    font-size: 14px;
  }

  @media (max-width: 835px) {
    font-size: 12px;
  }
  @media (max-width: 750px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 9px;
  }
`;
export const NuestraMision = styled.div`
  background: white;

  padding: 40px;
  margin: 10px;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
  @media (max-width: 600px) {
    box-shadow: none;
  }
`;
export const NuestrosValores = styled.div`
  background: white;
  padding: 40px;
  margin: 10px;
  box-shadow: 0px 10px 30px rgba(98, 20, 24, 0.2);
  border-radius: 30px;
  @media (max-width: 600px) {
    box-shadow: none;
  }
`;

export const Derecho = styled.div`
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;
export const Titleh1 = styled.h1`
  font-weight: 500;
  font-size: 36px;
  width: max-content;
  @media (max-width: 1300px) {
    font-size: 34px;
  }
  @media (max-width: 1065px) {
    font-size: 30px;
  }

  @media (max-width: 835px) {
    font-size: 25px;
  }
  @media (max-width: 660px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const CardImg = styled.img`
  width: 50px;
  @media (max-width: 1300px) {
    width: 40;
  }
  @media (max-width: 1065px) {
    width: 30;
  }

  @media (max-width: 835px) {
    width: 20;
  }
  @media (max-width: 660px) {
    width: 15;
  }
  @media (max-width: 500px) {
    width: 12;
  }
`;
