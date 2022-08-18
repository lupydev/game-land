import {createContext, useState} from "react";

export const BuscaminasContext = createContext();

export const BuscaminasProvider = ({children}) => {

    const generarMatriz = (r, c, value) =>{
        let matriz = []
        for(let i = 0; i < r; i++){
            let row = []
            for(let j = 0; j < c; j++){
                row.push(value)
            }
            matriz.push(row)
        }

        return matriz
    }

    const [dimensiones, setDimensiones] = useState([0, 0])

    let auxMat = generarMatriz(dimensiones[0], dimensiones[1], "")

    let auxShow = generarMatriz(dimensiones[0], dimensiones[1], false)

    let auxBlock = generarMatriz(dimensiones[0], dimensiones[1], true)
    
    let auxMarks = generarMatriz(dimensiones[0], dimensiones[1], "")

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

    const [dificultad, setDificultad] = useState("")

    const [preDif, setPreDif] = useState("")

    const putBombs = (b) => {
        console.log("put");
        let bombs = 0
        console.log(dimensiones);
        while (bombs < b) {
            let row  = Math.floor(Math.random() * dimensiones[0])
            let col = Math.floor(Math.random() * dimensiones[1])
            console.log(row, col);
            if(auxMat[row][col] === "💣"){
                continue
            } else {
                auxMat[row][col] = "💣"
                bombs++
            }            
        }
        free = (dimensiones[0] * dimensiones[1]) - b
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
        console.log(dimensiones);
        auxMat = generarMatriz(dimensiones[0], dimensiones[1], "")

        auxShow = generarMatriz(dimensiones[0], dimensiones[1], false)
        
        auxBlock = generarMatriz(dimensiones[0], dimensiones[1], false)

        auxMarks = generarMatriz(dimensiones[0], dimensiones[1], "")

        for(let i = 0; i < dimensiones[0]; i++){
            for(let j = 0; j < dimensiones[1]; j++){
                let id = i.toString().padStart(2, "0") + j.toString().padStart(2, "0")
                console.log(id);
                const celda = document.getElementById(id)
                celda.style.color = "black"
                celda.style.backgroundColor = "#E5E5E5"
                celda.style.borderTop = "3px solid #FFFFFF"
                celda.style.borderLeft = "3px solid #FFFFFF"
                celda.style.borderBottom = "3px solid #999999"
                celda.style.borderRight = "3px solid #999999"
            }
        }

        confModo("buscar")
        setTiempo(Date().now)
        setGameOn(true)
        update()
    }

    const createGame = (dim) => {
        auxMat = generarMatriz(dim[0], dim[1], "")
        auxShow = generarMatriz(dim[0], dim[1], false)                
        auxBlock = generarMatriz(dim[0], dim[1], false)
        auxMarks = generarMatriz(dim[0], dim[1], "")

        update()
    }

    const selectDif = (dif) => {
        const choice = document.getElementsByClassName("choice")
        for(let i = 0; i < choice.length; i++){
            choice[i].style.backgroundColor = "#ffe9d4"
            choice[i].style.color = "#f7931a"
        }
        
        console.log(dif);
        const selec = document.getElementById(dif);
        console.log(selec);
        selec.style.backgroundColor = "#f7931a"
        selec.style.color = "#ffe9d4"

        setDificultad(dif)

        switch (dif) {
            case "facil":
                createGame([9,9])
                setDimensiones([9, 9])
                setBombsNum(10)
                break;
            case "medio":
                createGame([15,12])
                setDimensiones([15, 12])
                setBombsNum(30)
                break;
            case "dificil":
                createGame([20,14])
                setDimensiones([20, 14])
                setBombsNum(60)
                break;

            default:
                break;
        }

    }

    const startGame = (dif) => {

        console.log(dif);

        if(dif !== preDif){
            setPreDif(dif)
            newGToggle()
            newGame()
        } else {
            newGToggle()
        }
    }

    const newGToggle = () =>{
        document.getElementById("sudoku-dificult").classList.toggle("mostrar")
    }
    
    const newGame = () => {
        console.log("new");
        resetGame()
        putBombs(bombsNum)

        for(let i = 0; i < dimensiones[0]; i++){
            for(let j = 0; j < dimensiones[1]; j++){
                
                if(auxMat[i][j] === "💣"){
                    continue
                } else {
                    let totalBombs = 0

                    for(let r = Math.max(0, i-1); r < Math.min(dimensiones[0], i+2); r++){
                        for(let c = Math.max(0, j-1); c < Math.min(dimensiones[1], j+2); c++){

                            if(auxMat[r][c] === "💣"){
                                totalBombs++
                            }
                        }
                    }

                    if(totalBombs > 0){
                        auxMat[i][j] = totalBombs 
                    } else {
                        auxMat[i][j] = ""
                    }
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
            document.getElementById(row.toString().padStart(2, "0") +col.toString().padStart(2, "0")).style.backgroundColor = "#DADADA"
            document.getElementById(row.toString().padStart(2, "0") +col.toString().padStart(2, "0")).style.border = "1px solid #C9C9C9"

            if(auxMat[row][col] === "💣"){
                console.log("bomb");
                for(let i = 0; i < dimensiones[0]; i++){
                    for(let j = 0; j < dimensiones[1]; j++){
    
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
                color(row.toString().padStart(2, "0") + col.toString().padStart(2, "0"), auxMat[row][col])
                free--
            }
    
            if(auxMat[row][col] === ""){
                auxShow[row][col] = true
                free--
                color(row.toString().padStart(2, "0") + col.toString().padStart(2, "0"), auxMat[row][col])
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

        if(auxMat[r][c] === "" && auxShow[r][c] === true) {
            console.log("start clear");

            for(let i = Math.max(0, r - 1); i < Math.min(dimensiones[0], r + 2); i++){
                for(let j = Math.max(0, c - 1); j < Math.min(dimensiones[1], c + 2); j++){
                    let id = i.toString().padStart(2, "0") + j.toString().padStart(2, "0")

                    if(auxMat[i][j] !== "💣" && auxMat[i][j] !== "" && auxShow[i][j] === false){
                        auxShow[i][j] = true
                        document.getElementById(id).style.fontWeight = "bold";
                        document.getElementById(id).style.backgroundColor = "#DADADA"
                        document.getElementById(id).style.border = "1px solid #C9C9C9"
                        color(id, auxMat[i][j])
                        free--

                        update()
                    }

                    if(auxMat[i][j] === "" && auxShow[i][j] === false){
                        auxShow[i][j] = true
                        document.getElementById(id).style.color = "lightgrey"
                        document.getElementById(id).style.backgroundColor = "#DADADA"
                        document.getElementById(id).style.border = "1px solid #C9C9C9"
                        free--
                        update()
                        clear(i,j)
                    }
                }
            }
        }
    }

    const color = (id, num) => {

        switch (num) {
            case 1:
                document.getElementById(id).style.color = "blue"
                break;
            case 2:
                document.getElementById(id).style.color = "darkgreen"
                break;
            case 3:
                document.getElementById(id).style.color = "red"
                break;
            case 4:
                document.getElementById(id).style.color = "#191d2b"
                break;
            case 5:
                document.getElementById(id).style.color = "#a1530a"
                break;
            case 6:
                document.getElementById(id).style.color = "#03A300"
                break;
            case 7:
                document.getElementById(id).style.color = "#f7931a"
                break;
            case 8:
                document.getElementById(id).style.color = "#396586"
                break;
            
            default:
                break;
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

    const cerrar = () => {
        document.getElementById("instDiv").classList.add("ocultar");
    }

    const mostrar = () => {
        document.getElementById("instDiv").classList.remove("ocultar");
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
            dificultad,
            resetGame,
            newGame,
            digAt,
            confModo,
            cerrar,
            mostrar,
            newGToggle,
            startGame,
            selectDif
        }}>
            {children}
        </BuscaminasContext.Provider>                                            
    )
}