package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    /*Get all user*/
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getUsers();
    }

    /*Add user*/
    @PostMapping("/users")
    public UserEntity addUser(@RequestBody UserEntity userEntity) {
        return userService.addUser(userEntity);
    }

    /*Delete User*/
    @DeleteMapping("/users/{id}")
    public ResponseEntity<UserEntity> deleteUser(@PathVariable Long id){
        UserEntity userEntity = userService.deleteUser(id);
        return ResponseEntity.ok(userEntity);
    }

    /*Edit User*/
    @PutMapping("/users/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Long id, @RequestBody UserEntity userEntity){
        UserEntity updateUser = userService.updateUser(id, userEntity);
        return ResponseEntity.ok(updateUser);
    }

    /*Get User with id*/
    @GetMapping("/users/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Long id){
        UserEntity userEntity = userService.getUser(id);
        return ResponseEntity.ok(userEntity);
    }

}
