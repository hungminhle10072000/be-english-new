package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.sql.Date;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final AmazonClient amazonClient;
    private final PasswordEncoder bcryptEncoder;

    @Autowired
    public UserService(UserRepository userRepository, AmazonClient amazonClient, PasswordEncoder bcryptEncoder) {
        this.userRepository = userRepository;
        this.amazonClient = amazonClient;
        this.bcryptEncoder = bcryptEncoder;
    }

    public List<UserEntity> getUsers(){
        return userRepository.findAll();
    }

    public UserEntity addUser(UserDto userDto, MultipartFile file){
        boolean checkExistUserName = userRepository.findByUsername(userDto.getUsername()) != null;
        if(checkExistUserName){
            return null;
        } else {
            UserEntity userEntity = new UserEntity();
            userEntity.setFullname(userDto.getFullname());
            userEntity.setUsername(userDto.getUsername());
            userEntity.setPassword(bcryptEncoder.encode(userDto.getPassword()));
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
    }

    /*Edit User*/
    @Transactional
    public UserEntity updateUser (Long id, UserDto userDto, MultipartFile file){
        UserEntity userToEdit = getUser(id);
        userToEdit.setFullname(userDto.getFullname());
        userToEdit.setUsername(userDto.getUsername());
//        Khong set lai password
//        Chuc nang doi mat khau rieng
        /*userToEdit.setPassword(bcryptEncoder.encode(userDto.getPassword()));*/
        userToEdit.setEmail(userDto.getEmail());
        userToEdit.setAddress(userDto.getAddress());
        userToEdit.setGender(userDto.getGender());
        userToEdit.setPhonenumber(userDto.getPhonenumber());
        userToEdit.setRole(userDto.getRole());
        Date dateBirthday = Date.valueOf(userDto.getBirthday());
        userToEdit.setBirthday(dateBirthday);
        if(!(file == null)){
            String avatarUrl = amazonClient.uploadFile(file);
            userToEdit.setAvartar(avatarUrl);
        }
        userRepository.save(userToEdit);
        return userToEdit;
    }

    public UserEntity getUser(Long id){
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại user với id :" + id));
    }

    public UserEntity deleteUser (Long id){
        UserEntity userEntity = getUser(id);
        userRepository.delete(userEntity);
        return userEntity;
    }

    public UserEntity getUser(String username){
        Optional<UserEntity> optional = Optional.ofNullable(userRepository.findByUsername(username));
        return optional.orElseThrow(() -> new ResourceNotFoundException("Không tồn tại user với username :" + username));
    }
}
