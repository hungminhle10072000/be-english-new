package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.UserConverter;
import com.hungnghia.springbootbackend.converter.UserCourseConverter;
import com.hungnghia.springbootbackend.dto.UserCourseDto;
import com.hungnghia.springbootbackend.entities.User_Course_Entity;
import com.hungnghia.springbootbackend.repository.UserCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCourseService {
    @Autowired
    private UserCourseConverter userCourseConverter;
    @Autowired
    private UserCourseRepository userCourseRepository;

    public UserCourseDto addUserCourse(UserCourseDto userCourseDto) {
        User_Course_Entity userCourseEntity = userCourseConverter.toEntity(userCourseDto);
        User_Course_Entity usercourse = userCourseRepository.save(userCourseEntity);
        return userCourseConverter.toDto(usercourse);
    }
}
