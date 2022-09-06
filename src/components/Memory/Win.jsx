import { useContext, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { MemoryContext } from "../../contexts/MemoryContext"

export const Win = () => {
    const {dificultad,timer} = useContext(MemoryContext);
    const {puntajeFinal, loadScore} = useContext(GlobalContext);
    const [usersData, setUsersData] = useState(JSON.parse(sessionStorage.getItem("userData")))
    
    let time = new Date() - timer;
    let puntos = 0
    if(dificultad === 12){
        puntos = puntajeFinal(time,"facil");
    }else if(dificultad === 18){
        puntos = puntajeFinal(time,"medio");
    }else if(dificultad === 32){
        puntos = puntajeFinal(time,"dificil");
    }
    loadScore(usersData.id, usersData.recordMemories, puntos, "memories")
    return(
        <div className='ganaste'>
            <p >GANASTE</p>
            <p className="puntaje">Tu puntaje es de: {puntos}</p>
        </div>
    )
}

export default Win;