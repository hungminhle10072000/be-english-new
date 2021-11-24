package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "Grammar")
public class GrammarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "image")
    private String image;

    @Column(name = "content", length = 65535, columnDefinition="Text")
    private String content;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "grammarEntity", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<CommentEntity> commentEntityList;
}
