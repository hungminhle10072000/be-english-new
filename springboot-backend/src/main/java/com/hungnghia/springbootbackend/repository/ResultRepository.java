package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<ResultEntity,Long> {
    List<ResultEntity> findResultEntitiesByUserEntity_Id(Long userId);
    List<ResultEntity> findResultEntitiesByUserEntity_IdAndExerciseEntity_Id(Long userId,Long exerciseId);
    List<ResultEntity> findResultEntitiesByExerciseEntity_Id(Long exerciseId);
}
