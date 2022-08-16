package com.nocountry.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String nickname;
    private String email;
    private String password;
    private Long score;
    private List<GamesDTO> gamesList;
}
