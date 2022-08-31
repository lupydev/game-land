package com.nocountry.backend.dto;

import com.nocountry.backend.entity.RankingBuscaMinas;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BuscaMinasDTO {
    private Long id;
    private String name;
    private RankingBuscaMinas rankingBuscaMinas;

}
