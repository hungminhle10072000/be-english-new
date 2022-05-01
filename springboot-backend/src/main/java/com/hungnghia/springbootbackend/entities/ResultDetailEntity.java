package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ResultDetail")
public class ResultDetailEntity {

    @EmbeddedId
    ResultDetail_Key id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private UserEntity userEntity;

    @ManyToOne
    @MapsId("questionId")
    @JoinColumn(name = "questionId")
    @JsonIgnore
    private QuestionEntity questionEntity;

    @Column(name = "user_answer")
    private String user_answer;

    @Column(name = "correct_answer")
    private String correct_answer;
}
