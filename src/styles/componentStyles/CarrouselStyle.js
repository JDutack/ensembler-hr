import styled from 'styled-components';

export const SliderBackDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  box-shadow: 5px 7px 50px rgba(98, 20, 24, 0.2);
  margin: 8% auto;
  border-radius: 20px;
  @media (max-width: 1480px) {
    width: 1000px;
  }
  @media (max-width: 1300px) {
    width: 900px;
  }
  @media (max-width: 1230px) {
    width: 810px;
  }
  @media (max-width: 1156px) {
    width: 710px;
  }
  @media (max-width: 1020px) {
    width: 600px;
  }
  @media (max-width: 900px) {
    width: 580px;
  }
  @media (max-width: 800px) {
    width: 480px;
  }
  @media (max-width: 700px) {
    width: 450px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const CarrouselSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 70px 0 90px 0;
`;

export const SliderDiv = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleDiv = styled.div`
  text-align: center;
`;

export const TitleH1 = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 100px;
  color: rgb(132, 132, 132);

  @media (max-width: 1300px) {
    font-size: 34px;
    margin-bottom: 70px;
  }
  @media (max-width: 1065px) {
    font-size: 30px;
    margin-bottom: 65px;
  }

  @media (max-width: 835px) {
    font-size: 25px;
    margin-bottom: 60px;
  }
  @media (max-width: 660px) {
    font-size: 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const EmployerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  text-align: center;
  align-items: center;
`;

export const ImgBelen = styled.img`
  border-radius: 50%;
  height: 170px;
  margin-bottom: 30px;
  @media (max-width: 1300px) {
    height: 150px;
  }
  @media (max-width: 1065px) {
    height: 100px;
  }

  @media (max-width: 835px) {
  }
  @media (max-width: 660px) {
  }
  @media (max-width: 500px) {
  }
`;

export const Employerh3 = styled.h3`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 1300px) {
    font-size: 28px;
  }
  @media (max-width: 1065px) {
    font-size: 24px;
  }

  @media (max-width: 835px) {
    font-size: 19px;
  }
  @media (max-width: 660px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Employerh4 = styled.h4`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1065px) {
    font-size: 16px;
  }

  @media (max-width: 835px) {
    font-size: 12px;
  }
  @media (max-width: 660px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const EmployerP = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1065px) {
    font-size: 16px;
  }

  @media (max-width: 835px) {
    font-size: 12px;
  }
  @media (max-width: 660px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const EmployerSpan = styled.span`
  font-weight: 700;
  font-size: 24px;
  font-style: italic;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1065px) {
    font-size: 16px;
  }

  @media (max-width: 835px) {
    font-size: 12px;
  }
  @media (max-width: 660px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;
