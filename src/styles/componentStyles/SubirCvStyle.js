import styled from 'styled-components';

export const CvDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
  height: 435px;
`;

export const CvSection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
  margin-right: 20px;
  padding: 0 70px;
  background-color: rgb(254, 245, 246);
`;

export const CvImg = styled.img`
  margin-right: 70px;
`;

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  margin-left: 20px;
  background-color: rgb(254, 245, 246);
`;

export const CvP = styled.p`
  /* margin: 20px; */
  text-align: justify;
  font-size: 35px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  line-height: 70px;
  margin-bottom: 30px;
`;

export const TextDiv = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const ContactImg = styled.img`
  width: 400px;
`;

export const RedesLink = styled.div`
  font-weight: 500;
  font-size: 17px;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 8px;
`;

export const RedesP = styled.p`
  text-align: left;
  color: #393737;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const RedesDiv = styled.div`
  text-align: left;
`;
