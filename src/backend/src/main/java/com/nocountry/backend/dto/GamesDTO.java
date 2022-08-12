package com.nocountry.backend.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GamesDTO {
    private Long id;
    private String name;
    private String image;
    private Integer rate;
    private List<RankingDTO> rankingList;


}
