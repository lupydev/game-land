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
              <img
                src="https://i.postimg.cc/Zqccr64p/profile5-min.png"
                alt="LuMi"
              />
            </div>
            <div className="contactContainer-card--contact">
              <p>LuMi</p>
              <div className="contactContainer-card--socials">
                <a href="https://github.com/lumiguz" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/lumidev/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="https://i.postimg.cc/GtNTFm4k/leo.jpg" alt="Leo" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Leonardo</p>
              <div className="contactContainer-card--socials">
                <a href="https://github.com/Leonardo-JK" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-koryl-4a407724/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="https://i.postimg.cc/C5sr2DHC/Pablo.jpg" alt="Pablo" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Pablo</p>
              <div className="contactContainer-card--socials">
                <a
                  href="https://github.com/ThePabloRevengeance"
                  target="_balnk"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pablo-gonzalez-210810210/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="https://i.postimg.cc/vmDNt2gs/bruno.jpg" alt="Bruno" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Bruno</p>
              <div className="contactContainer-card--socials">
                <a href="https://github.com/Bruno-Niello" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-niello-7b09051a4/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2>Backend</h2>
        <div className="backend">
          <div className="contactContainer-card">
            <div className="contactContainer-card--img">
              <img src="https://i.postimg.cc/J0LdKKJ4/Brian.jpg" alt="Brian" />
            </div>
            <div className="contactContainer-card--contact">
              <p>Brian</p>
              <div className="contactContainer-card--socials">
                <a href="https://github.com/Braian-Marquez" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/braian-marquez-8741071b2/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
