package com.nocountry.backend.entity;

import com.nocountry.backend.entity.user.Gamers;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "ranking_wordle")
public class RankingWordle {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @OneToMany
    private List<Gamers> gamers;
}
