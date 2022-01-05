package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ResultDetailDto;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.entities.ResultDetail_Key;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.repository.QuestionRepository;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ResultDetailConverter {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private UserRepository userRepository;


    public ResultDetailEntity toEntity(ResultDetailDto resultDetailDto) {
        ResultDetailEntity resultDetailEntity = new ResultDetailEntity();
        UserEntity user = userRepository.getById(resultDetailDto.getUserId());
        QuestionEntity question = questionRepository.getById(resultDetailDto.getQuestionId());

        ResultDetail_Key key = new ResultDetail_Key();
        key.setUserId(user.getId());
        key.setQuestionId(question.getId());
        resultDetailEntity.setId(key);
        resultDetailEntity.setUserEntity(user);
        resultDetailEntity.setQuestionEntity(question);
        resultDetailEntity.setCorrect_answer(question.getCorrect_answer());
        resultDetailEntity.setUser_answer(resultDetailDto.getUserAnswer());
        return resultDetailEntity;
    }

    public ResultDetailDto toDto(ResultDetailEntity resultDetailEntity) {
        ResultDetailDto resultDetailDto = new ResultDetailDto();
        resultDetailDto.setUserId(resultDetailEntity.getUserEntity().getId());
        resultDetailDto.setQuestionId(resultDetailEntity.getQuestionEntity().getId());
        resultDetailDto.setUserAnswer(resultDetailEntity.getUser_answer());
        resultDetailDto.setCorrectAnswer(resultDetailEntity.getCorrect_answer());
        return resultDetailDto;
    }

    public List<ResultDetailDto> toListDtos(List<ResultDetailEntity> resultDetailEntities) {
        List<ResultDetailDto> resultDetails = new ArrayList<>();
        if (resultDetailEntities != null) {
            for (ResultDetailEntity t:resultDetailEntities) {
                ResultDetailDto resultDetailDto = toDto(t);
                resultDetails.add(resultDetailDto);
            }
        }
        return resultDetails;
    }
}
