package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.VocabularyTopicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public interface VocabularyTopicRepository extends JpaRepository<VocabularyTopicEntity, Long> {
}
