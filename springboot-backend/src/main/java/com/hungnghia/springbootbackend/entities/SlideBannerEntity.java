package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "SlideBanner")
public class SlideBannerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "content")
    private String content;

}
