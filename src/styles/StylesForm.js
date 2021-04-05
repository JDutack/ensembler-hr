import styled from 'styled-components';

export const FormularioEncuesta = styled.div`
  display: flex;
  font-size: 25px;
  font-family: 'Raleway', sans-serif;
  color: #de1d26;
  background-color: white;
  padding: 50px;
  margin: 70px;
  border-radius: 25px;
  box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -webkit-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: 0px -3px 7px 3px rgba(0, 0, 0, 0.88);
  @media (max-width: 790px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

export const Formulario = styled.form`
  height: max-content;
  display: flex;
  width: 400px;
  flex-direction: column;
  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
    width: 230px;
  }
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  align-self: center;
  width: 90%;
  height: 30px;
  border: none;
  border-bottom: 2px solid #de1d26;
  &:focus {
    outline: none;
  }
  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
    flex-direction: column;
    width: 230px;
  }
`;

export const FormTextArea = styled.textarea`
  margin-bottom: 20px;
  align-self: center;
  width: 90%;
  height: 30px;
  border: none;
  border-bottom: 2px solid #de1d26;
  &:focus {
    outline: none;
  }
  @media (max-width: 790px) {
  }
  @media (max-width: 650px) {
    /* flex-direction: column; */
    width: 230px;
  }
`;

export const FormLabel = styled.label``;

export const FormButton = styled.button`
  width: 100%;
  border-radius: 15px;
  padding: 10px 18px;
  font-size: 20px;
  margin-top: 30px;
  background-color: white;
  border: 2px solid #de1d26;
  color: #de1d26;
  transition-duration: 1s;
  cursor: pointer;
  &:hover {
    background-color: #de1d26;
    color: white;
  }
  @media (max-width: 790px) {
    font-size: 17px;
    font-weight: bold;
  }
  @media (max-width: 650px) {
    font-size: 15px;
    /* font-weight: bold; */
  }
`;
