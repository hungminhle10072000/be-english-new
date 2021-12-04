package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.entities.CommentEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    public List<CommentEntity> getCommentByLessonId(Long lessonId) {
        List<CommentEntity> lessonEntities = commentRepository.findCommentEntitiesByLessonEntity_Id(lessonId);
        return lessonEntities;
    }
}
