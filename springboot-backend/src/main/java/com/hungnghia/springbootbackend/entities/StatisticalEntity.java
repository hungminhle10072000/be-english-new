package com.hungnghia.springbootbackend.entities;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Statistical")
public class StatisticalEntity {

    @Id
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dateCreate;

    @Column
    private int score;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;
}
