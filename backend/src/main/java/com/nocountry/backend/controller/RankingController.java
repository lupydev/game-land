package com.nocountry.backend.controller;

import com.nocountry.backend.dto.*;
import com.nocountry.backend.service.GamersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@CrossOrigin(origins = "*", methods= {GET, POST, PUT, DELETE})
@RestController
@RequestMapping("/ranking")
public class RankingController {

    private GamersService gamersService;

    @Autowired
    public RankingController( GamersService gamersService) {
        this.gamersService = gamersService;
    }

    //Ranking de cada jugo

    @GetMapping("/sudoku")
    public ResponseEntity<List<RankingSudokuDTO> > getAllSudokuRanking() {
        List<RankingSudokuDTO>  users = gamersService.averageSudokuALL();
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/memories")
    public ResponseEntity<List<RankingMemoriesDTO> > getAllMemoriesRanking() {
        List<RankingMemoriesDTO>  users = gamersService.averageMemoriesALL();
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/wordle")
    public ResponseEntity<List<RankingWordleDTO> > getAllWordleRanking() {
        List<RankingWordleDTO>  users = gamersService.averageWordleALL();
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/buscaMinas")
    public ResponseEntity<List<RankingBuscaMinasDTO> > getAllBuscaMinasRanking() {
        List<RankingBuscaMinasDTO>  users = gamersService.averageBuscaMinasALL();
        return ResponseEntity.ok().body(users);
    }
    //ranking Global
    @GetMapping("/global")
    public ResponseEntity<List<RankingGlobalDTO> > getAllGlobalRanking() {
        List<RankingGlobalDTO>  users = gamersService.averageGlobal();
        return ResponseEntity.ok().body(users);
    }
}
