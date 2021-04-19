import styled from 'styled-components';

export const FooterSection = styled.footer`
  color: var(--ensembleBtnLetter);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  padding: 50px 0;
  background-color: var(--footerBack);
`;

export const FooterSection2 = styled.footer`
  flex-direction: column;
  width: 80%;
`;

export const FooterUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UpLeft = styled.div``;

export const FooterUl = styled.ul``;

export const FooterLi = styled.li`
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 15px;
  color: var(--ensembleBtnLetter);
  list-style: none;
  @media (max-width: 1314px) {
    font-size: 10px;
    padding-bottom: 11px;
  }
  @media (max-width: 1035px) {
    font-size: 9px;
    padding-bottom: 9px;
  }
  @media (max-width: 945px) {
    font-size: 7px;
    padding-bottom: 7px;
  }
  @media (max-width: 855px) {
    font-size: 6px;
    padding-bottom: 5px;
  }
`;

export const UpRight = styled.div`
  /* display: flex; */
  /* flex-direction: column;
  justify-content: flex-end; */
  padding: 0px;
  @media (max-width: 1314px) {
    /* padding: 100px; */
  }
  @media (max-width: 1035px) {
    /* padding: 80px; */
  }
  @media (max-width: 945px) {
    /* padding: 60px; */
  }
  @media (max-width: 855px) {
    /* padding: 20px; */
  }
`;

export const ImgDiv = styled.img`
  height: 90px;
  justify-self: end;
  @media (max-width: 1314px) {
    height: 60px;
    padding-right: 90px;
  }
  @media (max-width: 1035px) {
    height: 50px;
    padding-right: 60px;
  }
  @media (max-width: 945px) {
    height: 30px;
    padding-right: 30px;
  }
  @media (max-width: 855px) {
    height: 20px;
    padding-right: 0px;
  }
  @media (max-width: 500px) {
    height: 40px;
  }
`;

export const RedesImg = styled.img`
  height: 55px;
  margin-left: 50px;
  @media (max-width: 1314px) {
    height: 50px;
    margin-left: 60px;
  }
  @media (max-width: 1035px) {
    height: 40px;
    margin-left: 40px;
  }
  @media (max-width: 945px) {
    height: 20px;
    margin-left: 30px;
  }
  @media (max-width: 855px) {
    /* height: 20px; */
    margin-left: 20px;
  }
`;

export const Copyright = styled.p`
  font-size: 15px;
  text-align: end;
  color: #ffffff;
`;

export const FooterDown = styled.div`
  display: flex;
  & section p {
    font-size: 12px;
    color: #ffffff;
  }
  & section {
    margin-right: 20px;
  }

  & section name {
    color: #ffffff;

    font-size: 12px;
  }
  & section img {
    height: 12px;
    margin: 4px;
  }
`;
