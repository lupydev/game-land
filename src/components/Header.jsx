import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export const Header = () => {

  const {userData, promedio, logOut, invitado} = useContext(GlobalContext)
  const [log, setLog] = useState(false);

  const handleClick = () => {
    setLog(true);
  }

  useEffect(() => {

  }, [userData])

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
          <p>{invitado
              ?
                "Invitado"
              :
                userData.name
              }</p>
        </div>
      </div>
      <div className="headerContainer-player--points">
        <p>{invitado
            ?
              0
            :
              promedio
            }</p>
      </div>
    </div>
  );
};
