package com.nocountry.backend.entity.games;

import com.nocountry.backend.entity.RankingSudoku;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "sudoku")
public class Sudoku {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name="Sudoku";
    @OneToOne
    private RankingSudoku rankingSudoku;

    @ElementCollection(targetClass=String.class)
    private List<String> templates;

}
