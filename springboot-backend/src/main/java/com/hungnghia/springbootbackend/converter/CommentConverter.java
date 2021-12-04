package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.*;
import com.hungnghia.springbootbackend.repository.CommentRepository;
import com.hungnghia.springbootbackend.repository.LessonRepository;
import com.hungnghia.springbootbackend.repository.UserRepository;
import com.hungnghia.springbootbackend.repository.VocabularyTopicRepository;
import com.hungnghia.springbootbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CommentConverter {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VocabularyTopicRepository vocabularyTopicRepository;
    @Autowired
    private LessonRepository lessonRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserService userService;

    public CommentEntity toEntity(CommentDto commentDto) {
        CommentEntity commentEntity = new CommentEntity();
        if (commentDto.getId() != null) {
            commentEntity.setId(commentDto.getId());
        }
        commentEntity.setContent(commentDto.getContent());
        commentEntity.setTime(commentDto.getTime());
        commentEntity.setType(commentDto.getType());

        UserEntity user = userRepository.getById(commentDto.getUserId());
        if (user != null) {
            commentEntity.setUserEntity(user);
        }
        if (commentDto.getGrammarId() !=null) {
            //commentEntity.setGrammarEntity();
        }

        if (commentDto.getVocabularyTopicId() != null) {
            VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicRepository.getById(commentDto.getVocabularyTopicId());
            commentEntity.setVocabularyTopicEntity(vocabularyTopicEntity);
        }

        if (commentDto.getLessonId() != null) {
            LessonEntity lessonEntity = lessonRepository.getById(commentDto.getId());
            commentEntity.setLessonEntity(lessonEntity);
        }

        if (commentDto.getParentId() != null) {
            CommentEntity parent = commentRepository.getById(commentDto.getParentId());
            commentEntity.setCommentEntity(parent);

        }
        return commentEntity;
    }

    public CommentDto toDto(CommentEntity commentEntity) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(commentEntity.getId());
        commentDto.setContent(commentEntity.getContent());
        commentDto.setTime(commentEntity.getTime());
        commentDto.setType(commentEntity.getType());
        if (commentEntity.getCommentEntity()!=null) {
            commentDto.setParentId(commentEntity.getCommentEntity().getId());
        }
        //Grammar

        if (commentEntity.getLessonEntity() != null) {
            commentDto.setLessonId(commentEntity.getLessonEntity().getId());
        }
        if (commentEntity.getUserEntity() != null) {
            commentDto.setUserId(commentEntity.getId());

        }
        if (commentEntity.getVocabularyTopicEntity() != null) {
            commentDto.setVocabularyTopicId(commentEntity.getVocabularyTopicEntity().getId());
        }

        return commentDto;
    }

    public List<CommentDto> toListDto(List<CommentEntity> commentEntities) {
        List<CommentDto> lstCommentDto = new ArrayList<>();
        if (commentEntities != null) {
            for (CommentEntity t: commentEntities) {
                CommentDto commentDto = toDto(t);
                lstCommentDto.add(commentDto);
            }
        }
        return lstCommentDto;
    }
}
