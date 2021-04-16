import styled from 'styled-components';
import { TitleBtn } from './VideoSectionStyle';

export const GralDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const LeftDiv = styled.div`
  /* width: 50%; */
  @media (max-width: 500px) {
    padding: 10%;
  }
`;
export const CapDiv = styled.div``;
export const CapH1 = styled.h1`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 40px;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 1310px) {
    font-size: 33px;
  }
  @media (max-width: 1176px) {
    margin-bottom: 30px;

    font-size: 27px;
  }
  @media (max-width: 1042px) {
    font-size: 22px;
  }
  @media (max-width: 907px) {
    font-size: 17px;
    margin-bottom: 10px;
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
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const CapP = styled.p`
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 40px;
  @media (max-width: 1500px) {
    font-size: 34px;
  }
  @media (max-width: 1310px) {
    font-size: 31px;
  }
  @media (max-width: 1176px) {
    font-size: 25px;
  }
  @media (max-width: 1042px) {
    font-size: 20px;
  }
  @media (max-width: 907px) {
    font-size: 15px;
  }
  @media (max-width: 850px) {
    font-size: 13px;
  }
  @media (max-width: 760px) {
    font-size: 11px;
  }
  @media (max-width: 630px) {
    font-size: 9px;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;
export const CapBtn = styled(TitleBtn)`
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const RigthDiv = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SonriImg = styled.img`
  width: 100%;
  height: 100%;
`;
