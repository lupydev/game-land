package com.nocountry.backend.dto;

import com.nocountry.backend.entity.RankingMemories;
import com.nocountry.backend.entity.RankingSudoku;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemoriesDTO {
    private Long id;
    private String name;
    private RankingMemories rankingMemories;
}
