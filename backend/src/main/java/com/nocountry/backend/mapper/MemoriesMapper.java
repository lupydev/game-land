package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.MemoriesDTO;
import com.nocountry.backend.entity.games.Memories;
import org.springframework.stereotype.Component;

@Component
public class MemoriesMapper {

    public Memories memoriesDTO2Entity(MemoriesDTO dto) {

        Memories entity = new Memories();
        entity.setName(dto.getName());
        entity.setRankingMemories(dto.getRankingMemories());
        return entity;
    }

    public MemoriesDTO memoriesDTOEntity2DTO(Memories entity) {

        MemoriesDTO dto = new MemoriesDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setRankingMemories(entity.getRankingMemories());


        return dto;
    }


    public void memoriesEntityRefreshValues(Memories  entity, MemoriesDTO dto) {

        entity.setName(dto.getName());
        entity.setRankingMemories(dto.getRankingMemories());

    }
}
