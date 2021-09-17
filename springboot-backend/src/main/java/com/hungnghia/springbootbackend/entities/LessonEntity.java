package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "Lesson")
public class LessonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "number")
    private int number;

    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private ChapterEntity chapterEntity;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lessonEntity", cascade = CascadeType.ALL)
    private Set<CommentEntity> commentEntitySet;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lessonEntity", cascade = CascadeType.ALL)
    private Set<QuestionEntity> questionEntitySet;
}
