package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.QuestionConverter;
import com.hungnghia.springbootbackend.dto.QuestionDto;
import com.hungnghia.springbootbackend.dto.QuestionRes;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionConverter questionConverter;
    @Autowired
    private QuestionRepository questionRepository;
    public List<QuestionRes> findQuestionByExerciseId(Long exerciseId) {

        List<QuestionEntity> questionEntities = questionRepository.findQuestionEntityByExerciseEntity_Id(exerciseId);
        List<QuestionRes> data = new ArrayList<>();
        if (questionEntities !=null) {
            for (QuestionEntity question:questionEntities ) {
                QuestionRes questionRes = new QuestionRes();
                List<String> choices = new ArrayList<>();
                questionRes.setQuestion(question.getContent_question());
                choices.add(question.getOption_1());
                choices.add(question.getOption_2());
                choices.add(question.getOption_3());
                choices.add(question.getOption_4());
                questionRes.setChoices(choices);
                questionRes.setAnswer(question.getCorrect_answer());
                data.add(questionRes);
            }
        }
        return data;
    }
}
