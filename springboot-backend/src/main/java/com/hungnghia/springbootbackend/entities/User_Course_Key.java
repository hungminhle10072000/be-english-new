package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class User_Course_Key implements Serializable {

    @Column(name = "userId")
    private long userId;

    @Column(name = "courseId")
    private long courseId;
}
