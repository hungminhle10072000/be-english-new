package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Result")
public class ResultEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "correct_listen")
    private String correct_listen;

    @Column(name = "correct_read")
    private String correct_read;

    @Column(name = "total_right")
    private int total_right;

    @Column(name = "total_wrong")
    private int total_wrong;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "excercise_id")
    private ExerciseEntity exerciseEntity;
}
