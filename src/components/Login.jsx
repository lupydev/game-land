import React from "react";
import {Link} from 'react-router-dom';

export const Login = () => {
  return (
    <div className="loginContainer">
      <form action="">
        <label htmlFor="">
          <span>Usuario</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Contraseña</span>
          <input type="text" />
        </label>
        <button className="login--btn btn">Login</button>
      </form>

      <Link to="/registration">Registrate</Link>
      <Link to="/home">Invitado</Link>
    </div>
  );
};
