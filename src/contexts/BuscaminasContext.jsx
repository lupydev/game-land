import {createContext, useContext, useState} from "react";
import { GlobalContext } from "./GlobalContext";

export const BuscaminasContext = createContext();

export const BuscaminasProvider = ({children}) => {

    const {puntajeFinal, loadScore} = useContext(GlobalContext)

    const [usersData, setUsersData] = useState(JSON.parse(sessionStorage.getItem("userData")))

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

    const [dimensiones, setDimensiones] = useState([9, 9])

    let auxMat = generarMatriz(dimensiones[0], dimensiones[1], "")

    let auxShow = generarMatriz(dimensiones[0], dimensiones[1], false)

    let auxBlock = generarMatriz(dimensiones[0], dimensiones[1], true)
    
    let auxMarks = generarMatriz(dimensiones[0], dimensiones[1], "")

    let free = 0
    let time = 0

    const [freePosition, setFreePosition] = useState(free)

    const [bombsNum, setBombsNum] = useState(0)

    const [mat, setMat] = useState(auxMat)

    const [show, setShow] = useState(auxShow)

    const [block, setBlock] = useState(auxBlock)

    const [marks, setMarks] = useState(auxMarks)

    const [modo, setModo] = useState("")

    const [tiempo, setTiempo] = useState(new Date())

    const [gameOn, setGameOn] = useState(false)

    const [dificultad, setDificultad] = useState("")

    const [preDif, setPreDif] = useState("")

    const [winner, setWinner] = useState(false)

    const [puntaje, setPuntaje] = useState(0)

    const putBombs = (b) => {
        console.log("put");
        let bombs = 0
        while (bombs < b) {
            let row  = Math.floor(Math.random() * dimensiones[0])
            let col = Math.floor(Math.random() * dimensiones[1])
            if(auxMat[row][col] === "💣"){
                continue
            } else {
                auxMat[row][col] = "💣"
                bombs++
            }            
        }
        free = (dimensiones[0] * dimensiones[1]) - b
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
        setTiempo(new Date())
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
                createGame([12,13])
                setDimensiones([12, 13])
                setBombsNum(30)
                break;
            case "dificil":
                createGame([15,13])
                setDimensiones([15, 13])
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
        document.getElementById("buscaminas-dificult").classList.toggle("mostrar")
        setGameOn(true)
    }
    
    const newGame = () => {
        console.log("new");
        setWinner(false)
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

        let id = row.toString().padStart(2, "0") + col.toString().padStart(2, "0")
        
        if(modo === "buscar" && auxBlock[row][col] === false){
            document.getElementById(id).style.backgroundColor = "#DADADA"
            document.getElementById(id).style.border = "1px solid #C9C9C9"
            auxBlock[row][col] = true

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
    
            if(auxMat[row][col] > 0 && auxShow[row][col] === false){
                auxShow[row][col] = true                
                document.getElementById(id).style.fontWeight = "bold";
                color(id, auxMat[row][col])
                free--
            }
    
            if(auxMat[row][col] === "" && auxShow[row][col] === false){
                auxShow[row][col] = true
                free--                
                clear(row, col)
            }
    
            if(free === 0){
                console.log("ganaste!");
                setWinner(true)
                setGameOn(false)
                for(let i = 0; i < dimensiones[0]; i++){
                    for(let j = 0; j < dimensiones[1]; j++){
    
                        auxBlock[i][j] = true
    
                        if(auxMat[i][j] === "💣"){
                            auxMarks[i][j] = "🚩"
                        }
                    }
                }
                console.log(time);
                time = new Date() - tiempo
                console.log(time);
                setTiempo(time)
                let puntos = puntajeFinal(time, dificultad)
                setPuntaje(puntos)
                loadScore(usersData.id, usersData.recordBuscaMinas, puntos, "buscaMinas")
                confModo("")
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

        update()
    }

    const clear = (r, c) => {

        if(auxMat[r][c] === "" && auxShow[r][c] === true) {

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

        switch (m) {
            case "buscar":
                console.log("buscar");
                document.getElementById("buscar").style.border = "3px solid #27ae60";
                document.getElementById("bandera").style.border = "1px solid #D9D9D9";
                document.getElementById("duda").style.border = "1px solid #D9D9D9";
                break;

            case "bandera":
                console.log("bandera");
                document.getElementById("buscar").style.border = "1px solid #D9D9D9";
                document.getElementById("bandera").style.border = "3px solid #27ae60";
                document.getElementById("duda").style.border = "1px solid #D9D9D9";
                break;

            case "duda":
                console.log("duda");
                document.getElementById("buscar").style.border = "1px solid #D9D9D9";
                document.getElementById("bandera").style.border = "1px solid #D9D9D9";
                document.getElementById("duda").style.border = "3px solid #27ae60";
                break;
        
            default:
                console.log("defaulModo");
                document.getElementById("buscar").style.border = "1px solid #D9D9D9";
                document.getElementById("bandera").style.border = "1px solid #D9D9D9";
                document.getElementById("duda").style.border = "1px solid #D9D9D9";
                break;
        }

        setModo(m)
    }

    const cerrar = () => {
        document.getElementById("instDiv").classList.add("ocultar");
    }

    const mostrar = () => {
        document.getElementById("instDiv").classList.remove("ocultar");
    }

    const formatTime = (t) => {

        console.log(t)
        let timeArray = ["","","",""]

        timeArray[3] = (t % 1000).toString().padStart(3, "0")
        

        let s = t/1000

        if(s < 60){
            timeArray[2] = Math.floor(s).toString().padStart(2,"0")
        } else {
            timeArray[2] = Math.floor(s % 60).toString().padStart(2,"0")
        }

        let m = s / 60

        if(m < 60){
            timeArray[1] = Math.floor(m).toString().padStart(2,"0")
        } else {
            timeArray[1] = Math.floor(m % 60).toString().padStart(2,"0")
        }

        let h = m / 60
        timeArray[0] = Math.floor(h / 60).toString().padStart(2,"0")

        return timeArray
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
            winner,
            tiempo,
            puntaje,
            resetGame,
            newGame,
            digAt,
            confModo,
            cerrar,
            mostrar,
            newGToggle,
            startGame,
            selectDif,
            formatTime
        }}>
            {children}
        </BuscaminasContext.Provider>                                            
    )
}