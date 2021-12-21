package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.converter.CommentConverter;
import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.entities.CommentEntity;
import com.hungnghia.springbootbackend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.events.Comment;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @Autowired
    private CommentConverter commentConverter;

    @GetMapping("/getCommentByLessonId/{lessonId}")
    public List<CommentDto> getCommentByLessonId(@PathVariable Long lessonId) {
        List<CommentEntity> commentEntities = commentService.getCommentByLessonId(lessonId);
        List<CommentDto> commentDtos = commentConverter.toListDto(commentEntities);
        return commentDtos;
    }

    @GetMapping("/getAll")
    public List<CommentDto> getAllComment() {
        List<CommentDto> commentDtos = commentService.getAllComment();
        return commentDtos;
    }

    @PostMapping("/add")
    public CommentDto addComment(@RequestBody CommentDto comment) {
        CommentDto commentDto = commentService.addComment(comment);
        return commentDto;
    }
}
