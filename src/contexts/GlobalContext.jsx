import {createContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    if(sessionStorage.getItem("userData") === undefined){
        sessionStorage.setItem("userData",{})
    }

    const [logIn, setLogIn] = useState(false)

    const [loadingUser, setLoadingUser] = useState(false)

    const [userData, setUserData] = useState(JSON.parse(sessionStorage.getItem("userData")))

    const [promedio, setPromedio] = useState(0)

    const [invitado, setInvitado] = useState(true)

    const singIn = async (u) => {

        setLoadingUser(true)

        await fetch('https://no-country-app.herokuapp.com/gamers/all', {
                    method: "GET",
                    modo: "cors",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    }
                }
            )
                .then(resp => resp.json()) 
                .then(json => {
                    getUserData(u, json)
                    setInvitado(false)
                })
                .catch(err => console.log(err))
        }

    const singUp = async (u) => {

        await fetch('https://no-country-app.herokuapp.com/auth/singUp', {
            method: "POST",
            body: JSON.stringify(u),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                response.json();
            })                 
            .catch(err => console.log(err))
    }

    const logOut = () => {
        sessionStorage.clear()
        setLogIn(false);
        setLoadingUser(false)
        setInvitado(true)
    }

    const getUserData = (user, users) => {
        for(let i = 0; i < users.length; i++){
            if(user.username === users[i].username && user.password === users[i].password){
                sessionStorage.setItem("userData", JSON.stringify(users[i]))
                setUserData(JSON.parse(sessionStorage.getItem("userData")))
                setLogIn(true)
                setLoadingUser(false)
                return true
            }
        }
        setLoadingUser(false)
        return false
    }

    const puntajeFinal = (t, d) => {
        let puntos = 0
        switch (d) {
            case "facil":
                if((1800 - (t / 1000)) * 1.5 + 500 > 0){
                    puntos = Math.trunc((1800 - (t / 1000)) * 1.5 + 500)
                } else {
                    puntos = 500
                }
                
                break;

            case "medio":
                if((1800 - (t / 1000)) * 2.2 + 2000 > 0){
                    puntos = Math.trunc((1800 - (t / 1000)) * 2.2222 + 2000)
                } else {
                    puntos = 2000
                }
                break;

            case "dificil":
                if((1800 - (t / 1000)) * 3.8 + 3000 > 0){
                    puntos = Math.trunc((1800 - (t / 1000)) * 3.888888 + 3000)
                } else {
                    puntos = 3000
                }
                break;
        
            default:
                break;
        }
        Math.trunc(puntos)
        return puntos
    }

    const loadScore = (userId, userRecords, puntos, game) => {

        let min
        let auxArray = userRecords
        let finalArray = []
        let strArray = ""

        for(let i = 0; i < (5  - auxArray.length); i++){
            auxArray.push(0)
        }

        min = Math.min(...auxArray)
        if(min < puntos){
            for(let i = 0; i < auxArray.length; i++){
                if(auxArray[i] === min){
                    auxArray[i] = puntos
                    finalArray = auxArray
                    break
                }
            }
        }  
        strArray = JSON.stringify(finalArray).slice(1,-1)

        let url = "https://no-country-app.herokuapp.com/gamers/recordEdit/" + userId.toString()
        switch (game) {
            case "sudoku":
                url = url + "?recordSudoku=" + strArray + "&recordWordle=&recordMemories=&recordBuscaMinas="
                break;
            
            case "wordle":
                url = url + "?recordSudoku=&recordWordle=" + strArray + "&recordMemories=&recordBuscaMinas="
                break;

            case "memories":
                url = url + "?recordSudoku=&recordWordle=&recordMemories=" + strArray + "&recordBuscaMinas="
                break;

            case "buscaMinas":
                url = url + "?recordSudoku=&recordWordle=&recordMemories=&recordBuscaMinas=" + strArray
                break;
        
            default:
                break;
        }

        fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())            
            .catch(err => console.log(err))
    }

    const getRanking = (game) => {
        let url = 'https://no-country-app.herokuapp.com/ranking/' + game

        fetch(url, {
                    method: "GET",
                    modo: "cors",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    }
                }
            )
                .then(resp => resp.json()) 
                .then(json => {
                    setPromedio(ranking(json, userData.id, game))
                })
                .catch(err => console.log(err))
    }
    

    const ranking = (list, u, g) => {

        let atributo = ""

        switch (g) {
            case "global":
                atributo = "averageGlobal"
                break;
            
            case "sudoku":
                atributo = "averageSudoku"
                    break;

            case "buscaMinas":
                atributo = "averageBuscaMinas"
                break;

            case "wordle":
                atributo = "averageWordle"
                break;

            case "memories":
                atributo = "averageMemories"
                break;
        
            default:
                break;
        }
        for(let i = 0; i < list.length; i++){
            if(list[i].id === u){
                return list[i][atributo]
            }
        }        
    }

    return (
        <GlobalContext.Provider value={{
            logIn,
            loadingUser,
            userData,
            promedio,
            invitado,
            singIn,
            singUp,
            puntajeFinal,
            loadScore,
            getRanking,
            logOut,
            setUserData
        }}>
            {children}
        </GlobalContext.Provider>                                            
    )
}