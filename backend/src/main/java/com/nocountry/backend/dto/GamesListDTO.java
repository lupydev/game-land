package com.nocountry.backend.dto;


import com.nocountry.backend.entity.games.Memories;
import com.nocountry.backend.entity.games.Sudoku;
import com.nocountry.backend.entity.games.Wordle;
import com.nocountry.backend.entity.user.Gamers;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class GamesListDTO {
    private Long id;
    private Memories memories;
    private Sudoku sudoku;
    private Wordle wordle;
    private Gamers gamers;


}
