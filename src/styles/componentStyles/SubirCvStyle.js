import styled from 'styled-components';

export const CvDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* padding: 100px 0px; */
  height: 435px;
  @media (max-width: 1300px) {
    height: 350px;
  }
  @media (max-width: 1100px) {
    height: 280px;
  }
  @media (max-width: 920px) {
    height: 190px;
  }
  @media (max-width: 700px) {
    height: 140px;
  }
`;

export const CvSection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
  margin-right: 20px;
  padding: 0 70px;
  background-color: rgb(254, 245, 246);
  border-radius: 20px;
  @media (max-width: 730px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const CvImg = styled.img`
  margin-right: 70px;
  width: 320px;
  @media (max-width: 1310px) {
    width: 250px;
  }
  @media (max-width: 1176px) {
    width: 220px;
  }
  @media (max-width: 1100px) {
    width: 170px;
    margin-right: 30px;
  }
  @media (max-width: 907px) {
    width: 100px;
  }
  @media (max-width: 650px) {
    width: 90px;
    margin-right: 10px;
  }
  @media (max-width: 480px) {
    width: 80px;
  }
  @media (max-width: 330px) {
    width: 40px;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  margin-left: 20px;
  background-color: var(--ensembleRed);
  border-radius: 20px;
  & img {
    height: 100px;
    margin: 10px;
  }
  @media (max-width: 730px) {
    display: none;
  }
`;

export const CvP = styled.p`
  text-align: justify;
  font-size: 27px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  line-height: 70px;
  margin-bottom: 30px;
  @media (max-width: 1585px) {
    font-size: 20px;
    line-height: 50px;

    margin-bottom: 0px;
  }
  @media (max-width: 1200px) {
    font-size: 15px;
    line-height: 40px;
  }
  @media (max-width: 1040px) {
    font-size: 12px;
    line-height: 30px;
  }

  @media (max-width: 940px) {
    font-size: 10px;
  }

  @media (max-width: 452px) {
    font-size: 8px;
  }
  @media (max-width: 415px) {
    font-size: 5px;
    line-height: 20px;
  }
`;

export const TextDiv = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
