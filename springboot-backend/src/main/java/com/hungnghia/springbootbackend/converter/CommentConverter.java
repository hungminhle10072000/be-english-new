package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.*;
import com.hungnghia.springbootbackend.repository.*;
import com.hungnghia.springbootbackend.service.LessonService;
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
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private LessonService lessonService;
    @Autowired
    private GrammarRepository grammarRepository;

    public CommentEntity toEntity(CommentDto commentDto) {
        CommentEntity commentEntity = new CommentEntity();
        if (commentDto.getId() != null && commentDto.getId() != -1) {
            commentEntity.setId(commentDto.getId());
        }
        commentEntity.setContent(commentDto.getContent());
        commentEntity.setTime(commentDto.getTime());
        commentEntity.setType(commentDto.getType());

        UserEntity user = userRepository.getById(commentDto.getUserId());
        if (user != null && user.getId() != -1) {
            commentEntity.setUserEntity(user);
        }
        if (commentDto.getGrammarId() !=null && commentDto.getGrammarId() != -1) {
            GrammarEntity grammarEntity = grammarRepository.getById(commentDto.getGrammarId());
            commentEntity.setGrammarEntity(grammarEntity);
        }

        if (commentDto.getVocabularyTopicId() != null && commentDto.getVocabularyTopicId() != -1) {
            VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicRepository.getById(commentDto.getVocabularyTopicId());
            commentEntity.setVocabularyTopicEntity(vocabularyTopicEntity);
        }

        if (commentDto.getLessonId() != null && commentDto.getLessonId() != -1) {
            LessonEntity lessonEntity = lessonRepository.getById(commentDto.getLessonId());
            commentEntity.setLessonEntity(lessonEntity);
        }

        if (commentDto.getParentId() != null && commentDto.getParentId() != -1) {
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
        if (commentEntity.getGrammarEntity() !=null ) {
            commentDto.setGrammarId(commentEntity.getGrammarEntity().getId());
        }

        if (commentEntity.getLessonEntity() != null) {
            LessonDto lessonDto = lessonService.getLessonById(commentEntity.getLessonEntity().getId());
            commentDto.setLessonId(commentEntity.getLessonEntity().getId());
            commentDto.setLessonDto(lessonDto);
        }
        if (commentEntity.getUserEntity() != null) {
            commentDto.setUserId(commentEntity.getUserEntity().getId());

        }
        if (commentEntity.getVocabularyTopicEntity() != null) {
            commentDto.setVocabularyTopicId(commentEntity.getVocabularyTopicEntity().getId());
        }

        UserEntity user = commentEntity.getUserEntity();
        if (user != null) {
            commentDto.setUserDto(userConverter.toDto(user));
        }

        return commentDto;
    }

    public CommentDto toDtoIgnore(CommentEntity commentEntity) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(commentEntity.getId());
        commentDto.setContent(commentEntity.getContent());
        commentDto.setTime(commentEntity.getTime());
        commentDto.setType(commentEntity.getType());
        if (commentEntity.getCommentEntity()!=null) {
            commentDto.setParentId(commentEntity.getCommentEntity().getId());
        }
        //Grammar
        if (commentEntity.getGrammarEntity() != null ) {
            commentDto.setGrammarId(commentEntity.getGrammarEntity().getId());
        }

        if (commentEntity.getUserEntity() != null) {
            commentDto.setUserId(commentEntity.getUserEntity().getId());

        }
        if (commentEntity.getVocabularyTopicEntity() != null) {
            commentDto.setVocabularyTopicId(commentEntity.getVocabularyTopicEntity().getId());
        }

        UserEntity user = commentEntity.getUserEntity();
        if (user != null) {
            commentDto.setUserDto(userConverter.toDto(user));
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

    public List<CommentDto> toListDtoIgnore(List<CommentEntity> commentEntities) {
        List<CommentDto> lstCommentDto = new ArrayList<>();
        if (commentEntities != null) {
            for (CommentEntity t: commentEntities) {
                CommentDto commentDto = toDtoIgnore(t);
                lstCommentDto.add(commentDto);
            }
        }
        return lstCommentDto;
    }
}
