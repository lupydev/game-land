package com.nocountry.backend.service.impl;


import com.nocountry.backend.dto.SudokuDTO;
import com.nocountry.backend.entity.games.Sudoku;
import com.nocountry.backend.exception.ParamNotFoundException;
import com.nocountry.backend.mapper.SudokuMapper;
import com.nocountry.backend.repository.SudokuRepository;
import com.nocountry.backend.service.SudokuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SudokuServiceImpl implements SudokuService {

    private SudokuRepository sudokuRepository;
    private SudokuMapper sudokuMapper;

    @Autowired
    public SudokuServiceImpl(SudokuRepository sudokuRepository,@Lazy SudokuMapper sudokuMapper) {
        this.sudokuRepository = sudokuRepository;
        this.sudokuMapper = sudokuMapper;
    }

    @Override
    public SudokuDTO create(SudokuDTO sudokuDTO) {
        Sudoku entity = sudokuMapper.sudokuDTO2Entity(sudokuDTO);
        Sudoku entitySaved = sudokuRepository.save(entity);

        return sudokuMapper.sudokuDTOEntity2DTO(entitySaved);
    }

    @Override
    public SudokuDTO findById(Long id) {
        Optional<Sudoku> entity = sudokuRepository.findById(id);

        if (entity.isEmpty()) {
            throw new ParamNotFoundException("Error: Invalid user id.");
        }

        return sudokuMapper.sudokuDTOEntity2DTO(entity.get());
    }

    @Override
    public List<SudokuDTO> getAllSudoku() {
        List<Sudoku> entities = sudokuRepository.findAll();

        return this.sudokuMapper.entitySet2DtoList(entities);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public SudokuDTO update(Long id, SudokuDTO sudokuDTO) {
        return null;
    }
}
