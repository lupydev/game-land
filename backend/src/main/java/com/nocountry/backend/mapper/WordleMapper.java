package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.WordleDTO;
import com.nocountry.backend.entity.games.Wordle;
import org.springframework.stereotype.Component;

@Component
public class WordleMapper {
    public Wordle wordleDTO2Entity(WordleDTO dto) {

        Wordle entity = new Wordle();
        entity.setName(dto.getName());
        entity.setRankingWordle(dto.getRankingWordle());
        return entity;
    }

    public WordleDTO wordleDTOEntity2DTO(Wordle entity) {

        WordleDTO dto = new WordleDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setRankingWordle(entity.getRankingWordle());

        return dto;
    }



    public void wordleEntityRefreshValues(Wordle entity, WordleDTO dto) {

        entity.setName(dto.getName());
        entity.setRankingWordle(dto.getRankingWordle());

    }
}
