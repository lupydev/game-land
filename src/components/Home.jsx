import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export const Home = () => {

  const {getRanking, promedio} = useContext(GlobalContext)
  
  getRanking("global")

  useEffect (() =>{
    console.log(promedio);
  }, [promedio])
  
  return (
    <div>
      <Header />
      <NavBar />
      <div className="homeContainer">
        <div className="homeContainer-card">
          <Link to="/wordle">
            <h2>Wordle</h2>
            <img src="https://i.postimg.cc/Y0ND6Dkt/WORDLE.png" alt="wordle" />
          </Link>
          {/* <div className="homeContainer-card--ranking">⭐⭐⭐⭐⭐</div> */}
        </div>
        <div className="homeContainer-card">
          <Link to="/sudoku">
            <h2>Sudoku</h2>
            <img src="https://i.postimg.cc/s2LZm548/SUDOKU.jpg" alt="sudoku" />
          </Link>
          {/* <div className="homeContainer-card--ranking">⭐⭐⭐⭐</div> */}
        </div>
        <div className="homeContainer-card">
          <Link to="/buscaMinas">
            <h2>Busca Minas</h2>
            <img src="https://i.postimg.cc/wxN2ZjPZ/buscaminas.jpg" alt="busca minas" />
          </Link>
          {/* <div className="homeContainer-card--ranking">⭐⭐⭐⭐</div> */}
        </div>
        <div className="homeContainer-card">
          <Link to="/memory">
            <h2>Memory</h2>
            <img src="https://i.postimg.cc/nh7KCRKz/memory.png" alt="memory game" />
          </Link>
          {/* <div className="homeContainer-card--ranking">⭐⭐⭐</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
