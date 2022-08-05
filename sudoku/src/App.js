import React, {useContext} from 'react';
import Board from './components/Board'
import NewGame from './components/NewGame';
import { SudokuContext, SudokuProvider } from './contexts/SudokuContext';

function App() {
    
    return (
        <SudokuProvider>
            <div className="app">
                <Board />
                <NewGame />
            </div>
        </SudokuProvider>
        
    );
}

export default App;
