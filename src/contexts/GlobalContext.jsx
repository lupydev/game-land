import {createContext, useState} from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [user, setUser] = useState("")

    const [logIn, setLogIn] = useState(false)

    const [globalScore, setGlobalScore] = useState(0)

    const [globalRanking, setGlobalRanking] = useState(0)

    const [token, setToken] = useState("")

    const singIn = async (u) => {
        console.log("Recibido: ", JSON.stringify(u));

        await fetch('http://no-country-app.herokuapp.com/auth/singIn', {
            method: "POST",
            body: JSON.stringify(u),
            mode:"no-cors",
            headers: {"Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"        
            }
            })
            .then(resp => resp.json()) 
            .then(json => {
                console.log(json.jwt)
                sessionStorage.setItem("GameLandLogin", json.jwt)
                setLogIn(true)
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
                response.json();
                console.log(response);
            })                 
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    const getUserData = async () => {

        await fetch('https://no-country-app.herokuapp.com/sudoku/1', {
            method: "GET",
            mode: "no-cors",
            headers: {
                Authorization: "Bearer ".concat(sessionStorage.getItem("GameLandLogin")),
                "Content-type": "application/json; charset=UTF-8"}
            })
            .then((resp) => 
                resp.json()
            )
            .then(json => {
                
                console.log(json)
            })
            .catch(err => console.log(err))

    }

    console.log(user);

    return (
        <GlobalContext.Provider value={{
            token,
            logIn,
            singIn,
            singUp,
            getUserData
        }}>
            {children}
        </GlobalContext.Provider>                                            
    )
}