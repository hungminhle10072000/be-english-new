package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.QuestionConverter;
import com.hungnghia.springbootbackend.converter.ResultDetailConverter;
import com.hungnghia.springbootbackend.dto.*;
import com.hungnghia.springbootbackend.entities.ExerciseEntity;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionConverter questionConverter;

    @Autowired
    private ExerciseService exerciseService;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AmazonClient amazonClient;

    public List<QuestionRes> findQuestionByExerciseId(Long exerciseId) {

        List<QuestionEntity> questionEntities = questionRepository.findQuestionEntityByExerciseEntity_Id(exerciseId);
        List<QuestionRes> data = new ArrayList<>();
        if (questionEntities != null) {
            for (QuestionEntity question : questionEntities) {
                QuestionRes questionRes = new QuestionRes();
                List<String> choices = new ArrayList<>();
                questionRes.setId(question.getId());
                questionRes.setQuestion(question.getContent_question());
                choices.add(question.getOption_1());
                choices.add(question.getOption_2());
                choices.add(question.getOption_3());
                choices.add(question.getOption_4());
                questionRes.setChoices(choices);
                questionRes.setAnswer(question.getCorrect_answer());
                questionRes.setAudio(question.getAudio());
                questionRes.setImageDescription(question.getImage_description());
                questionRes.setType(question.getType());
                questionRes.setExerciseId(question.getExerciseEntity() != null ? question.getExerciseEntity().getId() : -1);
                questionRes.setLessionId(question.getLessonEntity() != null ? question.getLessonEntity().getId() : -1);
                data.add(questionRes);
            }
        }
        return data;
    }

    public List<QuestionEntity> adminGetAllQuesttionWithExercise(Long exerciseId) {
        return questionRepository.findQuestionEntityByExerciseEntity_Id(exerciseId);
    }

    public boolean deleteQuestion(Long id) {
        QuestionEntity questionEntity = getQuestionById(id);
        try {
            questionRepository.delete(questionEntity);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    public QuestionEntity getQuestionById(Long id) {
        return questionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại câu hỏi với id: " + id));
    }

    public QuestionEntity addQuestion(QuestionReadAddDto questionReadAddDto) {
        try {
            QuestionEntity questionAddEntity = new QuestionEntity();
            questionAddEntity.setContent_question(questionReadAddDto.getContent_question());
            questionAddEntity.setCorrect_answer(questionReadAddDto.getCorrect_answer());
            questionAddEntity.setOption_1(questionReadAddDto.getOption_1());
            questionAddEntity.setOption_2(questionReadAddDto.getOption_2());
            questionAddEntity.setOption_3(questionReadAddDto.getOption_3());
            questionAddEntity.setOption_4(questionReadAddDto.getOption_4());
            questionAddEntity.setOrdinal_number(0);
            questionAddEntity.setParagraph(questionReadAddDto.getParagraph());
            ExerciseEntity exerciseEntity = exerciseService.getExerciseEntityById(questionReadAddDto.getIdExercise());
            questionAddEntity.setExerciseEntity(exerciseEntity);
            questionAddEntity.setType(3);
            return questionRepository.save(questionAddEntity);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public QuestionEntity addQuestionListen(QuestionListenAddDto questionListenAddDto, MultipartFile fileImage, MultipartFile fileAudio) {
        try {
            QuestionEntity questionEntity = new QuestionEntity();
            questionEntity.setContent_question(questionListenAddDto.getContent_question());
            questionEntity.setCorrect_answer(questionListenAddDto.getCorrect_answer());
            questionEntity.setOption_1(questionListenAddDto.getOption_1());
            questionEntity.setOption_2(questionListenAddDto.getOption_2());
            questionEntity.setOption_3(questionListenAddDto.getOption_3());
            questionEntity.setOption_4(questionListenAddDto.getOption_4());
            questionEntity.setOrdinal_number(0);
            ExerciseEntity exerciseEntity = exerciseService.getExerciseEntityById(questionListenAddDto.getIdExercise());
            questionEntity.setExerciseEntity(exerciseEntity);
            if (fileImage != null) {
                String urlImage = amazonClient.uploadFile(fileImage);
                questionEntity.setImage_description(urlImage);
                questionEntity.setType(1);
            } else {
                questionEntity.setType(2);
            }
            String urlAudio = amazonClient.uploadFile(fileAudio);
            questionEntity.setAudio(urlAudio);
            return questionRepository.save(questionEntity);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public QuestionEntity updateQuestion(Long id, QuestionReadAddDto questionReadUpdateDto) {
        try {
            QuestionEntity questionUpdateEntity = getQuestionById(id);
            questionUpdateEntity.setContent_question(questionReadUpdateDto.getContent_question());
            questionUpdateEntity.setCorrect_answer(questionReadUpdateDto.getCorrect_answer());
            questionUpdateEntity.setOption_1(questionReadUpdateDto.getOption_1());
            questionUpdateEntity.setOption_2(questionReadUpdateDto.getOption_2());
            questionUpdateEntity.setOption_3(questionReadUpdateDto.getOption_3());
            questionUpdateEntity.setOption_4(questionReadUpdateDto.getOption_4());
            questionUpdateEntity.setParagraph(questionReadUpdateDto.getParagraph());
            return questionRepository.save(questionUpdateEntity);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

}
