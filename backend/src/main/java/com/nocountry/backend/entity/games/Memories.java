package com.nocountry.backend.entity.games;

import com.nocountry.backend.entity.RankingMemories;
import com.nocountry.backend.entity.RankingSudoku;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "memories")
public class Memories {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name="Memories";

    //5 mejores puntajes ordenar por mayor a menor
    @OneToOne
    private RankingMemories rankingMemories;


}
