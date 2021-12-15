package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "Question")
public class QuestionEntity {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    @Column(name = "correct_answer")
    private String correct_answer;

    @Column(name = "option_1")
    private String option_1;

    @Column(name = "option_2")
    private String option_2;

    @Column(name = "option_3")
    private String option_3;

    @Column(name = "option_4")
    private String option_4;

    @Column(name = "content_question")
    private String content_question;

    @Column(name = "audio")
    private String audio;

    @Column(name = "paragraph")
    private String paragraph;

    @Column(name = "ordinal_number")
    private int ordinal_number;

    @Column(name = "type")
    private String type;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private LessonEntity lessonEntity;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private ExerciseEntity exerciseEntity;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "questionEntity")
    @JsonIgnore
    private List<ResultDetailEntity> resultDetailEntityList;
}
