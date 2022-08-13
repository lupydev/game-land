import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LandingPage} from "./components/LandingPage";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Ranking } from "./components/Ranking";
import { WordleInstructions } from "./components/WordleInstructions";
import { MemoryInstructions } from "./components/MemoryInstructions";
import "./style/App.css";
import Sudoku from "./components/Sudoku/Sudoku";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <>
        <BrowserRouter>
            <div className="gameLand">
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/wordleInstructions" element={<WordleInstructions />} />
                    <Route path="/memoryInstructions" element={<MemoryInstructions />} />
                    <Route path="/game/sudoku" element={<Sudoku />} />
                </Routes>
            </div>
        </BrowserRouter>
        </>
    );
}

export default App;
