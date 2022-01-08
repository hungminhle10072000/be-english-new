package com.hungnghia.springbootbackend.dto;

import lombok.Data;

@Data
public class QuestionReadAddDto {

    private String content_question;
    private String correct_answer;
    private String paragraph;
    private String type;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private Long idExercise;

}
