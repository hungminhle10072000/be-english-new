package com.hungnghia.springbootbackend.dto;

import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import lombok.Data;

import java.util.List;

@Data
public class CourseDto {
    private long id;
    private String name;
    private String image;
    private String introduce;
    private int numOfChapter;
    private List<ChapterDto> chapters;
    private List<UserDto> users;
}
