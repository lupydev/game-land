import React from 'react';
import Board from './components/Board'
import NewGame from './components/NewGame';
import {SudokuProvider} from './contexts/SudokuContext';
import BotonNum from './components/BotonNum'
import BotonLapiz from './components/BotonLapiz';
import BotonTinta from './components/BotonTinta';
import Borrar from './components/Borrar';

function App() {
    const numeros = [1,2,3,4,5,6,7,8,9]

    return (
        <SudokuProvider>
            <div className="app">
                <NewGame />
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
                    <BotonLapiz />
                    <BotonTinta />
                    <Borrar />
                </div>
                <Board />                
            </div>
        </SudokuProvider>
        
    );
}

export default App;
