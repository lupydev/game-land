package com.nocountry.backend.entity;

import com.nocountry.backend.entity.games.Memories;
import com.nocountry.backend.entity.games.Sudoku;
import com.nocountry.backend.entity.games.Wordle;
import com.nocountry.backend.entity.user.Gamers;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "games")
public class GamesList implements Serializable {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @OneToOne
    private Memories memories;
    @OneToOne
    private Sudoku sudoku;
    @OneToOne
    private Wordle wordle;


    @OneToOne
    private Gamers gamers;



}
