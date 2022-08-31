import React, { useContext, useEffect } from "react";
import { RankingContext } from "../contexts/RankingContext";
import Tabla from "./Tabla";

function RankingContainer() {
    
    const {sudoku, global, wordle, buscaMinas, memories, dataGeted} = useContext(RankingContext)

    useEffect(() => {

    })

    return (
        <div>
            {dataGeted
            ?
                <div className="rankingContainer">
                    <Tabla
                        tabla = {"global"}
                        titulo = {"Ranking Global"}
                        data = {global}
                        atributo = {"averageGlobal"}
                    />

                    <div className="rankingContainer-games">
                        <Tabla
                            tabla = {"wordle"}
                            titulo = {"Wordle"}
                            data = {wordle}
                            atributo = {"averageWordle"}
                        />
                        <Tabla
                            tabla = {"sudoku"}
                            titulo = {"Sudoku"}
                            data = {sudoku}
                            atributo = {"averageSudoku"}
                        />
                        <Tabla
                            tabla = {"buscaMinas"}
                            titulo = {"Busca Minas"}
                            data = {buscaMinas}
                            atributo = {"averageBuscaMinas"}
                        />
                        <Tabla
                            tabla = {"memories"}
                            titulo = {"Memories"}
                            data = {memories}
                            atributo = {"averageMemories"}
                        />
                    </div>
                </div>
            :
            null
            }
        </div>
    )
}

export default RankingContainer