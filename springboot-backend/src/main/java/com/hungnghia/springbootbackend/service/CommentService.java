package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.CommentConverter;
import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.entities.CommentEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private CommentConverter commentConverter;

    public List<CommentEntity> getCommentByLessonId(Long lessonId) {
        List<CommentEntity> lessonEntities = commentRepository.findCommentEntitiesByLessonEntity_Id(lessonId);
        return lessonEntities;
    }

    public List<CommentEntity> getCommentByVocabularyTopicId(Long vocabularyTopicId) {
        List<CommentEntity> lessonEntities = commentRepository.findCommentEntitiesByVocabularyTopicEntity_Id(vocabularyTopicId);
        return lessonEntities;
    }
    public List<CommentEntity> getCommentByGrammarId(Long grammarId) {
        List<CommentEntity> lessonEntities = commentRepository.findCommentEntitiesByGrammarEntity_Id(grammarId);
        return lessonEntities;
    }

    public CommentDto addComment(CommentDto commentDto) {
        CommentEntity commentEntity = commentConverter.toEntity(commentDto);
        commentEntity.setTime(new Date());
        CommentEntity result = commentRepository.save(commentEntity);
        return commentConverter.toDto(result);
    }
    public List<CommentDto> getAllComment() {
        List<CommentEntity> commentEntities = commentRepository.findAll();
        List<CommentDto> commentDtos = commentConverter.toListDto(commentEntities);
        return commentDtos;
    }

    public CommentDto deleteComment(Long id) {
        try {
            CommentEntity commentEntity = commentRepository.getById(id);
            commentRepository.delete(commentEntity);
            return commentConverter.toDto(commentEntity);
        } catch (Exception e) {
            return null;
        }

    }
}
