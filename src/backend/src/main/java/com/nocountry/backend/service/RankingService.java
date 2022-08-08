package com.nocountry.backend.service;


import com.nocountry.backend.dto.RankingDTO;

import java.util.List;

public interface RankingService {
    RankingDTO create(RankingDTO rankingDTO);
    RankingDTO findById(Long id);
    List<RankingDTO> getAllRanking();
    void delete(Long id);
    RankingDTO update(Long id, RankingDTO rankingDTO);
}
