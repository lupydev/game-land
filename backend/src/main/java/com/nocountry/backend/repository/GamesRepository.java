package com.nocountry.backend.repository;

import com.nocountry.backend.entity.GamesList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GamesRepository extends JpaRepository<GamesList,Long> {

}
