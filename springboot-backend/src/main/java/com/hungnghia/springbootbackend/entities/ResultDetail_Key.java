package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class ResultDetail_Key implements Serializable {

    @Column(name = "userId")
    private long userId;

    @Column(name = "questionId")
    private long questionId;

}
