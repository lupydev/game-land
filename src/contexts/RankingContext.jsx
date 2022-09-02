import {createContext, useState} from "react";

export const RankingContext = createContext();

export const RankingProvider = ({children}) => {

    const [rankingData, setRankingData] = useState({})

    const [sudoku, setSudoku] = useState()
    const [global, setGlobal] = useState()
    const [wordle, setWordle] = useState()
    const [buscaMinas, setBuscaMinas] = useState()
    const [memories, setMemories] = useState()
    const [puestos, setPuestos] = useState([])
    const [dataGeted, setDataGeted] = useState(false)

    const getData = async () => {

        let urlBase = 'https://no-country-app.herokuapp.com/ranking/'
        let rankings = ["global", "sudoku", "wordle", "buscaMinas", "memories"]

        for(let i = 0; i < 5; i++){

            let url = urlBase + rankings[i]

            console.log(url);

            await fetch(url, {
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
                    sessionStorage.setItem(rankings[i], JSON.stringify(json))
                })
                .catch(err => console.log(err))           
        }

        setSudoku(JSON.parse(sessionStorage.getItem("sudoku")))
        setGlobal(JSON.parse(sessionStorage.getItem("global")))
        setWordle(JSON.parse(sessionStorage.getItem("wordle")))
        setBuscaMinas(JSON.parse(sessionStorage.getItem("buscaMinas")))
        setMemories(JSON.parse(sessionStorage.getItem("memories")))
        setDataGeted(true)
        ordenar()
    }
    
    const ordenar = () => {
        
        let sudo = JSON.parse(sessionStorage.getItem("sudoku"))
        sudo.sort((a,b) => {return b.averageSudoku - a.averageSudoku})
        setSudoku(sudo)

        let glob = JSON.parse(sessionStorage.getItem("global"))
        glob.sort((a,b) =>{return b.averageGlobal - a.averageGlobal})
        setGlobal(glob)

        let word = JSON.parse(sessionStorage.getItem("wordle"))
        word.sort((a,b) =>{return b.averageWordle - a.averageWordle})
        setWordle(word)

        let busc = JSON.parse(sessionStorage.getItem("buscaMinas"))
        busc.sort((a,b) =>{return b.averageBuscaMinas - a.averageBuscaMinas})
        setBuscaMinas(busc)

        let memo = JSON.parse(sessionStorage.getItem("memories"))
        memo.sort((a,b) =>{return b.averageMemories - a.averageMemories})
        setMemories(memo)

        setearPuestos()
    }

    if(!dataGeted){
        getData()
    }

    const setearPuestos = () => {
        let cont = 1
        let p = []

        for(let i = 0; i < JSON.parse(sessionStorage.getItem("global")).length; i++){
            if(cont === 11){
                break
            }
            p.push(cont)
            cont++
        }

        console.log(p);
        setPuestos(p)
    }
    

    return (
        <RankingContext.Provider value={{
            sudoku,
            global,
            wordle,
            buscaMinas,
            memories,
            dataGeted,
            puestos
        }}>
            {children}
        </RankingContext.Provider>                                            
    )
}