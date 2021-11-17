package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.LessonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<LessonEntity,Long> {
    List<LessonEntity> getLessonEntitiesByChapterEntity_Id(long chapterId);
}
