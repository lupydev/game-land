import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Ranking = () => {
  return (
    <div>
      <Header />
      <div className="rankingContainer">
        <div className="rankingContainer-number">
          <p>#</p>
        </div>
        <div className="rankingContainer-name">
          <p>Nickname</p>
        </div>
        <div className="rankingContainer-points">
          <p>Puntos</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
