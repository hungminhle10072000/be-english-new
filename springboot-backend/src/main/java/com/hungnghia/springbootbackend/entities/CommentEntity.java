package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Comment")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private Date time;

    @Column(name = "type")
    private String type;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "grammer_id")
    private GrammarEntity grammarEntity;

    @ManyToOne
    @JoinColumn(name = "vocabulary_topic_id")
    private VocabularyTopicEntity vocabularyTopicEntity;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private LessonEntity lessonEntity;

    @OneToOne
    @JoinColumn(name = "parent_id")
    private CommentEntity commentEntity;
}
