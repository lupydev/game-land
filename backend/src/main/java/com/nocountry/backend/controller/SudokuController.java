package com.nocountry.backend.controller;

import com.nocountry.backend.dto.SudokuDTO;
import com.nocountry.backend.service.SudokuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@CrossOrigin(origins = "*", methods= {GET, POST, PUT, DELETE})
@RestController
@RequestMapping("sudoku")
public class SudokuController {
    private SudokuService sudokuService;

    @Autowired
    public SudokuController(SudokuService sudokuService) {
        this.sudokuService = sudokuService;
    }

    @PostMapping
    public ResponseEntity<SudokuDTO> create(@RequestBody SudokuDTO sudokuDTO) {
        SudokuDTO rankingSaved = sudokuService.create(sudokuDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(rankingSaved);
    }
    @GetMapping("/{id}")
    public ResponseEntity<SudokuDTO> rankingFullId(@PathVariable Long id) {
        SudokuDTO rankingSudokuDTO = this.sudokuService.findById(id);
        return ResponseEntity.ok().body(rankingSudokuDTO);
    }
    @GetMapping("/all")
    public ResponseEntity<List<SudokuDTO>> getAll() {
        List<SudokuDTO> users = sudokuService.getAllSudoku();
        return ResponseEntity.ok().body(users);
    }

}
