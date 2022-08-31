package com.nocountry.backend.service;


import com.nocountry.backend.dto.SudokuDTO;


import java.util.List;

public interface SudokuService {
    SudokuDTO create(SudokuDTO sudokuDTO);
    SudokuDTO findById(Long id);
    List<SudokuDTO> getAllSudoku();
    void delete(Long id);
    SudokuDTO update(Long id, SudokuDTO sudokuDTO);
}
