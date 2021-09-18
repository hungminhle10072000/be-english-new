package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "VocabularyTopic")
public class VocabularyTopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "image")
    private String image;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "vocabularyTopicEntity", cascade = CascadeType.ALL)
    private List<CommentEntity> commentEntityList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "vocabularyTopicEntity", cascade = CascadeType.ALL)
    private List<VocabularyEntity> vocabularyEntityList;
}
