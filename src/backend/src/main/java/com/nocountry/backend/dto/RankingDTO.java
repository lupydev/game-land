package com.nocountry.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class RankingDTO {
    private Long id;
    private List<UserDTO> userDTOList;
}
