package com.nocountry.backend.mapper;
import com.nocountry.backend.dto.GamesDTO;
import com.nocountry.backend.dto.RankingDTO;
import com.nocountry.backend.entity.Games;
import com.nocountry.backend.entity.Ranking;
import com.nocountry.backend.service.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class GamesMapper {
    @Autowired
    private GamesService gamesService;
    private RankingMapper rankingMapper;
    public GamesDTO rankingToRankingDto(Games games) {
        if (games == null) {
            return null;
        }

        GamesDTO gamesDTO = new GamesDTO();

        if (games != null) {
            gamesDTO.setId(games.getId());
            gamesDTO.setImage(games.getImage());
            gamesDTO.setName(games.getName());
            gamesDTO.setRate(games.getRate());
            gamesDTO.setRankingList(rankingMapper.rankingListToRankingListDto((List<Ranking>) games.getRanking()));



        }

        return gamesDTO;
    }


    public Games gamesDto2gameEntity(GamesDTO gamesDTO) {
        if (gamesDTO == null) {
            return null;
        }

        Games games = new Games();


        games.setImage(gamesDTO.getImage());
        games.setName(gamesDTO.getName());
        games.setRate(gamesDTO.getRate());
        games.setRanking((Ranking) rankingsDTOListToRankingList(gamesDTO.getRankingList()));



        return games;
    }


    public List<GamesDTO> gamesListToGamesListDto(List<Games> gamesList) {
        if (gamesList== null) {
            return null;
        }

        List<GamesDTO> list = gamesService.getAllGames();
        for (Games games : gamesList) {
            list.add(rankingToRankingDto(games));
        }

        return list;
    }




    protected List<Ranking> rankingsDTOListToRankingList(List<RankingDTO> list) {
        if (list == null) {
            return null;
        }

        List<Ranking> list1 = new ArrayList<Ranking>(list.size());
        for (RankingDTO rankingDTO : list) {
            list1.add(rankingMapper.rankingDto2rankingEntity(rankingDTO));
        }

        return list1;
    }
}
