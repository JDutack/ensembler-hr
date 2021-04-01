import React from 'react';
import styled from 'styled-components';

const Formulario = styled.form`
  height: max-content;
  display: flex;
  width: 400px;
  flex-direction: column;
`;

const FormInput = styled.input`
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
  }
`;

const FormTextArea = styled.textarea`
  margin-bottom: 20px;
  align-self: center;
  width: 90%;
  height: 30px;
  border: none;
  border-bottom: 2px solid #de1d26;
  &:focus {
    outline: none;
  }
`;

const FormLabel = styled.label``;

const FormButton = styled.button`
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
  }
  @media (max-width: 650px) {
    font-size: 15px;
    font-weight: bold;
  }
`;

const Form = () => {
  return (
    <Formulario>
      <FormLabel htmlFor="nombre">Nombre</FormLabel>

      <FormInput type="text" id="nombre" />

      <FormLabel htmlFor="apellido">Apellido</FormLabel>

      <FormInput type="text" id="apellido" />

      <FormLabel htmlFor="mail">Correo Electrónico</FormLabel>

      <FormInput type="text" id="mail" />

      <FormLabel htmlFor="consulta">Consulta</FormLabel>

      <FormTextArea type="text" id="consulta" />

      <FormButton>ENVIAR</FormButton>
    </Formulario>
  );
};

export default Form;
