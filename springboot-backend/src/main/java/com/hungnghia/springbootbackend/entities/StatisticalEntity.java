package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;

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
    @JsonIgnore
    private UserEntity userEntity;

}
