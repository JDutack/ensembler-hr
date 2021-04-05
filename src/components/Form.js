import React, { useState } from 'react';
import {
  FormularioEncuesta,
  Formulario,
  FormInput,
  FormTextArea,
  FormLabel,
  FormButton,
} from '../styles/StylesForm';

const Form = () => {
  //state de formulario
  const [user, actualizarUser] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    consulta: '',
  });

  //estado de error
  const [error, actualizarError] = useState(false);

  //funcion de actualizacion de estado en un input
  const actualizarState = (e) => {
    actualizarUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //extraigo valores
  const { nombre, apellido, correo, consulta } = user;

  //accionar el btn

  const submitUser = (e) => {
    e.preventDefault();

    //Validar
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      correo.trim() === '' ||
      consulta.trim() === ''
    ) {
      actualizarError(true);
      return;
    }
    //Eliminar msj previo
    actualizarError(false);

    //Asignar ID
    // cita.id = uuidv4();

    //creo cita
    // crearCita(cita);

    //reinicio el form
    actualizarUser({
      nombre: '',
      apellido: '',
      correo: '',
      consulta: '',
    });
  };

  console.log(user);
  return (
    <FormularioEncuesta>
      {error ? <p>Todos los campos son obligatorios</p> : null}
      <Formulario onSubmit={submitUser}>
        <FormLabel htmlFor="nombre">Nombre</FormLabel>

        <FormInput type="text" id="nombre" onChange={actualizarState} />

        <FormLabel htmlFor="apellido">Apellido</FormLabel>

        <FormInput type="text" id="apellido" onChange={actualizarState} />

        <FormLabel htmlFor="mail">Correo Electrónico</FormLabel>

        <FormInput type="text" id="mail" onChange={actualizarState} />

        <FormLabel htmlFor="consulta">Consulta</FormLabel>

        <FormTextArea type="text" id="consulta" onChange={actualizarState} />

        <FormButton type="submit">ENVIAR</FormButton>
      </Formulario>
    </FormularioEncuesta>
  );
};

export default Form;
