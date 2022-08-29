package com.nocountry.backend.auth.service;


import com.nocountry.backend.dto.GamersDTO;
import com.nocountry.backend.entity.user.Gamers;
import com.nocountry.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
@AllArgsConstructor
@Service
public class UserDetailsCustomService implements UserDetailsService {

   @Autowired
   private UserRepository userRepositorySecurity;





    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Gamers userEntity = userRepositorySecurity.findByUsername(username);
        if (userEntity == null){
            throw new UsernameNotFoundException("user or password failed");
        }

        return new User(userEntity.getUsername(), userEntity.getPassword(), Collections.emptyList());
    }

    public boolean save(GamersDTO userDto){
        Gamers userEntity = new Gamers();
        userEntity.setUsername(userDto.getUsername());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setName(userDto.getName());
        userEntity =this.userRepositorySecurity.save(userEntity);

        return userEntity != null;
    }
}
