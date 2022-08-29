package com.nocountry.backend.controller;

import com.nocountry.backend.dto.*;
import com.nocountry.backend.service.GamersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@CrossOrigin(origins = "*", methods= {GET, POST, PUT, DELETE})
@RestController
@RequestMapping("/gamers")
public class GamersController {


    public GamersService gamersService;

    @Autowired
    public GamersController(GamersService gamersService) {
        this.gamersService = gamersService;
    }

    @PostMapping
    public ResponseEntity<GamersDTO> create(@RequestBody GamersDTO gamersDTO) {
        GamersDTO userSaved = gamersService.create(gamersDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(userSaved);
    }
    @PostMapping("/recordEdit/{id}")
    public ResponseEntity<GamersDTO> recordSudoku(@PathVariable Long id,
                                                  @RequestParam(value = "recordSudoku", required = false) List<Long> recordSudoku,
                                                  @RequestParam(value = "recordMemories", required = false) List<Long> recordMemories,
                                                  @RequestParam(value = "recordWordle", required = false) List<Long> recordWordle,
                                                  @RequestParam(value = "recordBuscaMinas", required = false) List<Long> recordBuscaMinas){
        GamersDTO rankingSaved = gamersService.update(id, recordSudoku, recordMemories, recordWordle,recordBuscaMinas);
        return ResponseEntity.status(HttpStatus.CREATED).body(rankingSaved);
    }


    @GetMapping("/{id}")
    public ResponseEntity<GamersDTO> userFullId(@PathVariable Long id) {
        GamersDTO characterDTO = this.gamersService.findById(id);
        return ResponseEntity.ok().body(characterDTO);
    }

    @GetMapping("/all")
    public ResponseEntity<List<GamersDTO>> getAll() {
        List<GamersDTO> users = gamersService.getAllUser();
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/user")
    public ResponseEntity<GamersDTO> getUserAll(@RequestBody GamersDTO gamersDTO) {
        GamersDTO users = gamersService.getUserAll(gamersDTO);
        return ResponseEntity.ok().body(users);
    }
    //puntaje individual por juego

    @GetMapping("/recordMemories/{id}")
    public ResponseEntity<List<Long>> getAllRecordMemories(@PathVariable(value = "id", required = true) Long id) {
        List<Long> users = gamersService.listRecordMemories(id);
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/recordSudoku/{id}")
    public ResponseEntity<List<Long>> getAllRecordSudoku(@PathVariable(value = "id", required = true) Long id) {
        List<Long> users = gamersService.listRecordSudoku(id);
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/recordWordle/{id}")
    public ResponseEntity<List<Long>> getAllRecordWordle(@PathVariable(value = "id", required = true) Long id) {
        List<Long> users = gamersService.listRecordWordle(id);
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/recordBuscaMinas/{id}")
    public ResponseEntity<List<Long>> getAllRecordBuscaMinas(@PathVariable(value = "id", required = true) Long id) {
        List<Long> users = gamersService.listRecordBuscaMinas(id);
        return ResponseEntity.ok().body(users);
    }

    //promedio de cada juego

    @GetMapping("/statisticsMemories/{id}")
    public ResponseEntity<RankingMemoriesDTO> getAllAverageMemories(@PathVariable(value = "id", required = true) Long id) {
        RankingMemoriesDTO users = gamersService.averageMemories(id);
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/statisticsSudoku/{id}")
    public ResponseEntity<RankingSudokuDTO> getAllAverageSudoku(@PathVariable(value = "id", required = true) Long id) {
        RankingSudokuDTO users = gamersService.averageSudoku(id);
        return ResponseEntity.ok().body(users);
    }


    @GetMapping("/statisticsWordle/{id}")
    public ResponseEntity<RankingWordleDTO> getAllAverageWordle(@PathVariable(value = "id", required = true) Long id) {
        RankingWordleDTO users = gamersService.averageWordle(id);
        return ResponseEntity.ok().body(users);
    }
    @GetMapping("/statisticsBuscaMinas/{id}")
    public ResponseEntity<RankingBuscaMinasDTO> getAllAverageBuscaMinas(@PathVariable(value = "id", required = true) Long id) {
        RankingBuscaMinasDTO users = gamersService.averageBuscaMinas(id);
        return ResponseEntity.ok().body(users);
    }

}
