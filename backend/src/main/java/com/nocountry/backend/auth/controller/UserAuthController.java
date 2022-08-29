package com.nocountry.backend.auth.controller;


import com.nocountry.backend.auth.dto.AuthenticationRequest;
import com.nocountry.backend.auth.dto.AuthenticationResponse;
import com.nocountry.backend.auth.service.JwtUtil;
import com.nocountry.backend.auth.service.UserDetailsCustomService;
import com.nocountry.backend.dto.GamersDTO;
import com.nocountry.backend.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.web.bind.annotation.RequestMethod.POST;


@CrossOrigin(origins = "*", methods = {POST})
@RestController
@RequestMapping("/auth")
public class UserAuthController {
    @Autowired
    private UserDetailsCustomService userDetailsCustomService;
    @Autowired
    private GamesRepository gamesRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/singUp")
    public ResponseEntity<AuthenticationResponse> singUp(@Valid @RequestBody GamersDTO user) throws Exception {
        userDetailsCustomService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

    @PostMapping("/singIn")
    public ResponseEntity<AuthenticationResponse> singIn(@RequestBody AuthenticationRequest authRequest) throws Exception {
        UserDetails userDetails;

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

            userDetails = (UserDetails) auth.getPrincipal();
        } catch (BadCredentialsException e) {
            throw new Exception("password o username failed", e);
        }

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }


}
