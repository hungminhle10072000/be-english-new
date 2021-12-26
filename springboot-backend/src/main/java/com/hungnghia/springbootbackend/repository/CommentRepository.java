package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.CommentEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity,Long> {
    List<CommentEntity> findCommentEntitiesByLessonEntity_Id(Long lessonId);
    List<CommentEntity> findCommentEntitiesByVocabularyTopicEntity_Id(Long vocabularyTopicId);
    List<CommentEntity> findCommentEntitiesByGrammarEntity_Id(Long grammarId);
}
