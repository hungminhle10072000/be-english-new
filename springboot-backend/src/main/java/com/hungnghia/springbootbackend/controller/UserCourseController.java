package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.UserCourseDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/usercourse")
@CrossOrigin(origins = "http://localhost:3000")
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    @PostMapping("/add")
    public UserCourseDto addUserCourse(@RequestPart("userCourseDto") UserCourseDto userCourseDto){
        UserCourseDto userCourse = userCourseService.addUserCourse(userCourseDto);
        return userCourse;
    }
}
