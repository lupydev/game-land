import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="aboutContainer">
        <h2>Game land</h2>
        <p>
          La idea de crear un repositorio de mini juegos proviene de la necesidad de poder entrenar nuestro cerebro para despertar todo su potencial. Diferentes video juegos de memoria y concentraci&oacute;n nos ayudan a mejorar en nuestras habilidades blandas como <strong>soluci&oacute;n de problema, pensamiento critico y capacidad de adaptaci&oacute;n.</strong>
          <br />
          <br />
          <strong>Game Land</strong> quiere transformarse en la herrameinta por excelencia de mejoramiento cognitivo del cerebro humano a nivel mundial.
        </p>
      </div>
      <Footer />
    </div>
  );
};
