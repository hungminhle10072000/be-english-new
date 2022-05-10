package com.hungnghia.springbootbackend.entities;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Statistical")
public class StatisticalEntity {

    @EmbeddedId
    Use_Statistical_Key use_statistical_key;

    @Column(name = "score")
    private int score;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private UserEntity userEntity;

}
