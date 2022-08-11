import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Wordle } from './components/Wordle/Wordle';
import { ContextApp } from './Context/Context';
import './style/App.css';



function App() {
  return (
    <>
    <ContextApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wordle" element={<Wordle/>}/>
        </Routes>
      </BrowserRouter>
    </ContextApp>
    </>
  );
}

export default App;

