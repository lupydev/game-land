import React from "react";
import {Link} from 'react-router-dom';

export const Registration = () => {
  return (
    <div className="registrationForm">
      <form action="">
        <label htmlFor="">
          <span>Nombre</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Nickname</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Contraseña</span>
          <input type="text" />
        </label>
        <button className="registrationForm--btn btn">Enviar</button>
      </form>
      <Link to="/login">Login</Link>
      <Link to="/home">Invitado</Link>
    </div>
  );
};