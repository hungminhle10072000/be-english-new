package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
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
    @JsonManagedReference
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "grammer_id")
    @JsonManagedReference
    private GrammarEntity grammarEntity;

    @ManyToOne
    @JoinColumn(name = "vocabulary_topic_id")
    @JsonIgnore
    private VocabularyTopicEntity vocabularyTopicEntity;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    @JsonIgnore
    private LessonEntity lessonEntity;

    @OneToOne
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private CommentEntity commentEntity;
}
