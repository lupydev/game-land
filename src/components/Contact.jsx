import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contactContainer">
        <div className="contactContainer-card">
          <div className="contactContainer-card--img">
            <img src="" alt="" />
          </div>
          <div className="contactContainer-card--contact">

          <p>GameLand</p>
          <div className="contactContainer-card--socials"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
