import React from "react";
import { ContextApp } from "../../contexts/WordleContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Wordle } from "./Wordle";
import WordleInstruction from "./WordleInstruction";

export const HomeWordle = () => {
  return (
    <ContextApp>
      <Header />
      <NavBar />
      <div className="wordle-instruction" id="instDiv">
        <WordleInstruction/>
      </div>
      <Wordle />
      <Footer />
    </ContextApp>
  );
};
