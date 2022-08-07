import React, { useContext } from 'react';
import Board from './components/Board'
import NewGame from './components/NewGame';
import {SudokuProvider} from './contexts/SudokuContext';
import BotonNum from './components/BotonNum';
import Borrar from './components/Borrar';
import BotonModo from './components/BotonModo';

function App() {
    const numeros = [1,2,3,4,5,6,7,8,9]

    return (
        <SudokuProvider>
            <div className="app">
                <NewGame />
                <Board />  

                <div className='btnNumList'>
                    {numeros.map((n) => {
                        return(
                            <BotonNum
                                n = {n}
                            />
                        )
                    })}
                </div>

                <div className='btnModoList'>
                    <BotonModo
                        modo = "lapiz"
                        img = "pencil.png"
                    />
                    <BotonModo
                        modo = "tinta"
                        img = "pen.png"
                    />
                    <Borrar />
                </div>
                
            </div>
        </SudokuProvider>
        
    );
}

export default App;
