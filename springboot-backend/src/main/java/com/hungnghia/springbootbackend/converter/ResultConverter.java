package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ResultDto;
import com.hungnghia.springbootbackend.entities.ExerciseEntity;
import com.hungnghia.springbootbackend.entities.ResultEntity;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.repository.ExerciseRepository;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ResultConverter {
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private UserRepository userRepository;



    public ResultEntity toEntity(ResultDto resultDto) {
        ResultEntity resultEntity = new ResultEntity();
        if (resultDto != null) {
            if (resultDto.getId() !=null) {
                resultEntity.setId(resultDto.getId());
            }

            resultEntity.setCorrect_listen(resultDto.getCorrectListen());
            resultEntity.setCorrect_read(resultDto.getCorrectRead());
            if (resultDto.getExerciseId() !=null) {
                ExerciseEntity exercise = exerciseRepository.getById(resultDto.getExerciseId());
                resultEntity.setExerciseEntity(exercise);
            }
            if (resultDto.getUserId() !=null) {
                UserEntity user =userRepository.getById(resultDto.getUserId());
                resultEntity.setUserEntity(user);
            }
        }

        return resultEntity;
    }

    public ResultDto toDto(ResultEntity resultEntity) {
        ResultDto resultDto = new ResultDto();
        if (resultEntity != null) {
            resultDto.setId(resultEntity.getId());
            resultDto.setCorrectListen(resultEntity.getCorrect_listen());
            resultDto.setCorrectRead(resultEntity.getCorrect_read());
            resultDto.setTotalRight(resultEntity.getTotal_right());
            resultDto.setTotalWrong(resultEntity.getTotal_wrong());
            if (resultEntity.getUserEntity()!=null) {
                resultDto.setUserId(resultEntity.getUserEntity().getId());
            }
            if (resultEntity.getExerciseEntity() != null) {
                resultDto.setExerciseId(resultEntity.getExerciseEntity().getId());
            }
        }

        return resultDto;
    }

    public List<ResultDto> toListDtos(List<ResultEntity> resultEntities) {
        List<ResultDto> results = new ArrayList<>();
        if (resultEntities != null) {
            for (ResultEntity t:resultEntities) {
                ResultDto resultDto = toDto(t);
                results.add(resultDto);
            }
        }
        return results;
    }
}
