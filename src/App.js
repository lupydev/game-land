import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Wordle } from './components/Wordle';
import './style/App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wordle" element={<Wordle/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
