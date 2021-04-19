import styled from 'styled-components';

export const HeaderAll = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  height: 110px;
  @media (max-width: 790px) {
    height: 85px;
  }
  @media (max-width: 650px) {
    height: 60px;
  }
`;
export const HeaderImg = styled.img`
  width: 86px;
  height: 86px;
  transition-duration: 1.5s;
  &:hover {
    -webkit-filter: blur(100px);
    filter: blur(100px);
  }
  @media (max-width: 790px) {
    width: 66px;
    height: 66px;
  }
  @media (max-width: 650px) {
    width: 46px;
    height: 46px;
  }
`;

export const Navegacion = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const HeaderLink = styled.div`
  border-radius: 50px;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding: 14px 40px;
  transition: background-color 1.3s, font-weight 1s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: var(--headerHover);
    font-weight: 500;
  }
  @media (max-width: 970px) {
    font-size: 12px;
    padding: 6px 20px;
  }
  @media (max-width: 650px) {
    font-size: 8px;
    padding: 0 10px;
  }
`;
export const ImageLink = styled.div`
  /* margin: 1px; */
  padding: 10px 20px;
  height: min-content;

  &:hover {
  }

  @media (max-width: 865px) {
  }
  @media (max-width: 650px) {
  }
`;
