import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { TitleBtn } from '../styles/componentStyles/VideoSectionStyle';

const Formulario = styled.form`
  margin: 60px 0;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 47px 0;
`;

const FormLabel = styled.label`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid black;
  &::-webkit-input-placeholder {
    color: #564849;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
  &::-moz-placeholder {
    /* Firefox 18- */
    color: #564849;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #564849;
  }

  &::-ms-input-placeholder {
    color: #564849;
  }
`;

const FormTextarea = styled.textarea`
  color: var(--lettersColor);
  border: none;
  background-color: #fef6f6;

  &::-webkit-input-placeholder {
    color: #d6b6b8;
  }
  &::-moz-placeholder {
    /* Firefox 18- */
    color: #d6b6b8;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #d6b6b8;
  }

  &::-ms-input-placeholder {
    color: #d6b6b8;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
`;

const InputCheckbox = styled.input`
  font-size: 30px;
`;

const FormBtn = styled(TitleBtn)`
  width: 100%;
  margin: 50px 0;
`;

const ErrorP = styled.p`
  background-color: rgba(222, 29, 38, 0.5);
  font-size: 24px;
  padding: 10px;
  text-align: center;
`;
const SuccesP = styled(ErrorP)`
  margin-top: 20px;
  background-color: rgba(29, 222, 100, 0.5);
`;

const Form = () => {
  const [user, actualizarUser] = useState({
    user_name: '',
    user_email: '',
    user_msj: '',
    user_check: '',
  });
  const [error, actualizarError] = useState(false);
  const [succes, actualizarSucces] = useState(false);

  //funcion de actualizacion de estado en un input
  const actualizarState = (e) => {
    actualizarUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //extraigo valores
  const { user_name, user_email, user_msj, user_check } = user;

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'user_service',
        'templating',
        e.target,
        'user_fh40hl0XdM2yeULc9GeEr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submitForm = (e) => {
    e.preventDefault();

    //Validar
    if (
      user_name.trim() === '' ||
      user_email.trim() === '' ||
      user_msj.trim() === ''
    ) {
      actualizarError(true);
      console.log(user_check.on);

      setTimeout(() => {
        //Eliminar msj previo
        actualizarError(false);
      }, 2000);
      return;
    }
    console.log(`paso`);

    //Asignar ID
    user.id = uuidv4();

    actualizarSucces(true);
    sendEmail();
    setTimeout(() => {
      //Eliminar msj previo
      actualizarSucces(false);
    }, 4000);
    actualizarUser({
      user_name: '',
      user_email: '',
      user_msj: '',
      user_check: '',
    });
  };
  return (
    <Formulario className="contact-form" onSubmit={submitForm}>
      {error ? <ErrorP>TODOS LOS CAMPOS SON OBLIGATORIOS</ErrorP> : null}

      <NameDiv>
        <FormLabel htmlFor="name">NOMBRE Y APELLIDO</FormLabel>
        <FormInput
          name="user_name"
          id="name"
          placeholder="Ej: Sabrina Marconi"
          onChange={actualizarState}
          value={user_name}
        />
      </NameDiv>

      <NameDiv>
        <FormLabel htmlFor="email">CORREO ELECTRONICO</FormLabel>
        <FormInput
          name="user_email"
          id="email"
          type="email"
          placeholder="Ej: sabrina@ejemplo.com"
          onChange={actualizarState}
          value={user_email}
        />
      </NameDiv>
      <NameDiv>
        <FormLabel htmlFor="msj">MENSAJE</FormLabel>
        <FormTextarea
          name="user_msj"
          id="msj"
          rows="7"
          placeholder="Escribe aqui tu mensaje"
          onChange={actualizarState}
          value={user_msj}
        />
      </NameDiv>
      <CheckboxDiv>
        <InputCheckbox
          name="user_check"
          id="user_check"
          type="checkbox"
          required
        />

        <p>
          Estoy de acuerdo con nuestras
          <Link to="/"> politicas de privacidad</Link> .
        </p>
      </CheckboxDiv>

      {succes ? <SuccesP>GRACIAS POR TU CONSULTA</SuccesP> : null}
      <FormBtn type="submit">ENVIAR MENSAJE</FormBtn>
    </Formulario>
  );
};

export default Form;
