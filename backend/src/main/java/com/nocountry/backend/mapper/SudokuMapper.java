package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.SudokuDTO;
import com.nocountry.backend.entity.games.Sudoku;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SudokuMapper {

    public Sudoku sudokuDTO2Entity(SudokuDTO dto) {

        Sudoku entity = new Sudoku();
        entity.setName(dto.getName());
        entity.setRankingSudoku(dto.getRankingSudoku());
        entity.setTemplates(dto.getTemplates());
        return entity;
    }

    public SudokuDTO sudokuDTOEntity2DTO(Sudoku entity) {

        SudokuDTO dto = new SudokuDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setRankingSudoku(entity.getRankingSudoku());
        dto.setTemplates(entity.getTemplates());

        return dto;
    }



    public void sudokuEntityRefreshValues(Sudoku entity, SudokuDTO dto) {

        entity.setName(dto.getName());
        entity.setRankingSudoku(dto.getRankingSudoku());
        entity.setTemplates(dto.getTemplates());
    }
    public List<SudokuDTO> entitySet2DtoList(List<Sudoku> entities) {

        List<SudokuDTO> gamersDTOS = new ArrayList<>();

        for (Sudoku entity : entities) {
            gamersDTOS.add(sudokuDTOEntity2DTO(entity));
        }

        return gamersDTOS;
    }
}
