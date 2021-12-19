package com.hungnghia.springbootbackend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CommentDto {
    private Long id;
    private String content;
    private Date time;
    private String type;
    private Long parentId;
    private Long grammarId;
    private Long lessonId;
    private Long userId;
    private Long vocabularyTopicId;
    private CommentDto parent;
    private UserDto userDto;
    private VocabularyDto vocabularyDto;
    private LessonDto lessonDto;
}
