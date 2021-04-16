import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5% 0;
`;
export const PresentacionSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const VideoPresentacion = styled.section``;

export const SoloVideo = styled.div`
  height: 400px;
  width: 650px;
  /* margin-top: 70px;
  height: 404px;
  width: 721px; */
  @media (max-width: 1550px) {
    height: 360px;
    width: 600px;
  }
  @media (max-width: 1400px) {
    height: 330px;
    width: 550px;
  }
  @media (max-width: 1300px) {
    height: 280px;
    width: 500px;
  }
  @media (max-width: 1200px) {
    height: 255px;
    width: 450px;
  }
  @media (max-width: 1100px) {
    height: 225px;
    width: 400px;
  }
  @media (max-width: 1000px) {
    height: 195px;
    width: 350px;
  }
  @media (max-width: 900px) {
    height: 165px;
    width: 300px;
  }
  @media (max-width: 800px) {
    height: 135px;
    width: 250px;
  }
  @media (max-width: 700px) {
    height: 110px;
    width: 200px;
  }
  @media (max-width: 600px) {
    height: 85px;
    width: 150px;
  }
  @media (max-width: 320px) {
    height: 65px;
    width: 120px;
  }
`;

export const SoloTextos = styled.div``;

export const TitleImg = styled.img`
  width: 320px;

  @media (max-width: 1310px) {
    width: 250px;
  }
  @media (max-width: 1176px) {
    width: 220px;
  }
  @media (max-width: 1100px) {
    width: 170px;
  }
  @media (max-width: 907px) {
    width: 100px;
  }
  @media (max-width: 650px) {
    width: 90px;
  }
  @media (max-width: 480px) {
    width: 80px;
  }
  @media (max-width: 330px) {
    width: 40px;
  }
`;

export const TitleP = styled.p`
  font-size: 42px;
  font-weight: 500;
  /* font-family: 'Rubik', sans-serif; */
  /* margin: 10px; */
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 1310px) {
    font-size: 33px;
  }
  @media (max-width: 1176px) {
    font-size: 27px;
  }
  @media (max-width: 1042px) {
    font-size: 22px;
  }
  @media (max-width: 907px) {
    font-size: 17px;
  }
  @media (max-width: 850px) {
    font-size: 15px;
  }
  @media (max-width: 760px) {
    font-size: 13px;
  }
  @media (max-width: 630px) {
    font-size: 11px;
  }
  @media (max-width: 515px) {
    font-size: 8px;
  }
  @media (max-width: 320px) {
    font-size: 6px;
  }
`;

export const TitleSpan = styled.span`
  font-size: 42px;
  font-weight: 700;
  color: var(--ensembleRed);
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 1310px) {
    font-size: 33px;
  }
  @media (max-width: 1176px) {
    font-size: 27px;
  }
  @media (max-width: 1042px) {
    font-size: 22px;
  }
  @media (max-width: 907px) {
    font-size: 17px;
  }
  @media (max-width: 850px) {
    font-size: 15px;
  }
  @media (max-width: 760px) {
    font-size: 13px;
  }
  @media (max-width: 630px) {
    font-size: 11px;
  }
  @media (max-width: 515px) {
    font-size: 8px;
  }
  @media (max-width: 320px) {
    font-size: 6px;
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
  margin-top: 5%;
  transition: color 1s, background-color 1s;
  &:hover {
    background-color: var(--ensembleBtnLetter);
    color: var(--ensembleRed);
  }
  @media (max-width: 1200px) {
    font-size: 10px;
    padding: 22px 49px 22px 49px;
  }

  @media (max-width: 970px) {
    font-size: 8px;
    padding: 17px 30px 17px 30px;
    border-radius: 7px;
  }
  @media (max-width: 820px) {
    font-size: 8px;
    padding: 14px 28px 14px 28px;
  }
  @media (max-width: 745px) {
    font-size: 6px;
    padding: 12px 20px 12px 20px;
  }
  @media (max-width: 650px) {
    border-radius: 5px;

    font-size: 4px;
    padding: 10px 16px 10px 16px;
  }
  @media (max-width: 320px) {
    font-size: 2px;
    padding: 2px 6px;
    padding: 6px 10px 6px 10px;
  }
`;
