package com.nocountry.backend.service.impl;


import com.nocountry.backend.dto.*;
import com.nocountry.backend.entity.user.Gamers;
import com.nocountry.backend.exception.ParamNotFoundException;
import com.nocountry.backend.mapper.GamersMapper;
import com.nocountry.backend.repository.UserRepository;
import com.nocountry.backend.service.GamersService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


import java.util.*;


@Service
public class GamersServiceImpl implements GamersService {

    private GamersMapper gamersMapper;
    private UserRepository userRepository;

    @Autowired
    public GamersServiceImpl(@Lazy GamersMapper gamersMapper, UserRepository userRepository) {
        this.gamersMapper = gamersMapper;
        this.userRepository = userRepository;
    }

    @Override
    public GamersDTO create(GamersDTO gamersDTO) {

        Gamers entity = gamersMapper.userDTO2Entity(gamersDTO);
        Gamers entitySaved = userRepository.save(entity);

        return gamersMapper.userEntity2DTO(entitySaved, false);


    }
    //Puntos de cada Juego por jugador

    @Override
    public List<Long> listRecordMemories(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        Collections.sort(gamers.getRecordMemories(), Collections.reverseOrder());
        return gamers.getRecordMemories();


    }

    @Override
    public List<Long> listRecordSudoku(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        Collections.sort(gamers.getRecordSudoku(), Collections.reverseOrder());
        return gamers.getRecordSudoku();

    }

    @Override
    public List<Long> listRecordWordle(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        Collections.sort(gamers.getRecordWordle(), Collections.reverseOrder());
        return gamers.getRecordWordle();

    }
    @Override
    public List<Long> listRecordBuscaMinas(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        Collections.sort(gamers.getRecordBuscaMinas(), Collections.reverseOrder());
        return gamers.getRecordWordle();

    }

    //Promedio por cada Juego por jugador

    @Override
    public RankingMemoriesDTO averageMemories(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        RankingMemoriesDTO dto = new RankingMemoriesDTO();
        dto.setId(gamers.getId());
        dto.setGamers(gamers.getName());
        dto.setAverageMemories(gamers.getRecordMemories().stream().mapToLong(Long::longValue).sum() / gamers.getRecordMemories().size());
        return dto;
    }

    @Override
    public RankingSudokuDTO averageSudoku(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        RankingSudokuDTO dto = new RankingSudokuDTO();
        dto.setId(gamers.getId());
        dto.setGamers(gamers.getName());
        dto.setAverageSudoku(gamers.getRecordSudoku().stream().mapToLong(Long::longValue).sum() / gamers.getRecordSudoku().size());

        return dto;
    }

    @Override
    public RankingWordleDTO averageWordle(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        RankingWordleDTO dto = new RankingWordleDTO();
        dto.setId(gamers.getId());
        dto.setGamers(gamers.getName());
        dto.setAverageWordle(gamers.getRecordWordle().stream().mapToLong(Long::longValue).sum() / gamers.getRecordWordle().size());
        return dto;
    }
    @Override
    public RankingBuscaMinasDTO averageBuscaMinas(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        RankingBuscaMinasDTO dto = new RankingBuscaMinasDTO();
        dto.setId(gamers.getId());
        dto.setGamers(gamers.getName());
        dto.setAverageBuscaMinas(gamers.getRecordBuscaMinas().stream().mapToLong(Long::longValue).sum() / gamers.getRecordBuscaMinas().size());
        return dto;
    }

    //promedio de todos los juegos

    @Override
    public GamersDTO averageAll(Long id) {
        Gamers gamers = userRepository.findById(id).get();
        GamersDTO dto = new GamersDTO();
        dto.setId(gamers.getId());
        dto.setAverageBuscaMinas(gamers.getRecordBuscaMinas().stream().mapToLong(Long::longValue).sum() / gamers.getRecordBuscaMinas().size());
        dto.setAverageMemories(gamers.getRecordMemories().stream().mapToLong(Long::longValue).sum() / gamers.getRecordMemories().size());
        dto.setAverageSudoku(gamers.getRecordSudoku().stream().mapToLong(Long::longValue).sum() / gamers.getRecordSudoku().size());
        dto.setAverageWordle(gamers.getRecordWordle().stream().mapToLong(Long::longValue).sum() / gamers.getRecordWordle().size());
        return dto;
    }

    //lista de promedios de cada juego

    @Override
    public List<RankingSudokuDTO> averageSudokuALL() {
        List<Gamers> list = userRepository.findAll();
        Long a = Long.valueOf(0);
        List<RankingSudokuDTO> rankingSudokuDTOS = new ArrayList<>();
        for (Gamers entity : list) {
            RankingSudokuDTO dto = new RankingSudokuDTO();
            dto.setId(entity.getId());
            dto.setGamers(entity.getName());
            if (entity.getRecordSudoku().isEmpty()) {
                entity.getRecordSudoku().add(a);
            }
            dto.setAverageSudoku(entity.getRecordSudoku().stream().mapToLong(Long::longValue).sum() / entity.getRecordSudoku().size());
            rankingSudokuDTOS.add(dto);
        }
        return rankingSudokuDTOS;
    }

    @Override
    public List<RankingWordleDTO> averageWordleALL() {
        List<Gamers> list = userRepository.findAll();
        Long a = Long.valueOf(0);
        List<RankingWordleDTO> rankingWordleDTOS = new ArrayList<>();
        for (Gamers entity : list) {
            RankingWordleDTO dto = new RankingWordleDTO();
            dto.setId(entity.getId());
            dto.setGamers(entity.getName());
            if (entity.getRecordWordle().isEmpty()) {
                entity.getRecordWordle().add(a);
            }
            dto.setAverageWordle(entity.getRecordWordle().stream().mapToLong(Long::longValue).sum() / entity.getRecordWordle().size());
            rankingWordleDTOS.add(dto);
        }
        return rankingWordleDTOS;
    }

    @Override
    public List<RankingMemoriesDTO> averageMemoriesALL() {
        List<Gamers> list = userRepository.findAll();
        Long a = Long.valueOf(0);
        List<RankingMemoriesDTO> rankingMemoriesDTOS = new ArrayList<>();
        for (Gamers entity : list) {
            RankingMemoriesDTO dto = new RankingMemoriesDTO();
            dto.setId(entity.getId());
            dto.setGamers(entity.getName());
            if (entity.getRecordMemories().isEmpty()) {
                entity.getRecordMemories().add(a);
            }
            dto.setAverageMemories(entity.getRecordMemories().stream().mapToLong(Long::longValue).sum() / entity.getRecordMemories().size());
            rankingMemoriesDTOS.add(dto);
        }
        return rankingMemoriesDTOS;
    }
    @Override
    public List<RankingBuscaMinasDTO> averageBuscaMinasALL() {
        List<Gamers> list = userRepository.findAll();
        Long a = Long.valueOf(0);
        List<RankingBuscaMinasDTO> rankingBuscaMinasDTOS = new ArrayList<>();
        for (Gamers entity : list) {
            RankingBuscaMinasDTO dto = new RankingBuscaMinasDTO();
            dto.setId(entity.getId());
            dto.setGamers(entity.getName());
            if (entity.getRecordBuscaMinas().isEmpty()) {
                entity.getRecordBuscaMinas().add(a);
            }
            dto.setAverageBuscaMinas(entity.getRecordBuscaMinas().stream().mapToLong(Long::longValue).sum() / entity.getRecordBuscaMinas().size());
            rankingBuscaMinasDTOS.add(dto);
        }
        return rankingBuscaMinasDTOS;
    }

    //ranking global

    @Override
    public List<RankingGlobalDTO> averageGlobal() {
        List<Gamers> list = userRepository.findAll();
        Long a = Long.valueOf(0);
        List<RankingGlobalDTO> rankingGlobalDTOS = new ArrayList<>();

        for (Gamers entity : list) {
            RankingGlobalDTO dto = new RankingGlobalDTO();
            RankingSudokuDTO dtoSudoku = new RankingSudokuDTO();
            RankingMemoriesDTO dtoMemories = new RankingMemoriesDTO();
            RankingWordleDTO dtoWordle = new RankingWordleDTO();
            RankingBuscaMinasDTO dtoBuscaMinas = new RankingBuscaMinasDTO();

            dto.setId(entity.getId());
            dto.setGamers(entity.getName());
            if(entity.getRecordSudoku().isEmpty()){
                entity.getRecordSudoku().add(a);
            }
            if(entity.getRecordMemories().isEmpty()){
                entity.getRecordMemories().add(a);
            }
            if(entity.getRecordWordle().isEmpty()){
                entity.getRecordWordle().add(a);
            }
            if(entity.getRecordBuscaMinas().isEmpty()){
                entity.getRecordBuscaMinas().add(a);
            }
            dtoSudoku.setAverageSudoku(entity.getRecordSudoku().stream().mapToLong(Long::longValue).sum() / entity.getRecordSudoku().size());
            dtoMemories.setAverageMemories(entity.getRecordMemories().stream().mapToLong(Long::longValue).sum() / entity.getRecordMemories().size());
            dtoWordle.setAverageWordle(entity.getRecordWordle().stream().mapToLong(Long::longValue).sum() / entity.getRecordWordle().size());
            dtoBuscaMinas.setAverageBuscaMinas(entity.getRecordBuscaMinas().stream().mapToLong(Long::longValue).sum() / entity.getRecordBuscaMinas().size());

            dto.setAverageGlobal((dtoSudoku.getAverageSudoku() + dtoWordle.getAverageWordle() + dtoMemories.getAverageMemories()+dtoBuscaMinas.getAverageBuscaMinas()) / 4);
            rankingGlobalDTOS.add(dto);
        }


        return rankingGlobalDTOS;
    }


    public GamersDTO findById(@NonNull Long id) {

        Optional<Gamers> entity = userRepository.findById(id);

        if (entity.isEmpty()) {
            throw new ParamNotFoundException("Error: Invalid user id.");
        }

        return gamersMapper.userEntity2DTO(entity.get(), true);
    }

    @Override
    public List<GamersDTO> getAllUser() {

        List<Gamers> entities = userRepository.findAll();

        return this.gamersMapper.entitySet2DtoList(entities, false);
    }
    @Override
    public GamersDTO getUserAll(GamersDTO gamers) {

        Gamers entities = userRepository.findById(gamers.getId()).get();

        return this.gamersMapper.userEntity2DTO(entities, false);
    }


    @Override
    public void delete(Long id) {
        this.userRepository.deleteById(id);

    }

    @Override
    public GamersDTO update(Long id,List<Long> recordSudoku,List<Long> recordMemories,List<Long>recordWordle,List<Long> recordBuscaMinas) {

        Optional<Gamers> entity = userRepository.findById(id);

        if (entity.isEmpty()) {
            throw new ParamNotFoundException("Error: Invalid user id");
        }

        Gamers gamers = gamersMapper.userEntityRefreshValuesSudoku(entity.get(),recordSudoku, recordMemories, recordWordle,recordBuscaMinas);
        Gamers entitySaved = userRepository.save(gamers);

        return gamersMapper.userEntity2DTO(entitySaved, false);

    }

}
