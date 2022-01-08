package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.ResultDetailConverter;
import com.hungnghia.springbootbackend.dto.ResultDetailDto;
import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.repository.ResultDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultDetailService {
    @Autowired
    private ResultDetailConverter resultDetailConverter;
    @Autowired
    private ResultDetailRepository resultDetailRepository;

    public boolean addAnswers(List<ResultDetailDto> answers) {
        if (answers != null) {
            for (ResultDetailDto resultDetailDto : answers) {
                if (resultDetailDto != null) {
                    ResultDetailEntity resultDetailEntity = resultDetailConverter.toEntity(resultDetailDto);
                    resultDetailRepository.save(resultDetailEntity);
                }
            }
        }
        return true;
    }
    public List<ResultDetailDto> findResultDetailEntitiesByUserEntity_IdAndQuestionEntity_ExerciseEntity_Id(Long userId, Long exerciseId) {
        List<ResultDetailEntity> resultDetailEntities = resultDetailRepository.findResultDetailEntitiesByUserEntity_IdAndQuestionEntity_ExerciseEntity_Id(userId,exerciseId);
        List<ResultDetailDto> resultDetailDtos = resultDetailConverter.toListDtos(resultDetailEntities);
        return  resultDetailDtos;
    }
}
