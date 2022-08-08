package com.nocountry.backend.entity;

import com.nocountry.backend.entity.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;


import javax.persistence.*;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Where(clause = "deleted=false")
@SQLDelete(sql = "UPDATE games SET deleted = true WHERE id = ?")
@Table(name = "games")
public class Games {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    private String image;
    private Integer rate;
    @OneToOne
    private Ranking ranking;
    @Column(name = "deleted", nullable = false)
    private boolean deleted = Boolean.FALSE;
}
