package com.hungnghia.springbootbackend.dto;

import java.util.List;

public class QuestionDto {
    private long id;
    private String correct_answer;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;

    private String content_question;
    private String audio;
    private String paragraph;
    private int ordinal_number;
    private int type;
    private LessonDto lessonDto;
    private ExerciseDto exerciseDto;
    private long exerciseId;
    private List<ResultDetailDto> resultDetailDtoList;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCorrect_answer() {
        return correct_answer;
    }

    public void setCorrect_answer(String correct_answer) {
        this.correct_answer = correct_answer;
    }

    public String getOption_1() {
        return option_1;
    }

    public void setOption_1(String option_1) {
        this.option_1 = option_1;
    }

    public String getOption_2() {
        return option_2;
    }

    public void setOption_2(String option_2) {
        this.option_2 = option_2;
    }

    public String getOption_3() {
        return option_3;
    }

    public void setOption_3(String option_3) {
        this.option_3 = option_3;
    }

    public String getOption_4() {
        return option_4;
    }

    public void setOption_4(String option_4) {
        this.option_4 = option_4;
    }

    public String getContent_question() {
        return content_question;
    }

    public void setContent_question(String content_question) {
        this.content_question = content_question;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public String getParagraph() {
        return paragraph;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }

    public int getOrdinal_number() {
        return ordinal_number;
    }

    public void setOrdinal_number(int ordinal_number) {
        this.ordinal_number = ordinal_number;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public LessonDto getLessonDto() {
        return lessonDto;
    }

    public void setLessonDto(LessonDto lessonDto) {
        this.lessonDto = lessonDto;
    }

    public ExerciseDto getExerciseDto() {
        return exerciseDto;
    }

    public void setExerciseDto(ExerciseDto exerciseDto) {
        this.exerciseDto = exerciseDto;
    }

    public long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(long exerciseId) {
        this.exerciseId = exerciseId;
    }

    public List<ResultDetailDto> getResultDetailDtoList() {
        return resultDetailDtoList;
    }

    public void setResultDetailDtoList(List<ResultDetailDto> resultDetailDtoList) {
        this.resultDetailDtoList = resultDetailDtoList;
    }
}
