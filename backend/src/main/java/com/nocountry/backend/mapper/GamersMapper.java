package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.GamersDTO;
import com.nocountry.backend.entity.user.Gamers;
import com.nocountry.backend.repository.GamesRepository;
import com.nocountry.backend.repository.UserRepository;
import com.nocountry.backend.service.GamersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

import java.util.List;


@Component
public class GamersMapper {


    private GamersService gamersService;
    private UserRepository userRepository;
    private GamesRepository gamesRepository;

    @Autowired
    public GamersMapper(GamersService gamersService, UserRepository userRepository,GamesRepository gamesRepository) {
        this.gamersService = gamersService;
        this.userRepository = userRepository;
        this.gamesRepository = gamesRepository;

    }


    public Gamers userDTO2Entity(GamersDTO dto) {

        Gamers gamers = new Gamers();
        gamers.setName(dto.getName());
        gamers.setGamesList(dto.getGamesList());
        gamers.setUsername(dto.getUsername());
        gamers.setPassword(dto.getPassword());

        gamers.setRecordMemories(dto.getRecordMemories());

        gamers.setRecordSudoku(dto.getRecordSudoku());

        gamers.setRecordWordle(dto.getRecordWordle());

        gamers.setRecordBuscaMinas(dto.getRecordBuscaMinas());

        gamers.setAverageGlobal(dto.getAverageSudoku());
        gamers.setAverageMemories(dto.getAverageMemories());
        gamers.setAverageWordle(dto.getAverageWordle());
        gamers.setAverageSudoku(dto.getAverageSudoku());
        gamers.setAverageBuscaMinas(dto.getAverageBuscaMinas());


        return gamers;
    }


    public GamersDTO userEntity2DTO(Gamers entity, boolean loadGames) {

        GamersDTO dto = new GamersDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setGamesList(entity.getGamesList());
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());

        dto.setRecordMemories(entity.getRecordMemories());
        dto.setRecordSudoku(entity.getRecordSudoku());
        dto.setRecordWordle(entity.getRecordWordle());
        dto.setRecordBuscaMinas(entity.getRecordBuscaMinas());

        dto.setAverageGlobal(entity.getAverageGlobal());
        dto.setAverageMemories(entity.getAverageMemories());
        dto.setAverageWordle(entity.getAverageWordle());
        dto.setAverageSudoku(entity.getAverageSudoku());
        dto.setAverageBuscaMinas(entity.getAverageBuscaMinas());


        return dto;
    }

    public List<GamersDTO> entitySet2DtoList(List<Gamers> entities, boolean loadUser) {

        List<GamersDTO> gamersDTOS = new ArrayList<>();

        for (Gamers entity : entities) {
            gamersDTOS.add(userEntity2DTO(entity, loadUser));
        }

        return gamersDTOS;
    }


    public List<Gamers> userDTOListSet2EntityList(List<GamersDTO> gamersDTOList) {

        List<Gamers> gamers = new ArrayList<>();

        for (GamersDTO gamersDTO : gamersDTOList) {
            gamers.add(userDTO2Entity(gamersDTO));
        }

        return gamers;
    }

    public Gamers userEntityRefreshValues(Gamers gamers, Long recordSudoku, Long recordMemories, Long recordWordle) {


        gamers.getRecordMemories().add(recordMemories);

        gamers.getRecordWordle().add(recordWordle);

        gamers.getRecordSudoku().add(recordSudoku);


        return gamers;


    }

    public Gamers userEntityRefreshValuesSudoku(Gamers gamers, List<Long> recordSudoku, List<Long> recordMemories, List<Long> recordWordle,List<Long> recordBuscaMinas) {
        if (!recordMemories.isEmpty()) {
            gamers.setRecordMemories(recordMemories);
        }

        if (!recordWordle.isEmpty()) {
            gamers.setRecordWordle(recordWordle);
        }

        if (!recordSudoku.isEmpty()) {
            gamers.setRecordSudoku(recordSudoku);
        }
        if (!recordBuscaMinas.isEmpty()) {
            gamers.setRecordBuscaMinas(recordBuscaMinas);
        }


        return gamers;

    }

}
