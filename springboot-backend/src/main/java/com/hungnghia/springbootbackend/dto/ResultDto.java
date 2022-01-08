package com.hungnghia.springbootbackend.dto;

import org.springframework.stereotype.Component;

@Component
public class ResultDto {
    private Long id;
    private String correctListen;
    private String correctRead;
    private Integer totalRight;
    private Integer totalWrong;
    private Long userId;
    private Long exerciseId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCorrectListen() {
        return correctListen;
    }

    public void setCorrectListen(String correctListen) {
        this.correctListen = correctListen;
    }

    public String getCorrectRead() {
        return correctRead;
    }

    public void setCorrectRead(String correctRead) {
        this.correctRead = correctRead;
    }

    public Integer getTotalRight() {
        return totalRight;
    }

    public void setTotalRight(Integer totalRight) {
        this.totalRight = totalRight;
    }

    public Integer getTotalWrong() {
        return totalWrong;
    }

    public void setTotalWrong(Integer totalWrong) {
        this.totalWrong = totalWrong;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }
}
