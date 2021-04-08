import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 100px 0;
  height: 500px;
  display: flex;
  @media (max-width: 970px) {
    /* height: 400px; */
  }
  @media (max-width: 650px) {
    /* height: 100px; */
  }
`;
export const PresentacionSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const VideoPresentacion = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  margin: 5px;
  height: min-content;
  width: 900px;
  @media (max-width: 970px) {
  }
  @media (max-width: 650px) {
  }
`;

export const SoloVideo = styled.div`
  margin-top: 70px;
  height: 404px;
  width: 721px;
  @media (max-width: 1550px) {
    height: 350px;
    width: 620px;
  }
  @media (max-width: 1400px) {
    height: 320px;
    width: 550px;
  }
  @media (max-width: 1300px) {
    height: 300px;
    width: 520px;
  }
  @media (max-width: 1200px) {
    height: 280px;
    width: 480px;
  }
  @media (max-width: 1100px) {
    height: 260px;
    width: 450px;
  }
  @media (max-width: 1000px) {
    height: 240px;
    width: 420px;
  }
  @media (max-width: 900px) {
    height: 220px;
    width: 390px;
  }
  @media (max-width: 800px) {
    height: 200px;
    width: 350px;
  }
  @media (max-width: 700px) {
    height: 180px;
    width: 310px;
  }
  @media (max-width: 600px) {
    margin: 0;
    height: 40px;
    width: 80px;
  }
`;

export const SoloTextos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: min-content;
  width: 75%;
  /* border: 1px solid black; */
`;

export const TitleImg = styled.img`
  width: 320px;
  /* height: 130px; */
  @media (max-width: 1500px) {
  }
  @media (max-width: 1310px) {
    width: 310px;
    /* height: 80px; */
  }
  @media (max-width: 1176px) {
    width: 280px;
    /* height: 80px; */
  }
  @media (max-width: 1100px) {
    width: 250px;
    /* height: 80px; */
  }
  @media (max-width: 907px) {
    width: 200px;
    /* height: 60px; */
  }
  @media (max-width: 650px) {
    width: 130px;
    /* height: 35px; */
  }
  @media (max-width: 480px) {
    width: 80px;
    /* height: 28px; */
  }
`;

export const TitleP = styled.p`
  font-size: 42px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  margin: 10px;
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  @media (max-width: 1310px) {
    font-size: 31px;
  }
  @media (max-width: 1176px) {
    font-size: 27px;
  }
  @media (max-width: 1042px) {
    font-size: 23px;
  }
  @media (max-width: 907px) {
    font-size: 20px;
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 760px) {
    font-size: 16px;
  }
  @media (max-width: 630px) {
    font-size: 9px;
    margin: 0;
  }
`;

export const TitleSpan = styled.span`
  font-size: 42px;
  font-weight: 700;
  color: var(--ensembleRed);
  font-family: 'Rubik', sans-serif;
  margin-bottom: 33px;
  @media (max-width: 970px) {
  }
  @media (max-width: 650px) {
    font-size: 9px;
    margin: 0;
  }
`;

export const TitleBtn = styled.button`
  background-color: rgb(225, 28, 37);
  color: var(--ensembleBtnLetter);
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  width: max-content;
  padding: 27px 59px 27px 59px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: var(--headerHover);
    font-weight: 500;
  }
  @media (max-width: 970px) {
  }
  @media (max-width: 650px) {
    font-size: 8px;
    padding: 10px 20px;
  }
`;
