import React, { useContext } from 'react';
import Main from './components/Main';
import NewGame from './components/NewGame';
import {SudokuProvider} from './contexts/SudokuContext';
import Instruction from "./components/Instruction";
import Help from './components/Help';

function App() {
    
    return (
        <SudokuProvider>
            <div className="app">
                <div className='headSudoku'>
                    <NewGame />
                    <Help />
                </div>
                
                <div className="instructionDiv" id="instDiv">
                        <Instruction />            
                </div> 
                <Main />              
            </div>
        </SudokuProvider>
        
    );
}

export default App;
