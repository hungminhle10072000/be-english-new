package com.hungnghia.springbootbackend.dto;

import lombok.Data;

@Data
public class QuestionListenAddDto {

    private String content_question;
    private String correct_answer;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private Long idExercise;

}
