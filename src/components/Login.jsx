import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContainer-form">
        <form action="">
          <label htmlFor="usuario">
            <span>Usuario</span>
            <input type="text" id="usuario" required/>
          </label>
          <label htmlFor="contra">
            <span>Contraseña</span>
            <input type="password" id="contra" required/>
          </label>
          <button className="login--btn btn">Login</button>
        </form>
      </div>
      <div className="links">

      <Link to="/registration">Registrate</Link>
      <Link to="/home">Invitado</Link>
      </div>
    </div>
  );
};
