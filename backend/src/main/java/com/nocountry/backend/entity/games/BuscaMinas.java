package com.nocountry.backend.entity.games;

import com.nocountry.backend.entity.RankingBuscaMinas;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "buscaMinas")
public class BuscaMinas {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name="Busca Minas";


    @OneToOne
    private RankingBuscaMinas rankingBuscaMinas;
}
