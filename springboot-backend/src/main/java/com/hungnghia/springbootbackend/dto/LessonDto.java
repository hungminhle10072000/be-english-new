package com.hungnghia.springbootbackend.dto;

import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.service.ChapterService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Data
public class LessonDto {
    private long id;
    private String name;
    private int numPriority;
    private String video;
    private Long chapterId;
    private String chapterName;
    private int numLessonOfChapter;
    private String courseName;
    private List<CommentDto> commentDtos;
}
