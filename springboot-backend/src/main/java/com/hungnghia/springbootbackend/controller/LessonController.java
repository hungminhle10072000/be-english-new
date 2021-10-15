package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.converter.LessonConverter;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/lesson")
public class LessonController {
    @Autowired
    private LessonService lessonService;

    @PostMapping("/add")
    public LessonDto addLesson(@RequestPart("lessonDto") LessonDto lessonDto,@RequestPart("video") MultipartFile video) {
        LessonDto lesson = lessonService.addLesson(lessonDto,video);
        return lesson;
    }
    @PutMapping("/update")
    public LessonDto updateLesson(@RequestPart("lessonDto") LessonDto lessonDto,@RequestPart("video") MultipartFile video) {
        LessonDto lesson = lessonService.updateLesson(lessonDto,video);
        return lesson;
    }

    @GetMapping("/getAll")
    public List<LessonDto> getAll() {
        return lessonService.getAllLesson();
    }
}
