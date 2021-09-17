package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "User_Course")
public class User_Course_Entity {

    @EmbeddedId
    User_Course_Key id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private UserEntity userEntity;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "courseId")
    private CourseEntity courseEntity;

}
