package com.hungnghia.springbootbackend.dto;

import lombok.Data;

@Data
public class VocabularyUpdateDto {

    private String content;
    private String example_vocabulary;
    private String explain_vocabulary;
    private String file_audio;
    private Long id;
    private String image;
    private String mean;
    private String mean_example_vocabulary;
    private String transcribe;

}
