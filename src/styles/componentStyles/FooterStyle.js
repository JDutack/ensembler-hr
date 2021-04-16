import styled from 'styled-components';

export const FooterSection = styled.footer`
  color: var(--ensembleBtnLetter);
  display: flex;
  flex-direction: column;
  background-color: var(--footerBack);
`;

export const FooterUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 280px;
  @media (max-width: 1314px) {
    padding-top: 80px;
  }
  @media (max-width: 1035px) {
    height: 200px;
  }
  @media (max-width: 945px) {
    height: 150px;
  }
  @media (max-width: 855px) {
    height: 90px;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const UpLeft = styled.div`
  display: flex;
  padding-top: 100px;
  @media (max-width: 1314px) {
    padding-top: 80px;
  }
  @media (max-width: 1035px) {
    padding-top: 50px;
  }
  @media (max-width: 945px) {
    padding-top: 30px;
  }
  @media (max-width: 855px) {
    padding-top: 0px;
  }
`;

export const ImgDiv = styled.img`
  height: 90px;
  padding-right: 100px;
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

export const FooterUl = styled.ul`
  @media (max-width: 500px) {
    display: none;
  }
`;
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
  padding: 130px;
  @media (max-width: 1314px) {
    padding: 100px;
  }
  @media (max-width: 1035px) {
    padding: 80px;
  }
  @media (max-width: 945px) {
    padding: 60px;
  }
  @media (max-width: 855px) {
    padding: 20px;
  }
`;

export const FooterDown = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 25px;
    font-size: 13px;
  }
`;

export const DownLeft = styled.p`
  padding: 25px;

  color: var(--ensembleBtnLetter);
`;

export const DownRigth = styled.p`
  padding: 25px;
  color: var(--ensembleBtnLetter);
`;

export const RedesImg = styled.img`
  height: 80px;
  margin-left: 90px;
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
