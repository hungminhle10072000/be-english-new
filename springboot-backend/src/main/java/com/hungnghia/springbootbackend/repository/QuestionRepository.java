package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionEntity,Long> {
    List<QuestionEntity> findQuestionEntityByExerciseEntity_Id(Long exerciseId);
}
