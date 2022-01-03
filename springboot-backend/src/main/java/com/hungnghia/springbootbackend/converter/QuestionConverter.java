package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.QuestionDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class QuestionConverter {

    @Autowired
    private LessonConverter lessonConverter;

    public QuestionEntity toEntity(QuestionDto questionDto) {
        QuestionEntity questionEntity = new QuestionEntity();
        questionEntity.setId(questionDto.getId());
        questionEntity.setCorrect_answer(questionDto.getCorrect_answer());
        questionEntity.setOption_1(questionDto.getOption_1());
        questionEntity.setOption_2(questionDto.getOption_2());
        questionEntity.setOption_3(questionDto.getOption_3());
        questionEntity.setOption_4(questionDto.getOption_4());
        return questionEntity;
    }

    public QuestionDto toDto(QuestionEntity questionEntity) {
        QuestionDto questionDto = new QuestionDto();
        questionDto.setId(questionEntity.getId());
        questionDto.setCorrect_answer(questionEntity.getCorrect_answer());
        questionDto.setOption_1(questionEntity.getOption_1());
        questionDto.setOption_2(questionEntity.getOption_2());
        questionDto.setOption_3(questionEntity.getOption_3());
        questionDto.setOption_4(questionEntity.getOption_4());
        questionDto.setContent_question(questionEntity.getContent_question());
        questionDto.setAudio(questionEntity.getAudio());
        questionDto.setParagraph(questionEntity.getParagraph());
        questionDto.setOrdinal_number(questionDto.getOrdinal_number());
        questionDto.setType(questionDto.getType());
        if (questionEntity.getLessonEntity()!=null) {
            questionDto.setLessonDto(lessonConverter.toDto(questionEntity.getLessonEntity()));
        }
        if (questionEntity.getExerciseEntity() !=null) {
            //Sửa lại
            questionDto.setExerciseId(questionEntity.getExerciseEntity().getId());
        }

        return questionDto;
    }

    public List<QuestionDto> toListDtos(List<QuestionEntity> questionEntities) {
        List<QuestionDto> questions = new ArrayList<>();
        if (questionEntities != null) {
            for (QuestionEntity t:questionEntities) {
                QuestionDto questionDto = toDto(t);
                questions.add(questionDto);
            }
        }
        return questions;
    }

}
