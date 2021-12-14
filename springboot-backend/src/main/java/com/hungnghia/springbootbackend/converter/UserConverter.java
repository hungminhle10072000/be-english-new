package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserConverter {
    
    public UserEntity toEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setId(userDto.getId());
        userEntity.setFullname(userDto.getFullname());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setEmail(userDto.getEmail());
        userEntity.setGender(userDto.getGender());
        userEntity.setAddress(userDto.getAddress());
        userEntity.setPassword(userDto.getPhonenumber());
        userEntity.setBirthday(Date.valueOf(userDto.getBirthday()));
        userEntity.setRole(userEntity.getRole());

        // List User Course

        // List ResultDetail

        // List Result Entity

        // List Comment Entity

        return userEntity;
    }

    public UserDto toDto(UserEntity userEntity) {
        UserDto userDto = new UserDto();
        userDto.setId(userEntity.getId());
        userDto.setFullname(userEntity.getFullname());
        userDto.setPassword(userEntity.getPassword());
        userDto.setEmail(userEntity.getEmail());
        userDto.setGender(userEntity.getGender());
        userDto.setAddress(userEntity.getAddress());
        userDto.setPassword(userEntity.getPhonenumber());
//        userDto.setBirthday( userEntity.getBirthday());
        userDto.setRole(userEntity.getRole());
        return userDto;
    }

    public List<UserDto> toListDto(List<UserEntity> userEntities) {
        List<UserDto> lstUserDto = new ArrayList<>();
        if (userEntities != null) {
            for (UserEntity t: userEntities) {
                UserDto userDto = toDto(t);
                lstUserDto.add(userDto);
            }
        }
        return lstUserDto;
    }
}
