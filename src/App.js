import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { About } from './components/About';
import { Ranking } from './components/Ranking';
import { Wordle } from './components/Wordle';
import './style/App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ranking" element={<Ranking/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/wordle" element={<Wordle/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
