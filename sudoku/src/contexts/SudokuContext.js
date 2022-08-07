import {createContext, useState} from "react";

export const SudokuContext = createContext();

export const SudokuProvider = ({children}) => {

    // La base se traera aleatoriamente entre varias plantillas del servidor.
    let base = [[5,6,3,7,8,1,4,9,2],
                [8,9,2,3,5,4,6,1,7],
                [4,7,1,6,2,9,5,8,3],
                [9,4,7,2,6,3,1,5,8],
                [2,5,6,1,4,8,3,7,9],
                [3,1,8,5,9,7,2,6,4],
                [6,8,9,4,1,2,7,3,5],
                [7,2,5,9,3,6,8,4,1],
                [1,3,4,8,7,5,9,2,6]]

    
    let auxMat = [["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""],
                ["","","","","","","","",""]]
    
    let auxPosNum = [[[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]]]

    // let auxPosNum = [[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
    //                 [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]           
    
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
    
    const [selected, setSelected] = useState("")

    const [posiblesNumbers, setPosNum] = useState(auxPosNum)
    
    const [matriz, setMatriz] = useState(auxMat)

    const [verifyValues, setVerVal] = useState(auxVerMat) 
    
    const [blockValues, setBlocVal] = useState(blockMat)

    const [modo, setModo] = useState("Tinta")

    const resetGame = () => {
        console.log("reset");
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
        
        auxPosNum = [[[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]],
                    [[],[],[],[],[],[],[],[],[]]]

        // auxPosNum = [[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
        //             [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]


        blockMat = [[false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,],
                    [false,false,false,false,false,false,false,false,false,]]

        for(let i = 0; i < 9; i++){ 
            for(let j = 0; j < 9; j++){
                let celda = document.getElementById(i.toString() + j.toString())       
                celda.style.border = "1px solid grey"
                celda.style.backgroundColor = "white"
                celda.style.fontWeight = ""
            }
        }
    }

    const removeValue = (arr, value) => {
        let i = arr.indexOf(value);
    
        if (i !== -1) {
            arr.splice(i, 1);
        }
    }

    const update = () => {
        console.log(auxMat);
        console.log(auxPosNum);
        console.log(auxVerMat);

        setMatriz([...auxMat])
        setPosNum([...auxPosNum])
        setVerVal([...auxVerMat])
        setBlocVal([...blockMat])
    }

    const newGame = () => {        
        resetGame()
    
        for(let i = 0; i < 30; i++){
            let r = Math.floor(Math.random() * 9)
            let c = Math.floor(Math.random() * 9)
                    
            if(auxMat[r][c] === ""){
                ponerNum(r.toString() + c.toString(), base[r][c], true)
                document.getElementById(r.toString() + c.toString()).style.fontWeight = "bolder"
            } else {
                i--
            }
        }
        console.log(auxMat);
        console.log(auxPosNum);
        console.log(auxVerMat);
        
        update()
    }

    const ponerNum = (id, num, carga, modo) => {

        if(id === ""){
            console.log("No se ha selecionado ninguna celda");
        } else{
            if(!carga){
                auxMat = matriz
                blockMat = blockValues
                auxPosNum = posiblesNumbers
                auxVerMat = verifyValues
            }            

            console.log("id: " + id + " - num: " + num);
    
            let r = Math.floor(id / 10)
            let c = id % 10
            console.log(blockMat[r][c]);

            if(blockMat[r][c] === true){
                console.log("No se puede modificar esa celda");
            }else{

                if(modo === "lapiz"){
                    if(!auxPosNum[r][c].includes(num)){
                        auxPosNum[r][c].push(num)
                    }
                    
                } else {
                    auxMat[r][c] = num
                    auxPosNum[r][c] = []
                    // auxPosNum[r][c].push(num)
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
            
                        // if(auxPosNum[r][i].length === 0){
                        //     auxMat[r][c] = ""
                        //     auxPosNum[r][i].push(num)
                        // }
                    }
            
                    for(let i = 0; i < 9; i++){
                        if(i === r){
                            continue
                        }
            
                        if(auxPosNum[i][c].includes(num)){
                            removeValue(auxPosNum[i][c], num)
                        }
            
                        // if(auxPosNum[i][c].length === 0){
                        //     auxMat[r][c] = ""
                        //     auxPosNum[i][c].push(num)
                        // }
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
                            
                            // if(auxPosNum[(hs * 3) + i][(vs * 3) + j].length === 0){
                            //     auxMat[r][c] = ""
                            //     auxPosNum[(hs * 3) + i][(vs * 3) + j].push(num)
                            // }
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
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(verifyValues[i][j] === false){
                    return
                }
            }
        }

        console.log("checked");
        if(JSON.stringify(matriz) === JSON.stringify(base)){
            console.log("Felicitaciones");
        } else {
            console.log("El tablero esta mal.");
        }
    }

    const confModo = (modo) => {
        if(modo === "tinta"){
            document.getElementById("tinta").style.border = "2px solid blue"
            document.getElementById("lapiz").style.border = "1px solid black"
            setModo("tinta")
        }

        if(modo === "lapiz"){
            document.getElementById("lapiz").style.border = "2px solid blue"
            document.getElementById("tinta").style.border = "1px solid black"
            setModo("lapiz")
        }
    }

    // let sol = 0
    // const solucion = () => {
    //     sol++
    //     if(sol === 10){
    //         return
    //     }
    //     console.log("solucion");
    //     let cambios = false

    //     console.log(auxMat);
    //     console.log(auxPosNum);
    //     console.log(auxVerMat);
        

    //     for(let i = 0; i < 9; i++){
    //         let numNoValidoRow = []
    //         let numNoValidoCol = []

    //         for(let j = 0; j < 9; j++){
    //             if(auxVerMat[i][j] === true){
    //                 continue
    //             }

    //             if(auxPosNum[i][j].length === 1 && auxVerMat[i][j] === false){
    //                 console.log(auxPosNum[i][j]);
    //                 ponerNum(i.toString() +  j.toString(), auxPosNum[i][j][0])
    //                 cambios = true
    //             }

    //             for(let n = 0; n < auxPosNum[i][j].length; n++){
    //                 if(numNoValidoRow.includes(auxPosNum[i][j][n])){
    //                     continue
    //                 }
                
    //                 for(let k = 0; k < 9; k++){
    //                     if(auxVerMat[i][k] === true || k === j){
    //                         continue
    //                     }

    //                     if(auxPosNum[i][k].includes(auxPosNum[i][j][n])){
    //                         numNoValidoRow.push(auxPosNum[i][j][n])
    //                         break
    //                     }
    //                 }

    //                 if(!numNoValidoRow.includes(auxPosNum[i][j][n])){
    //                     console.log(auxPosNum[i][j]);
    //                     ponerNum(i.toString() +  j.toString(), auxPosNum[i][j][n])
    //                     cambios = true
    //                 }
    //             }

    //             for(let n = 0; n < auxPosNum[i][j].length; n++){
    //                 if(numNoValidoCol.includes(auxPosNum[j][i][n])){
    //                     continue
    //                 }
                
    //                 for(let k = 0; k < 9; k++){
    //                     if(auxVerMat[k][i] === true || k === j){
    //                         continue
    //                     }

    //                     if(auxPosNum[k][i].includes(auxPosNum[j][i][n])){
    //                         numNoValidoCol.push(auxPosNum[j][i][n])
    //                         break
    //                     }
    //                 }

    //                 if(!numNoValidoCol.includes(auxPosNum[j][i][n])){
    //                     console.log(auxPosNum[i][j]);
    //                     ponerNum(j.toString() +  i.toString(), auxPosNum[j][i][n])
    //                     cambios = true
    //                 }
    //             }                
    //         }
    //     }
        
    //     for(let i = 0; i < 3; i++){
    //         for(let j = 0; j < 3; j++){
    //             let numNoValidSqr = []

    //             for(let k = 0; k < 9; k++){
    //                 let I = (Math.ceil((k + 1) / 3) - 1) + i*3 
    //                 let J = (Math.ceil((k + 1)) - 1) % 3 + j*3

    //                 if(auxVerMat[I][J] === true){
    //                     continue
    //                 }

    //                 for(let n = 0; n < auxPosNum[I][J].length; n++){
    //                     if(numNoValidSqr.includes(auxPosNum[I][J][n])){
    //                         break
    //                     }

    //                     for(let l = 0; l < 9; l++){
    //                         let y = (Math.ceil((l + 1) / 3) - 1) + i*3
    //                         let x = (Math.ceil((l + 1)) - 1) % 3 + j*3

    //                         if(y === I && x === J){
    //                             continue
    //                         }

    //                         if(auxPosNum[y][x].includes(auxPosNum[I][J][n])){
    //                             numNoValidSqr.push(auxPosNum[I][J][n])
    //                             break
    //                         }
    //                     }

    //                     if(!numNoValidSqr.includes(auxPosNum[I][J][n])){
    //                         ponerNum(I.toString() + J.toString(), auxPosNum[I][J][n], false)
    //                         cambios = true
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     if(cambios === true){
    //         console.log("cambios");
    //         solucion()
    //     } else {
    //         console.log("sin cambios");
    //         let resuelto = true

    //         for(let i = 0; i < 9; i++){
    //             for(let j = 0; j < 9; j++){
    //                 if(auxPosNum[i][j] === false){
    //                     console.log("Sin solucion");
    //                     resuelto = false
    //                     sol = 0
    //                 }
    //             }
    //         }

    //         if(resuelto){
    //             sol = 0
    //         }
    //     }
    // }

    // const check = (preMatriz, r, c) => {
    //     for(let i = 0; i < 9; i++){
    //         if(i === c){
    //             continue
    //         }else{
    //             if(preMatriz[r][i] === preMatriz[r][c]){
    //                 return false
    //             }
    //         }
    //     }

    //     for (let i = 0; i < 9; i++) {
    //         if(i === r){
    //             continue
    //         }else{
    //             if(preMatriz[i][c] === preMatriz[r][c]){
    //                 return false
    //             }
    //         }            
    //     }

    //     const x = Math.ceil((r + 1) / 3) - 1              
    //     const y = Math.ceil((c + 1) / 3) - 1

    //     for(let i = 0; i < 3; i++){
    //         for(let j = 0; j < 3; j++){
    //             if((x * 3) + i === r && (y * 3) + j === c){
    //                 continue
    //             }

    //             if(preMatriz[(x * 3) + i][(y * 3) + j] === preMatriz[r][c]){
    //                 return false
    //             }
    //         }
    //     }
        
    //     return true
    // }  
    
    const [idPrev, setIdPrev] = useState("")
    
    const resaltar = (id) => {

        let r = Math.floor(id / 10)
        let c = id % 10

        if(id !== idPrev){
            if(idPrev !== ""){
                let y = Math.floor(idPrev / 10)
                let x = idPrev % 10
                document.getElementById(idPrev).style.border = "1px solid grey"

                for(let i = 0; i < 9; i++){
                    document.getElementById(y.toString() + i.toString()).style.backgroundColor = "white"
                    document.getElementById(i.toString() + x.toString()).style.backgroundColor = "white"
                }

                let Ix = Math.ceil((y + 1) / 3) - 1              
                let Jx = Math.ceil((x + 1) / 3) - 1

                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        document.getElementById(((Ix * 3) + i).toString() + ((Jx * 3) + j).toString()).style.backgroundColor = "white"
                    }
                }
            }
        
            document.getElementById(id).style.border = "2px solid gold"

            for(let i = 0; i < 9; i++){
                document.getElementById(r.toString() + i.toString()).style.backgroundColor = "lightyellow"
                document.getElementById(i.toString() + c.toString()).style.backgroundColor = "lightyellow"
            }

            let I = Math.ceil((r + 1) / 3) - 1              
            let J = Math.ceil((c + 1) / 3) - 1

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    document.getElementById(((I * 3) + i).toString() + ((J * 3) + j).toString()).style.backgroundColor = "lightyellow"
                }
            }

        }
        setIdPrev(id)
        setSelected(id)
        console.log(idPrev);
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
            }
        }

        if(modo === "lapiz"){
            if(blockValues[r][c] === false){
                auxPosNum[r][c] = []
            }
        }        
        
        update()
    }

    return (
        <SudokuContext.Provider value={{
            posiblesNumbers,
            matriz, 
            verifyValues,
            blockValues,
            selected,
            modo,
            newGame,
            resaltar,
            ponerNum,
            confModo,
            borrar
        }}>
            {children}
        </SudokuContext.Provider>                                            
    )
}