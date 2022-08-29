package com.nocountry.backend.dto;

import com.nocountry.backend.entity.RankingSudoku;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class SudokuDTO {
    private Long id;
    private String name;
    private RankingSudoku rankingSudoku;
    private List<String> templates=new ArrayList<>();
}
