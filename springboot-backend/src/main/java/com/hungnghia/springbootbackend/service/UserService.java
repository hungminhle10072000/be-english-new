package com.hungnghia.springbootbackend.service;

import com.cloudinary.utils.ObjectUtils;
import com.hungnghia.springbootbackend.config.ConfigCloudinary;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Date;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ConfigCloudinary configCloudinary;

    @Autowired
    public UserService(UserRepository userRepository, ConfigCloudinary configCloudinary) {
        this.userRepository = userRepository;
        this.configCloudinary = configCloudinary;
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
        try {
            File uploadedFile = convertMultiPartToFile(file);
            Map uploadResult = configCloudinary.cloudinaryConfig().uploader().upload(uploadedFile, ObjectUtils.emptyMap());
            String urlAvatar = uploadResult.get("url").toString();
            userEntity.setAvartar(urlAvatar);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return userRepository.save(userEntity);
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
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
