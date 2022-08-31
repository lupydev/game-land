package com.nocountry.backend.dto;

import com.nocountry.backend.entity.RankingSudoku;
import com.nocountry.backend.entity.RankingWordle;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WordleDTO {
    private Long id;
    private String name;
    private RankingWordle rankingWordle;
}
