package com.nocountry.backend.service;


import com.nocountry.backend.dto.*;

import java.util.List;


public interface GamersService {
    GamersDTO create(GamersDTO gamersDTO);
    GamersDTO findById(Long id);

    List<GamersDTO> getAllUser();
    GamersDTO getUserAll(GamersDTO gamers);

    List<Long> listRecordMemories(Long id);
    List<Long> listRecordSudoku(Long id);
    List<Long> listRecordWordle(Long id);
    List<Long> listRecordBuscaMinas(Long id);

    RankingMemoriesDTO averageMemories(Long id);
    RankingSudokuDTO averageSudoku(Long id);
    RankingWordleDTO averageWordle(Long id);
    RankingBuscaMinasDTO averageBuscaMinas(Long id);

    List<RankingSudokuDTO> averageSudokuALL();
    List<RankingWordleDTO> averageWordleALL();
    List<RankingMemoriesDTO> averageMemoriesALL();
    List<RankingBuscaMinasDTO> averageBuscaMinasALL();

    GamersDTO averageAll(Long id);

    List<RankingGlobalDTO> averageGlobal();

    void delete(Long id);

    GamersDTO update(Long id,List<Long> recordSudoku,List<Long> recordMemories,List<Long> recordWordle,List<Long> recordBuscaMinas);
}
