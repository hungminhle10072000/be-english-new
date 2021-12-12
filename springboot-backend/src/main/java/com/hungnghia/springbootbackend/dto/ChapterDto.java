package com.hungnghia.springbootbackend.dto;

import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.service.CourseService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.List;

@Data
public class ChapterDto {
    private long id;
    private String name;
    private int number; // priority
    private int courseId;
    private String courseName;
    private List<LessonDto> lessons;
    private int numOfLesson;
}
