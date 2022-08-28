import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { NavBar } from "./NavBar";

export const Header = () => {

  const {userData, promedio} = useContext(GlobalContext)

  

  return (
    <div className="headerContainer">
      <div className="headerContainer-logo">
        <p>GL</p>
        {/* <img src="" alt="" /> */}
      </div>
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
