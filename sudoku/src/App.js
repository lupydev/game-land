import React from 'react';
import Board from './components/Board'
import NewGame from './components/NewGame';
import {SudokuProvider} from './contexts/SudokuContext';
import Poner from './components/Poner'

function App() {
    
    return (
        <SudokuProvider>
            <div className="app">
                <NewGame />
                <Poner />
                <Board />                
            </div>
        </SudokuProvider>
        
    );
}

export default App;
