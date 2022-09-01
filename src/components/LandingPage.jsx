import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export const LandingPage = () => {

  const {setUserData} = useContext(GlobalContext)

  setUserData({})
  
  return (
    <div className="landingPage">
      <div className="landingPage-title">
        <h1>
          Game
          <br />
          Land
        </h1>
      </div>
      <div className="landingPage-login">
        <Link to="/login" className="landingPage--btn btn">
          Login
        </Link>
        <Link to="/registration" className="registration">
          Registrate
        </Link>
        <Link to="/home">Invitado</Link>
      </div>
    </div>
  );
};
