package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping("/add")
    public CourseDto addCourse(@RequestPart("courseDto") CourseDto courseDto, @RequestPart("file") MultipartFile file) {
        CourseDto course = courseService.addCourse(courseDto);
        return course;
    }

    @PutMapping("/update")
    public CourseDto updateCourse(@RequestPart("courseDto") CourseDto courseDto, @RequestPart("file") MultipartFile file) {
        CourseDto course = courseService.updateCourse(courseDto);
        return course;
    }

    @GetMapping("/getAll")
    public List<CourseDto> getAllCourses() {
        return courseService.getAllCourse();
    }

    @GetMapping("/edit/{id}")
    public CourseDto getCourseById(@PathVariable long id) {
        CourseDto course = courseService.getCourseById(id);
        return course;
    }
    @DeleteMapping("/delete/{id}")
    public CourseDto deleteCourse(@PathVariable long id) {
        CourseDto courseDto = courseService.deleteCourse(id);
        return courseDto;
    }
}
