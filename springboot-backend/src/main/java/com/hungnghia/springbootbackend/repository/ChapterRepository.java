package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.ChapterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterRepository extends JpaRepository<ChapterEntity,Long> {

}
