package com.hungnghia.springbootbackend.entities;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table
public class DateWriteEntity {

    @Id
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dateCreate;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "dateWriteEntity")
    private List<StatisticalEntity> statisticalEntityList;
}
