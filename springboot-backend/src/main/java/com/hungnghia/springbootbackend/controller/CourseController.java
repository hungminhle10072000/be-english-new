package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping("/add")
    public CourseDto addCourse(@RequestBody CourseDto courseDto ) {
        CourseDto course = courseService.addCourse(courseDto);
        return course;
    }

    @PutMapping("/update")
    public CourseDto updateCourse(@RequestBody CourseDto courseDto) {
        CourseDto course = courseService.updateCourse(courseDto);
        return course;
    }

    @GetMapping("/getAll")
    public List<CourseDto> getAllCourses() {
        return courseService.getAllCourse();
    }
}
