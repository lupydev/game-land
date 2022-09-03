import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export const Registration = () => {
  let navigate = useNavigate()
  
  const {singUp} = useContext(GlobalContext)

  const [userData, setUserData] = useState({username: "", name: "", password: ""})

  const submitReg = (e) => {
    e.preventDefault();
    console.log("Enviado: ", userData);
    singUp(userData)
    navigate('/login')


  }
  const changeInput = (e) =>{
        
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    });
  }

  // useEffect(() =>{
  //   if(Response.redirected === false){
  //     navigate('/login')
  //   }
  //   },Response.redirected)

  return (
    <div className="registrationContainer">
      <div className="registration-title">
        <Link to="/">
          <h2>Game land</h2>
          </Link>
      </div>
      <form action="" className="registrationContainer-form" onSubmit={submitReg}>
        <label htmlFor="name" maxLength="12" >
          <span>Nombre de Usuario</span>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nombre"
            maxLength="12"
            onChange={changeInput}
          />
        </label>
        <label htmlFor="email">
          <span>Correo</span>
          <input
            type="email"
            id="email"
            name="username"
            required
            placeholder="gameland@gmail.com"
            onChange={changeInput}
          />
        </label>
        <label htmlFor="password">
          <span>Contraseña</span>
          <input 
            type="password" 
            id="password" 
            name="password" 
            minLength="8"
            required 
            onChange={changeInput}
          />
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
