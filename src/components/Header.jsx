import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export const Header = () => {

  const {userData, promedio, invitado} = useContext(GlobalContext)

  return (
    <div className="headerContainer">
      <div className="headerContainer-logo">
        <p>GL</p>
        {/* <img src="" alt="" /> */}
      </div>
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
