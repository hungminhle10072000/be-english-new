package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.VocabularyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VocabularyRepository extends JpaRepository<VocabularyEntity, Long> {

    @Query("select u from VocabularyEntity u where u.vocabularyTopicEntity.id = ?1")
    List<VocabularyEntity> findVocabularyByTopic(Long id);
}
