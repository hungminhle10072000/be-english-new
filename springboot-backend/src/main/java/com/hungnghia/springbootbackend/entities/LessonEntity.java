package com.hungnghia.springbootbackend.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "Lesson")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class)
public class LessonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "numPriority")
    private int numPriority;

    @Column(name = "video")
    private String video;

    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private ChapterEntity chapterEntity;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lessonEntity", cascade = CascadeType.ALL)
    private List<CommentEntity> commentEntityList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lessonEntity", cascade = CascadeType.ALL)
    private List<QuestionEntity> questionEntityList;
}
