package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.BuscaMinasDTO;
import com.nocountry.backend.entity.games.BuscaMinas;
import org.springframework.stereotype.Component;

@Component
public class BuscaMinasMapper {
    public BuscaMinas buscaMinasDTO2Entity(BuscaMinasDTO dto) {

        BuscaMinas entity = new BuscaMinas();
        entity.setName(dto.getName());
        entity.setRankingBuscaMinas(dto.getRankingBuscaMinas());
        return entity;
    }

    public BuscaMinasDTO buscaMinasDTOEntity2DTO(BuscaMinas entity) {

        BuscaMinasDTO dto = new BuscaMinasDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setRankingBuscaMinas(entity.getRankingBuscaMinas());


        return dto;
    }


    public void buscaMinasEntityRefreshValues(BuscaMinas  entity, BuscaMinasDTO dto) {

        entity.setName(dto.getName());
        entity.setRankingBuscaMinas(dto.getRankingBuscaMinas());

    }
}
