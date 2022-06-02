package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.CommentDto;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.entities.*;
import com.hungnghia.springbootbackend.repository.ChapterRepository;
import com.hungnghia.springbootbackend.repository.ExerciseRepository;
import com.hungnghia.springbootbackend.repository.GrammarRepository;
import com.hungnghia.springbootbackend.repository.VocabularyTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class LessonConverter {
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private GrammarRepository grammarRepository;
    @Autowired
    private VocabularyTopicRepository vocabularyTopicRepository;
    @Autowired
    private CommentConverter commentConverter;
    public LessonEntity toEntity(LessonDto lessonDto) {
        LessonEntity lessonEntity = new LessonEntity();
        lessonEntity.setId(lessonDto.getId());
        lessonEntity.setName(lessonDto.getName());
        lessonEntity.setNumPriority(lessonDto.getNumPriority());
        lessonEntity.setVideo(lessonDto.getVideo());
        ChapterEntity chapterEntity = chapterRepository.getById((long)lessonDto.getChapterId());
        lessonEntity.setChapterEntity(chapterEntity);
        if (lessonDto.getExerciseId() != null && lessonDto.getExerciseId() > 0) {
            ExerciseEntity exerciseEntity = exerciseRepository.getById(lessonDto.getExerciseId());
            lessonEntity.setExerciseEntity(exerciseEntity);
        }
        if (lessonDto.getGrammarId() != null && lessonDto.getGrammarId() > 0) {
            GrammarEntity grammarEntity = grammarRepository.getById(lessonDto.getGrammarId());
            lessonEntity.setGrammarEntity(grammarEntity);
        }
        if (lessonDto.getVocabularyTopicId() != null && lessonDto.getVocabularyTopicId() > 0) {
            VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicRepository.getById(lessonDto.getVocabularyTopicId());
            lessonEntity.setVocabularyTopicEntity(vocabularyTopicEntity);
        }
        return lessonEntity;
    }

    public LessonDto toDto(LessonEntity lessonEntity) {
        LessonDto lessonDto = new LessonDto();
        lessonDto.setId(lessonEntity.getId());
        lessonDto.setName(lessonEntity.getName());
        lessonDto.setNumPriority(lessonEntity.getNumPriority());
        lessonDto.setVideo(lessonEntity.getVideo());
        lessonDto.setChapterId(lessonEntity.getChapterEntity().getId());
        lessonDto.setChapterName(lessonEntity.getChapterEntity().getName());
        lessonDto.setCourseName(lessonEntity.getChapterEntity().getCourseEntity().getName());
        lessonDto.setCourseId(lessonEntity.getChapterEntity().getCourseEntity().getId());
        if (lessonEntity.getGrammarEntity() !=null) {
            lessonDto.setGrammarId(lessonEntity.getGrammarEntity().getId());
        }
        if (lessonEntity.getExerciseEntity() !=null) {
            lessonDto.setExerciseId(lessonEntity.getExerciseEntity().getId());
        }
        if (lessonEntity.getVocabularyTopicEntity() !=null) {
            lessonDto.setVocabularyTopicId(lessonEntity.getVocabularyTopicEntity().getId());
        }
        List<LessonEntity> lessonEntities = lessonEntity.getChapterEntity().getLessonEntityList();
        if (lessonEntities != null) {
            lessonDto.setNumLessonOfChapter(lessonEntities.size());
        } else {
            lessonDto.setNumLessonOfChapter(0);
        }
        List<CommentEntity> commentEntities = lessonEntity.getCommentEntityList();
        if (commentEntities != null && commentEntities.size() > 0) {
            List<CommentDto> commentDtos = commentConverter.toListDtoIgnore(commentEntities);
            lessonDto.setCommentDtos(commentDtos);
        }
        return lessonDto;
    }

    public List<LessonDto> toListDtos(List<LessonEntity> lessonEntities) {
        List<LessonDto> lessons = new ArrayList<>();
        if (lessonEntities != null) {
            for (LessonEntity t:lessonEntities) {
                LessonDto lessonDto = toDto(t);
                lessons.add(lessonDto);
            }
        }
        return lessons;
    }
}
