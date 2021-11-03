package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.VocabularyTopicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VocabularyTopicRepository extends JpaRepository<VocabularyTopicEntity, Long> {
}
