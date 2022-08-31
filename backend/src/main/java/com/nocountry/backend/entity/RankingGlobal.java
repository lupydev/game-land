package com.nocountry.backend.entity;

import com.nocountry.backend.entity.user.Gamers;
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
@Table(name = "ranking_global")
public class RankingGlobal {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String nameGamers;
    private Long averageGlobal;
    @OneToMany
    private List<Gamers> gamers;
}
