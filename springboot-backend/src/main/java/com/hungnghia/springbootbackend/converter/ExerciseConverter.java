package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ExerciseDto;
import com.hungnghia.springbootbackend.dto.QuestionDto;
import com.hungnghia.springbootbackend.dto.ResultDto;
import com.hungnghia.springbootbackend.entities.ExerciseEntity;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.entities.ResultEntity;
import com.hungnghia.springbootbackend.repository.ResultRepository;
import com.hungnghia.springbootbackend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExerciseConverter {
  @Autowired
  private QuestionConverter questionConverter;
  @Autowired
  private ResultRepository resultRepository;
  @Autowired
  private QuestionService questionService;
  @Autowired
  private ResultConverter resultConverter;

  public ExerciseEntity toEntity(ExerciseDto exerciseDto) {
    ExerciseEntity exerciseEntity = new ExerciseEntity();
    if (exerciseDto != null) {
      exerciseEntity.setId(exerciseDto.getId());
      exerciseEntity.setName(exerciseDto.getName());
      exerciseEntity.setImage(exerciseDto.getImage());
      exerciseEntity.setType(exerciseDto.getType());
      exerciseEntity.setDescription(exerciseDto.getDescription());
      List<QuestionDto> questions = exerciseDto.getQuestionDtoList();
      if (questions != null) {
        if (exerciseDto.getId() > 0) {
          List<QuestionEntity> questionsEntity = questionService.adminGetAllQuesttionWithExercise(exerciseDto.getId());
          exerciseEntity.setQuestionEntityList(questionsEntity);
        } else {
          exerciseEntity.setQuestionEntityList(null);
        }
      }
      List<ResultDto> resultDtos = exerciseDto.getResultDtoList();
      if (resultDtos != null && resultDtos.size() > 0) {
        if (exerciseDto.getId() > 0) {
          List<ResultEntity> resultEntities = resultRepository.findResultEntitiesByExerciseEntity_Id(exerciseDto.getId());
          exerciseEntity.setResultEntityList(resultEntities);
        }
      }
    }
    return exerciseEntity;
  }

  public ExerciseDto toDto(ExerciseEntity exerciseEntity) {
    ExerciseDto exerciseDto = new ExerciseDto();
    if (exerciseEntity != null) {
      exerciseDto.setId(exerciseEntity.getId());
      exerciseDto.setName(exerciseEntity.getName());
      exerciseDto.setImage(exerciseEntity.getImage());
      exerciseDto.setType(exerciseEntity.getType());
      exerciseDto.setDescription(exerciseEntity.getDescription());
      List<QuestionEntity> questionEntities = exerciseEntity.getQuestionEntityList();
      if (questionEntities != null) {
        List<QuestionDto> questionDtos = questionConverter.toListDtos(questionEntities);
        exerciseDto.setQuestionDtoList(questionDtos);
      }
      List<ResultEntity> resultEntities = exerciseEntity.getResultEntityList();
      if (resultEntities != null) {
        List<ResultDto> resultDtos = resultConverter.toListDtos(resultEntities);
        exerciseDto.setResultDtoList(resultDtos);
      }
    }
    return exerciseDto;
  }

  public List<ExerciseDto> toListDtos(List<ExerciseEntity> exerciseEntities) {
    List<ExerciseDto> exercises = new ArrayList<>();
    if (exerciseEntities != null) {
      for (ExerciseEntity t:exerciseEntities) {
        ExerciseDto exerciseDto = toDto(t);
        exercises.add(exerciseDto);
      }
    }
    return exercises;
  }
}
