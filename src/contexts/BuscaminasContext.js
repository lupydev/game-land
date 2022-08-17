import {createContext, useState} from "react";

export const BuscaminasContext = createContext();

export const BuscaminasProvider = ({children}) => {

    let auxMat = [["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""]]

    let auxShow = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false]]

    let auxBlock = [[true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                    [true,true,true,true,true,true,true,true,true,true,true,true,true,true]]
    
    let auxMarks = [["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""],
                    ["","","","","","","","","","","","","",""]]

    let free = 0

    const [freePosition, setFreePosition] = useState(free)

    const [bombsNum, setBombsNum] = useState(0)

    const [mat, setMat] = useState(auxMat)

    const [show, setShow] = useState(auxShow)

    const [block, setBlock] = useState(auxBlock)

    const [marks, setMarks] = useState(auxMarks)

    const [modo, setModo] = useState("")

    const [tiempo, setTiempo] = useState(0)

    const [gameOn, setGameOn] = useState(false)

    const putBombs = (b) => {
        console.log("put");
        let bombs = 0

        while (bombs < b) {
            let row  = Math.floor(Math.random() * 20)
            let col = Math.floor(Math.random() * 12)

            if(auxMat[row][col] === "💣"){
                continue
            } else {
                auxMat[row][col] = "💣"
                bombs++
            }            
        }
        free = (20 * 14) - b
        console.log(auxMat);
        update()
        setBombsNum(b)
    }

    const update = () => {
        setMat([...auxMat])
        setShow([...auxShow])
        setBlock([...auxBlock])
        setFreePosition(free)
        setMarks([...auxMarks])

        document.getElementById("buscar").disabled = false;
        document.getElementById("bandera").disabled = false;
        document.getElementById("duda").disabled = false;
    }

    const resetGame = () => {
        auxMat = [["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""]]

        auxShow = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false]]
        
        auxBlock = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false]]

        auxMarks = [["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""],
                        ["","","","","","","","","","","","","",""]]

        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 14; j++){
                document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.color = "black"
                document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.backgroundColor = "#f7931a"
            }
        }

        confModo("buscar")
        setTiempo(Date().now)
        setGameOn(true)
        update()
    }

    const newGame = () => {
        console.log("new");
        resetGame()
        putBombs(20)

        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 14; j++){
                
                if(auxMat[i][j] === "💣"){
                    continue
                } else {
                    let totalBombs = 0

                    for(let r = Math.max(0, i-1); r < Math.min(20, i+2); r++){
                        for(let c = Math.max(0, j-1); c < Math.min(14, j+2); c++){

                            if(auxMat[r][c] === "💣"){
                                totalBombs++
                            }
                        }
                    }

                    auxMat[i][j] = totalBombs                    
                }
            }
        }
        console.log(free);
        update()
    }

    const digAt = (row, col) => {
        auxMat = mat
        auxShow = show
        auxMarks = marks
        auxBlock = block
        free = freePosition

        console.log(row, col);
        
        
        if(modo === "buscar" && auxBlock[row][col] === false){
            document.getElementById(row.toString().padStart(2, "0") +col.toString().padStart(2, "0")).style.backgroundColor = "#ffe9d4"

            if(auxMat[row][col] === "💣"){
                console.log("bomb");
                for(let i = 0; i < 20; i++){
                    for(let j = 0; j < 14; j++){
    
                        auxBlock[i][j] = true
    
                        if(auxMat[i][j] === "💣"){
                            auxShow[i][j] = true
                        }
                    }
                }
                console.log(auxBlock);
                console.log(auxShow);
                update()
            }
    
            if(auxMat[row][col] > 0){
                auxShow[row][col] = true
                free--
            }
    
            if(auxMat[row][col] === 0){
                auxShow[row][col] = true
                free--
                document.getElementById(row.toString().padStart(2, "0") + col.toString().padStart(2, "0")).style.color = "lightgrey"
                clear(row, col)
            }
    
            if(free === 0){
                console.log("ganaste!");
                update()
            }
        }
        
        if(modo === "duda"){
            if(auxMarks[row][col] === "❔"){
                auxMarks[row][col] = ""
            } else {
                auxMarks[row][col] = "❔"
                auxBlock[row][col] = false
            }
            update()     
        }

        if(modo === "bandera"){
            if(auxMarks[row][col] === "🚩"){
                auxMarks[row][col] = ""
                auxBlock[row][col] = false
            } else {
                auxMarks[row][col] = "🚩"
                auxBlock[row][col] = true
            }
            update() 
        }

        console.log(free);
        update()
    }

    const clear = (r, c) => {
        console.log("clear");

        if(auxMat[r][c] === 0 && auxShow[r][c] === true) {
            console.log("start clear");

            for(let i = Math.max(0, r - 1); i < Math.min(20, r + 2); i++){
                for(let j = Math.max(0, c - 1); j < Math.min(14, c + 2); j++){

                    if(auxMat[i][j] !== "💣" && auxMat[i][j] !== 0 && auxShow[i][j] === false){
                        auxShow[i][j] = true
                        document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.fontWeight = "bold";
                        document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.backgroundColor = "#ffe9d4"
                        free--
                        update()
                    }

                    if(auxMat[i][j] === 0 && auxShow[i][j] === false){
                        auxShow[i][j] = true
                        document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.color = "lightgrey"
                        document.getElementById(i.toString().padStart(2, "0") + j.toString().padStart(2, "0")).style.backgroundColor = "#ffe9d4"
                        free--
                        update()
                        clear(i,j)
                    }
                }
            }
        }
    }

    const confModo = (m) => {
        if(m === "buscar"){
            console.log("buscar");
            document.getElementById("buscar").style.border = "3px solid #27ae60";
            document.getElementById("bandera").style.border = "1px solid #D9D9D9";
            document.getElementById("duda").style.border = "1px solid #D9D9D9";
        }

        if(m === "bandera"){
            console.log("bandera");
            document.getElementById("buscar").style.border = "1px solid #D9D9D9";
            document.getElementById("bandera").style.border = "3px solid #27ae60";
            document.getElementById("duda").style.border = "1px solid #D9D9D9";
        }

        if(m === "duda"){
            console.log("duda");
            document.getElementById("buscar").style.border = "1px solid #D9D9D9";
            document.getElementById("bandera").style.border = "1px solid #D9D9D9";
            document.getElementById("duda").style.border = "3px solid #27ae60";
        }

        setModo(m)
    }

    return (
        <BuscaminasContext.Provider value={{
            freePosition,
            bombsNum,
            mat,
            show,
            block,
            marks,
            gameOn,
            resetGame,
            newGame,
            digAt,
            confModo
        }}>
            {children}
        </BuscaminasContext.Provider>                                            
    )
}