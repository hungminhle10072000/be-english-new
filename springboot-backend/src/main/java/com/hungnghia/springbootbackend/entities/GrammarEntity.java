package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "Grammar")
public class GrammarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "image")
    private String image;

    @Column(name = "content")
    private String content;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "grammarEntity", cascade = CascadeType.ALL)
    private Set<CommentEntity> commentEntitySet;
}
