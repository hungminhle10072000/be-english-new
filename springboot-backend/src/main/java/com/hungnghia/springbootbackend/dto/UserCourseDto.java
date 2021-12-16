package com.hungnghia.springbootbackend.dto;

import org.springframework.stereotype.Component;
@Component
public class UserCourseDto {
    private UserDto user;
    private CourseDto course;

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public CourseDto getCourse() {
        return course;
    }

    public void setCourse(CourseDto course) {
        this.course = course;
    }
}
