import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Ranking } from "./components/Ranking";
import "./style/App.css";
import Sudoku from "./components/Sudoku/Sudoku";
import { HomeWordle } from "./components/Wordle/HomeWordle";
import Buscaminas from "./components/Buscaminas/Buscaminas";
import { GlobalProvider } from "./contexts/GlobalContext";
import Memory from "./components/Memory/Memory";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <div className="gameLand">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/sudoku" element={<Sudoku />} />
              <Route path="/wordle" element={<HomeWordle />} />
              <Route path="/buscaMinas" element={<Buscaminas />} />
              <Route path="/memory" element={<Memory />} />
            </Routes>
          </div>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
