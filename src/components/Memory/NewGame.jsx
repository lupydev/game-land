import { useContext} from "react";
import { MemoryContext } from "../../contexts/MemoryContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Grid } from "./Grid";

export const NewGame = () => {
    const {dificultad,ready, setupGame,resetGame,setDificultad} = useContext(MemoryContext);
     return(
      <div>
         <Header />
         <NavBar />
         <div className=" memory-buttons" id="memory-dificult">
             <h2>Selecciona la dificultad antes de empezar</h2>
             <button className='button' onClick={() => setDificultad(12)}>Facil</button>
             <button className='button' onClick={() => setDificultad(18)}>Normal</button>
             <button className='button' onClick={() => setDificultad(32)}>Dificil</button>
         </div>
         <button id="play" className='newGame-btn' onClick={() => (dificultad !== 0 && setupGame(dificultad))} >▶</button>
         <button className='newGame-btn' onClick={() => resetGame()}>↻</button>
         {ready &&  <Grid  dificultad={dificultad}/>}   
         <Footer />
      </div>
     )
  }

  export default NewGame;