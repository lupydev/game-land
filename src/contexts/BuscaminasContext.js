import {createContext, useState} from "react";

export const BuscaminasContext = createContext();

export const BuscaminasProvider = ({children}) => {

    let auxMat = [["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],]

    let auxShow = [[false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],]

    let free = 0

    const [freePosition, setFreePosition] = useState(free)

    const [bombsNum, setBombsNum] = useState(0)

    const [mat, setMat] = useState(auxMat)

    const [show, setShow] = useState(auxShow)

    const putBombs = (b) => {
        console.log("put");
        let bombs = 0

        while (bombs < b) {
            let row  = Math.floor(Math.random() * 20)
            let col = Math.floor(Math.random() * 12)

            if(auxMat[row][col] === "*"){
                continue
            } else {
                auxMat[row][col] = "*"
                bombs++
            }            
        }

        console.log(auxMat);
        setFreePosition((20 * 12) - b)
        setBombsNum(b)
        update()
    }

    const update = () => {
        setMat(auxMat)
        setShow(auxShow)
    }

    const resetGame = () => {
        let auxMat = [["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],
                    ["","","","","","","","","","","","",],]

        let auxShow = [[false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,false,false,false,],]

        update()
    }

    const newGame = () => {
        console.log("new");
        resetGame()
        putBombs(20)

        auxMat = mat
        free = freePosition

        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 12; j++){
                
                if(auxMat[i][j] === "*"){
                    continue
                } else {
                    let totalBombs = 0

                    for(let r = Math.max(0, i+1); r < Math.min(20, i+2); r++){
                        for(let c = Math.max(0, j+1); r < Math.min(12, j+2); c++){

                            if(auxMat[r][c] === "*"){
                                totalBombs++
                            }
                        }
                    }

                    auxMat[i][j] = totalBombs
                }
            }
        }
        console.log(auxMat);
        update()
    }

    const digAt = (row, col) => {
        
        if(auxMat[row][col] === "*"){
            for(let i = 0; i < 20; i++){
                for(let j = 0; j < 12; j++){

                    if(auxMat[row][col] === "*"){
                        auxShow[row][col] = true
                    }
                }
            }

            setShow(auxShow)
            return
        }

        if(auxMat[row][col] > 0){
            auxShow[row][col] = true
            free--
        }

        if(auxMat[row][col] === 0){
            auxShow[row][col] = true
            free--
            clear(row, col)
        }

        if(free === 0){
            console.log("ganaste!");
            return true
        }
    }

    const clear = (r, c) => {
        
        if(auxMat[r][c] === 0 && auxShow[r][c] === true) {
            for(let i = Math.max(0, r - 1); i < Math.min(20, r + 2); i++){
                for(let j = Math.max(0, c - 1); i < Math.min(12, c + 2); j++){

                    if(auxMat[r][c] !== "*" && auxMat[r][c] !== 0 && auxShow[r][c] === false){
                        auxShow[r][c] = true
                        free--
                    }

                    if(auxMat[i][j] === 0 && auxShow[i][j] === false){
                        auxShow[i][j] = true
                        free--
                        clear(i,j)
                    }
                }
            }
        }
    }

    return (
        <BuscaminasContext.Provider value={{
            freePosition,
            bombsNum,
            mat,
            show,
            resetGame,
            newGame,
            digAt
        }}>
            {children}
        </BuscaminasContext.Provider>                                            
    )
}