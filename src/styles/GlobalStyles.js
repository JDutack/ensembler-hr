import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');


html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 1550px;
  height: min-content;
  background-color: #e4e4e4;
 
}

@media (max-width: 790px) {
  html,
body {
}
  }
  @media (max-width: 650px) {
    
  }

`;
