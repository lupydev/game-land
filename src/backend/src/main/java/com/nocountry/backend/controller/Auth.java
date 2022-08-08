package com.nocountry.backend.controller;

import com.nocountry.backend.dto.UserDTO;
import com.nocountry.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class Auth {


    public UserService userService;
    @Autowired
    public Auth(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDTO> create(@RequestBody UserDTO userDTO){
        UserDTO userSaved = userService.create(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(userSaved);
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> userFullId(@PathVariable Long id) {
        UserDTO characterDTO = this.userService.findById(id);
        return ResponseEntity.ok().body(characterDTO);
    }
    @GetMapping("/all")
    public ResponseEntity<List<UserDTO>> getAll() {
        List<UserDTO> users = userService.getAllUser();
        return ResponseEntity.ok().body(users);
    }
}
