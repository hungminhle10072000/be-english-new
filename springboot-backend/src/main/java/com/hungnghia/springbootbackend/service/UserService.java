package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.sql.Date;
import java.util.List;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final AmazonClient amazonClient;

    @Autowired
    public UserService(UserRepository userRepository, AmazonClient amazonClient) {
        this.userRepository = userRepository;
        this.amazonClient = amazonClient;
    }

    public List<UserEntity> getUsers(){
        return userRepository.findAll();
    }

    public UserEntity addUser(UserDto userDto, MultipartFile file){
        UserEntity userEntity = new UserEntity();
        userEntity.setFullname(userDto.getFullname());
        userEntity.setUsername(userDto.getUsername());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setEmail(userDto.getEmail());
        userEntity.setGender(userDto.getGender());
        userEntity.setAddress(userDto.getAddress());
        userEntity.setPhonenumber(userDto.getPhonenumber());
        Date dateBirthday = Date.valueOf(userDto.getBirthday());
        userEntity.setBirthday(dateBirthday);
        userEntity.setRole(userDto.getRole());
        String avatarUrl = amazonClient.uploadFile(file);
        userEntity.setAvartar(avatarUrl);
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
    
    /*Edit User*/
    @Transactional
    public UserEntity updateUser (Long id, UserEntity userEntity){
        UserEntity userToEdit = getUser(id);

        userToEdit.setFullname(userEntity.getFullname());
        userToEdit.setUsername(userEntity.getUsername());
        userToEdit.setPassword(userEntity.getPassword());
        userToEdit.setEmail(userEntity.getEmail());
        userToEdit.setAddress(userEntity.getAddress());
        userToEdit.setGender(userEntity.getGender());
        userToEdit.setPhonenumber(userEntity.getPhonenumber());
        userToEdit.setRole(userEntity.getRole());
        userToEdit.setBirthday(userEntity.getBirthday());

        userRepository.save(userToEdit);
        return userToEdit;
    }
}
