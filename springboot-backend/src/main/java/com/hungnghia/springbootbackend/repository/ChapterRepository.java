package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.ChapterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<ChapterEntity,Long> {
    List<ChapterEntity> getChapterEntitiesByCourseEntity_Id(long courseId);
}
