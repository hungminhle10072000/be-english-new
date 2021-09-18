package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/user/product")
@RequestMapping("/api/")
public class UserController {

//    @GetMapping
//    public void getProduct() {
//        System.out.println("User Login!");
//    }

    @Autowired
    private UserRepository userRepository;

    ///get all user
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }


}
