package com.hungnghia.springbootbackend.dto;

import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.service.ChapterService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class LessonDto {
    private long id;
    private String name;
    private int number;
    private String video;
    private int chapterId;
    private String chapterName;
    private String courseName;

}
