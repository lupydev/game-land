package com.nocountry.backend.service;

import com.nocountry.backend.dto.GamesListDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface GamesService {
    GamesListDTO create(GamesListDTO gamesDTO);
    GamesListDTO findById(Long id);
    void delete(Long id);
    GamesListDTO update(Long id, GamesListDTO gamesDTO);
}
