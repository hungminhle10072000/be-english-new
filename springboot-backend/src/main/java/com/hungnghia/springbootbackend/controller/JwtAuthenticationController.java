package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.config.JwtTokenUtil;
import com.hungnghia.springbootbackend.dto.JwtRequest;
import com.hungnghia.springbootbackend.dto.JwtResponse;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.service.JwtUserDetailsService;
import com.hungnghia.springbootbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestPart("userDto") UserDto userDto, @RequestPart("file") MultipartFile file){
        if(userService.checkExistUserName(userDto.getUsername())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        else if(userService.checkExistEmail(userDto.getEmail())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else return ResponseEntity.ok(userService.addUser(userDto, file));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService.
                loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        Map<String, Object> rs = new HashMap<>();
        rs.put("token", new JwtResponse(token));
        UserEntity rsUser = userService.getUser(authenticationRequest.getUsername());
        rs.put("user", rsUser);
        return ResponseEntity.ok(rs);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e){
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e){
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
