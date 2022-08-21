import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <div>
      <Header />
      <NavBar />

      <div className="contactContainer">
        <h2>Frontend</h2>
        <div className="frontend">
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="" alt="" />
            </div>
            <div className="contactContainer-card--contact">
              <p>LuMi</p>
              <div className="contactContainer-card--socials">
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="" alt="" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Leonardo</p>
              <div className="contactContainer-card--socials">
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="" alt="" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Pablo</p>
              <div className="contactContainer-card--socials">
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="" alt="" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Bruno</p>
              <div className="contactContainer-card--socials">
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <h2>Backend</h2>
        <div className="backend">
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="" alt="" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Brian</p>
              <div className="contactContainer-card--socials">
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contactContainer-card">
          <div className="contactContainer-card--img">
            <img src="" alt="" />
          </div>
          <div className="contactContainer-card--contact">
            <p>GameLand</p>
            <div className="contactContainer-card--socials">
              <i class="fa-brands fa-square-github"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
