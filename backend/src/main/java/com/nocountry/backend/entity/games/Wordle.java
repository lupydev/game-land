package com.nocountry.backend.entity.games;

import com.nocountry.backend.entity.RankingSudoku;
import com.nocountry.backend.entity.RankingWordle;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "wordle")
public class Wordle {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name="Wordle";
    @OneToOne
    private RankingWordle rankingWordle;
}
