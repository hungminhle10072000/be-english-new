package com.hungnghia.springbootbackend.dto;

import lombok.Data;

@Data
public class VocabularyDto {
    private String content;
    private String transcribe;
    private String mean_example_vocabulary;
    private String mean;
    private String explain_vocabulary;
    private String example_vocabulary;
    private Long idVocabularyTopic;
}
