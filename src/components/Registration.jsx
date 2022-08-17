import React from "react";
import { Link } from "react-router-dom";

export const Registration = () => {
  return (
    <div className="registrationContainer">
      <div className="registration-title">
        <Link to="/">
          <h2>Game land</h2>
          </Link>
      </div>
      <form action="" className="registrationContainer-form">
        <label htmlFor="name" maxlength="12" >
          <span>Nombre de Usuario</span>
          <input
            type="text"
            id="name"
            name="text"
            required
            placeholder="Nombre"
            maxlength="12"
          />
        </label>
        <label htmlFor="email">
          <span>Correo</span>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="gameland@gmail.com"
          />
        </label>
        <label htmlFor="password">
          <span>Contraseña</span>
          <input type="password" id="password" name="password" required />
        </label>
        <button className="registrationForm--btn btn" type="submit">
          Enviar
        </button>
      </form>
      <Link to="/login">Login</Link>
      <Link to="/home">Invitado</Link>
    </div>
  );
};
