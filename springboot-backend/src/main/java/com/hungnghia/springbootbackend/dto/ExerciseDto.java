package com.hungnghia.springbootbackend.dto;

import java.util.List;

public class ExerciseDto {
    private long id;
    private String name;
    private String image;
    private int type;
    private String description;
    private List<QuestionDto> questionDtoList;
    private List<ResultDto> resultDtoList;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<QuestionDto> getQuestionDtoList() {
        return questionDtoList;
    }

    public void setQuestionDtoList(List<QuestionDto> questionDtoList) {
        this.questionDtoList = questionDtoList;
    }

    public List<ResultDto> getResultDtoList() {
        return resultDtoList;
    }

    public void setResultDtoList(List<ResultDto> resultDtoList) {
        this.resultDtoList = resultDtoList;
    }
}
