import {createContext, useContext, useState} from "react";
import { GlobalContext } from "./GlobalContext";

export const SudokuContext = createContext();

export const SudokuProvider = ({children}) => {

    const {puntajeFinal, loadScore} = useContext(GlobalContext)

    const [usersData, setUsersData] = useState(JSON.parse(sessionStorage.getItem("userData")))

    console.log(JSON.parse(sessionStorage.getItem("userData")));

    const [dataGeted, setDataGeted] = useState(false)

    const [baseBackup, setBaseBackup] = useState([[5,6,3,7,8,1,4,9,2],
                                                    [8,9,2,3,5,4,6,1,7],
                                                    [4,7,1,6,2,9,5,8,3],
                                                    [9,4,7,2,6,3,1,5,8],
                                                    [2,5,6,1,4,8,3,7,9],
                                                    [3,1,8,5,9,7,2,6,4],
                                                    [6,8,9,4,1,2,7,3,5],
                                                    [7,2,5,9,3,6,8,4,1],
                                                    [1,3,4,8,7,5,9,2,6]])
    
    const [templates, setTemplates] = useState([])

    const [base, setBase] = useState([])
        
    const getData = async () => {
        
        await fetch('https://no-country-app.herokuapp.com/sudoku/1', {
                method: "GET",
                modo: "cors",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                }
            }
        )
            .then((resp) => resp.json())
            .then(json => {
                console.log(json);
                if((json === false || json === undefined) && templates.length === 0){
                    setTemplates([])
                } else {
                    setTemplates(json.templates)
                    setDataGeted(true)
                }
            })
            .catch(err => console.log(err))           
    }    

    if(!dataGeted){
        getData()
    }
    
    let auxMat = [["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""]]
    
    let auxPosNum = [[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]]

    let auxVerMat = [[false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,]]

    let blockMat = [[false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,]]
    
    let time = 0

    let auxBase = []   

    const [selected, setSelected] = useState("")

    const [posiblesNumbers, setPosNum] = useState(auxPosNum)
    
    const [matriz, setMatriz] = useState(auxMat)

    const [verifyValues, setVerVal] = useState(auxVerMat) 
    
    const [blockValues, setBlocVal] = useState(blockMat)

    const [modo, setModo] = useState("tinta")

    const [winner, setWinner] = useState(false)

    const [tiempo, setTiempo] = useState(new Date())

    const [dificultad, setDificultad] = useState("");
    
    const [preDif, setPreDif] = useState("")

    const [puntaje, setPuntaje] = useState(0)

    const setearBase = (str) => {
        let mb = []
        let index = 0

        for(let i = 0; i < 9; i++){
            let row = []
            for(let j = 0; j < 9; j++){
                row.push(parseInt(str[index]))
                index++
            }
            
            mb.push(row)
        }

        return mb
    }

    const resetGame = () => {

        document.querySelector(".reset").disabled = false

        auxMat = [["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""],
                    ["","","","","","","","",""]]

        auxVerMat = [[false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,]]
        
        auxPosNum = [[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],
                    [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]]

        blockMat = [[false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,]]

        if(winner === false){
            for(let i = 0; i < 9; i++){ 
                for(let j = 0; j < 9; j++){
                    let celda = document.getElementById(i.toString() + j.toString())       
                    celda.style.border = "1px solid #faf8f7"
                    celda.style.backgroundColor = "#d5edff"
                    celda.style.fontWeight = ""
                }
            }
        }  

        time = 0

        setWinner(false)
        update()
    }

    const removeValue = (arr, value) => {
        let i = arr.indexOf(value);
    
        if (i !== -1) {
            arr.splice(i, 1);
        }
    }

    const update = () => {
        setMatriz([...auxMat])
        setPosNum([...auxPosNum])
        setVerVal([...auxVerMat])
        setBlocVal([...blockMat])
    }

    const selectDif = (dif) => {
        const choice = document.getElementsByClassName("choice")
        for(let i = 0; i < choice.length; i++){
            choice[i].style.backgroundColor = "#ffe9d4"
            choice[i].style.color = "#f7931a"
        }
        
        const selec = document.getElementById(dif);
        selec.style.backgroundColor = "#f7931a"
        selec.style.color = "#ffe9d4"

        setDificultad(dif)
    }

    const newGToggle = () =>{
        document.getElementById("sudoku-dificult").classList.toggle("mostrar")
    }

    const startGame = (dif) => {
        if(dif !== preDif){
            setPreDif(dif)
            newGame()
        } else {
            newGToggle()
        }

    }

    const newGame = () => {
        console.log(base, matriz);        
        resetGame()
        let n;
        
        console.log(base, templates);
        if(templates.length === 0){
            auxBase = baseBackup
            setBase(baseBackup)
        } else {
            console.log();
            let m = setearBase(templates[Math.floor(Math.random() * templates.length)])
            auxBase = m
            setBase(auxBase)
        }

        console.log(auxBase);

        switch (dificultad) {
            case "facil":
                n = 40
                break;
            
            case "medio":
                n = 30
                break;

            case "dificil":
                n = 20
                break;
        
            default:
                break;
        }
        
        for(let i = 0; i < n; i++){
            let r = Math.floor(Math.random() * 9)
            let c = Math.floor(Math.random() * 9)
            
            console.log(r,c,matriz, base);
            if(auxMat[r][c] === ""){
                ponerNum(r.toString() + c.toString(), auxBase[r][c], true)
                document.getElementById(r.toString() + c.toString()).style.fontWeight = "bolder"
            } else {
                i--
            }
        }

        setTiempo(new Date())

        confModo("tinta")
        update()
        document.getElementById("sudoku-dificult").classList.remove("mostrar")
    }

    const ponerNum = (id, num, carga, m) => {

        if(id === ""){
            console.log("No se ha selecionado ninguna celda");
        } else{
            if(!carga){
                auxMat = matriz
                blockMat = blockValues
                auxPosNum = posiblesNumbers
                auxVerMat = verifyValues
            }            
    
            let r = Math.floor(id / 10)
            let c = id % 10

            if(blockMat[r][c] === true){
                console.log("No se puede modificar esa celda");
            }else{

                if(m === "lapiz"){
                    if(!auxPosNum[r][c].includes(num)){
                        auxPosNum[r][c][num-1] = num;
                    }
                    
                } else {
                    auxMat[r][c] = num
                    auxPosNum[r][c] = []
                    auxVerMat[r][c] = true
                    
                    if(carga === true){
                        blockMat[r][c] = true
                    }
            
                    for(let i = 0; i < 9; i++){
                        if(i === c){
                            continue
                        }
            
                        if(auxPosNum[r][i].includes(num)){
                            removeValue(auxPosNum[r][i], num)
                        }
                    }
            
                    for(let i = 0; i < 9; i++){
                        if(i === r){
                            continue
                        }
            
                        if(auxPosNum[i][c].includes(num)){
                            removeValue(auxPosNum[i][c], num)
                        }
                    }
            
                    let hs = Math.ceil((r + 1) / 3) - 1 
                    let vs = Math.ceil((c + 1) / 3) - 1 
            
                    for(let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            if((hs * 3) + i === r && (vs * 3) + j === c){
                                continue
                            }
            
                            if(auxPosNum[(hs * 3) + i][(vs * 3) + j].includes(num)){
                                removeValue(auxPosNum[(hs * 3) + i][(vs * 3) + j], num)
                            }  
                        }
                    }   
                } 
            }
        }

        if(!carga){
            update()
        }

        check()
    }

    const check = () =>{

        console.log(matriz, base);
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(verifyValues[i][j] === false){
                    return
                }
            }
        }
        
        console.log("checked");
        console.log(matriz, base);
        if(JSON.stringify(matriz) === JSON.stringify(base)){
            console.log("Felicitaciones");
            setWinner(true)
            time = new Date() - tiempo
            let puntos = puntajeFinal(time, dificultad)
            setPuntaje(puntos)
            setTiempo(time)
            loadScore(usersData.id, usersData.recordSudoku, puntos, "sudoku")
            document.querySelector(".reset").disabled = "true"
            
        } else {
            console.log("El tablero esta mal.");
        }
    }

    const formatTime = (t) => {
        let timeArray = ["","","",""]

        timeArray[3] = (t % 1000).toString().padStart(3, "0")
        console.log(time)

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

    const confModo = (m) => {
        if(m === "tinta"){
            document.getElementById("tinta").style.border = "3px solid #27ae60"
            document.getElementById("lapiz").style.border = "1px solid #D9D9D9"
            setModo("tinta")
        }

        if(m === "lapiz"){
            document.getElementById("lapiz").style.border = "3px solid #27ae60"
            document.getElementById("tinta").style.border = "1px solid #D9D9D9"
            setModo("lapiz")
        }
    }
        
    const [idPrev, setIdPrev] = useState("")
    
    const resaltar = (id) => {

        let r = Math.floor(id / 10)
        let c = id % 10

        if(id !== idPrev){
            if(idPrev !== ""){
                let y = Math.floor(idPrev / 10)
                let x = idPrev % 10
                document.getElementById(idPrev).style.border = "1px solid #faf8f7"

                for(let i = 0; i < 9; i++){
                    document.getElementById(y.toString() + i.toString()).style.backgroundColor = "#d5edff"
                    document.getElementById(i.toString() + x.toString()).style.backgroundColor = "#d5edff"
                }

                let Ix = Math.ceil((y + 1) / 3) - 1              
                let Jx = Math.ceil((x + 1) / 3) - 1

                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        document.getElementById(((Ix * 3) + i).toString() + ((Jx * 3) + j).toString()).style.backgroundColor = "#d5edff"
                    }
                }
            }
        
            document.getElementById(id).style.border = "2px solid #FCE5AA"

            for(let i = 0; i < 9; i++){
                document.getElementById(r.toString() + i.toString()).style.backgroundColor = "#b7d3ea"
                document.getElementById(i.toString() + c.toString()).style.backgroundColor = "#b7d3ea"
            }

            let I = Math.ceil((r + 1) / 3) - 1              
            let J = Math.ceil((c + 1) / 3) - 1

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    document.getElementById(((I * 3) + i).toString() + ((J * 3) + j).toString()).style.backgroundColor = "#b7d3ea"
                }
            }

        }
        setIdPrev(id)
        setSelected(id)
    }

    const borrar = (id) => {
        let r = Math.floor(id / 10)
        let c = id % 10

        auxMat = matriz
        blockMat = blockValues
        auxPosNum = posiblesNumbers
        auxVerMat = verifyValues
        
        if(modo === "tinta"){
            if(blockValues[r][c] === false){
                auxMat[r][c] = ""
                auxVerMat[r][c] = false
            }
        }

        if(modo === "lapiz"){
            if(blockValues[r][c] === false){
                auxPosNum[r][c] = ["","","","","","","","",""]
            }
        }        
        
        update()
    }

    const cerrar = () => {
        document.getElementById("instDiv").classList.add("ocultar");
    }

    const mostrar = () => {
        document.getElementById("instDiv").classList.remove("ocultar");
    }

    return (
        <SudokuContext.Provider value={{
            posiblesNumbers,
            matriz, 
            verifyValues,
            blockValues,
            selected,
            modo,
            winner,
            tiempo,
            dificultad,
            puntaje,
            newGame,
            resaltar,
            ponerNum,
            confModo,
            borrar,
            cerrar,
            mostrar,
            resetGame,
            selectDif,
            newGToggle,
            startGame,
            formatTime
        }}>
            {children}
        </SudokuContext.Provider>                                            
    )
}