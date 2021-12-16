package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.dto.UserCourseDto;
import com.hungnghia.springbootbackend.dto.UserCourseDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.entities.User_Course_Entity;
import com.hungnghia.springbootbackend.entities.User_Course_Key;
import com.hungnghia.springbootbackend.repository.CourseRepository;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.AccessType;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
@Component
public class UserCourseConverter {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private CourseConverter courseConverter;

    public User_Course_Entity toEntity(UserCourseDto userCourseDto) {
        User_Course_Key key = new User_Course_Key();
        User_Course_Entity userCourseEntity = new User_Course_Entity();
        UserEntity userEntity = userRepository.getById(userCourseDto.getUser().getId());
        CourseEntity courseEntity = courseRepository.getById(userCourseDto.getCourse().getId());
        key.setUserId(userEntity.getId());
        key.setCourseId(courseEntity.getId());
        userCourseEntity.setId(key);
        userCourseEntity.setUserEntity(userEntity);
        userCourseEntity.setCourseEntity(courseEntity);
        return userCourseEntity;
    }

    public UserCourseDto toDto(User_Course_Entity userCourseEntity) {
        UserCourseDto userCourseDto = new UserCourseDto();
        UserDto userDto = userConverter.toDto(userCourseEntity.getUserEntity());
        CourseDto courseDto = courseConverter.toDto(userCourseEntity.getCourseEntity());
        userCourseDto.setUser(userDto);
        userCourseDto.setCourse(courseDto);
        return userCourseDto;
        
    }

    public List<UserCourseDto> toListDto(List<User_Course_Entity> userEntities) {
        List<UserCourseDto> lstUserCourseDto = new ArrayList<>();
        if (userEntities != null) {
            for (User_Course_Entity t: userEntities) {
                UserCourseDto userCourseDto = toDto(t);
                lstUserCourseDto.add(userCourseDto);
            }
        }
        return lstUserCourseDto;
    }
}
