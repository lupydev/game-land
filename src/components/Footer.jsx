import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
