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
  height: 300px;
`;

export const UpLeft = styled.div`
  display: flex;
  padding-top: 100px;
  /* align-items: center; */
`;

export const ImgDiv = styled.img`
  height: 90px;
  padding-right: 100px;
`;

export const FooterUl = styled.ul``;
export const FooterLi = styled.li`
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 15px;
  color: var(--ensembleBtnLetter);
  list-style: none;
`;

export const UpRight = styled.div`
  padding: 130px;
`;

export const FooterDown = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;

export const DownLeft = styled.p`
  color: var(--ensembleBtnLetter);
`;

export const DownRigth = styled.p`
  color: var(--ensembleBtnLetter); ;
`;
export const RedesImg = styled.img`
  height: 80px;
  margin-left: 90px;
`;
