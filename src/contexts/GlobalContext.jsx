import {createContext, useState} from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [logIn, setLogIn] = useState(false)

    const [loadingUser, setLoadingUser] = useState(false)

    const [userData, setUserData] = useState(JSON.parse(sessionStorage.getItem("userData")))

    const [promedio, setPromedio] = useState(sessionStorage.getItem("header").promedio)

    const singIn = async (u) => {
        console.log("Recibido: ", JSON.stringify(u));

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
                    console.log(json)
                    getUserData(u, json)
                })
                .catch(err => console.log(err))
        }

    const singUp = async (u) => {
        
        console.log("Recibido: ", JSON.stringify(u),);

        await fetch('https://no-country-app.herokuapp.com/auth/singUp', {
            method: "POST",
            body: JSON.stringify(u),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                console.log(response);
            })                 
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    const getUserData = (user, users) => {
        for(let i = 0; i < users.length; i++){
            if(user.username === users[i].username && user.password === users[i].password){
                sessionStorage.setItem("userData", JSON.stringify(users[i]))
                setUserData(JSON.parse(sessionStorage.getItem("userData")))
                console.log(JSON.parse(sessionStorage.getItem("userData")));
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
        console.log(t);
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

        console.log(puntos);
        Math.trunc(puntos)
        console.log(puntos);
        return puntos
    }

    const loadScore = (userId, userRecords, puntos, game) => {

        console.log(userId, userRecords, puntos, game);
        let min
        let auxArray = userRecords
        let finalArray = []
        let strArray = ""
        
        console.log(auxArray);

        for(let i = 0; i < (5  - auxArray.length); i++){
            auxArray.push(0)
            console.log(auxArray);
        }

        console.log(auxArray);
        
        min = Math.min(...auxArray)
        console.log(min);

        if(min < puntos){
            for(let i = 0; i < auxArray.length; i++){
                if(auxArray[i] === min){
                    auxArray[i] = puntos
                    finalArray = auxArray
                    break
                }
            }
        }
        
        console.log(finalArray);
        strArray = JSON.stringify(finalArray).slice(1,-1)
        console.log(strArray);

        let url = "https://no-country-app.herokuapp.com/gamers/recordEdit/" + userId.toString()
        console.log(url);
        console.log(strArray);
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

        console.log(url);
        fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())            
            .then(json => console.log(json))
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
                    console.log(json)
                    setPromedio(ranking(json, userData.id, game))
                    sessionStorage.setItem("header", {user: userData.name, promedio: ranking(json, userData.id, game)})
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
                console.log(list[i]);
                console.log(atributo);
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
            singIn,
            singUp,
            puntajeFinal,
            loadScore,
            getRanking
        }}>
            {children}
        </GlobalContext.Provider>                                            
    )
}