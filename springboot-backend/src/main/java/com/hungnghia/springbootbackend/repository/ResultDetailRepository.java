package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.entities.ResultDetail_Key;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultDetailRepository extends JpaRepository<ResultDetailEntity, ResultDetail_Key> {
    List<ResultDetailEntity> findResultDetailEntitiesByUserEntity_IdAndQuestionEntity_ExerciseEntity_Id(Long userId, Long exerciseId);
}
