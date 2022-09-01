import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export const Header = () => {

  const {userData, promedio, logOut} = useContext(GlobalContext)
  const [log, setLog] = useState(false);

  const handleClick = () => {
    setLog(true);
  }

  return (
    <div className="headerContainer">
      {!log && 
      <div className="headerContainer-logo">
        <p onClick={handleClick} className="logo">GL</p>
      </div>}
      {log && 
      <div className="headerContainer-logo">
        <Link to="/login" className="logout" onClick={logOut()}>Cerrar sesion</Link> 
      </div>
      }
      <div className="headerContainer-player">
        <div className="headerContainer-player--name">
          <p>{userData.name}</p>
        </div>
      </div>
      <div className="headerContainer-player--points">
        <p>{promedio}</p>
      </div>
    </div>
  );
};
