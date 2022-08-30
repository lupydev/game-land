package com.nocountry.backend.repository;

import com.nocountry.backend.entity.user.Gamers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<Gamers, Long> {

    Gamers findByUsername(String username);


}
