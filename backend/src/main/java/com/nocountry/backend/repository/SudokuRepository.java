package com.nocountry.backend.repository;

import com.nocountry.backend.entity.games.Sudoku;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SudokuRepository extends JpaRepository<Sudoku,Long> {

}
