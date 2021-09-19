package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> getUsers(){
        return userRepository.findAll();
    }

    public UserEntity addUser(UserEntity userEntity){
        return userRepository.save(userEntity);
    }

    public UserEntity getUser(Long id){
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại user với id :" + id));
    }

    public UserEntity deleteUser (Long id){
        UserEntity userEntity = getUser(id);
        userRepository.delete(userEntity);
        return userEntity;
    }

}
