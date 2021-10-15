package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.LessonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<LessonEntity,Long> {
}
