package com.hungnghia.springbootbackend.dto;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class StatisticalDto {
  private Long userId;
  @DateTimeFormat(pattern = "dd/MM/yyyy")
  private Date dateCreateDate;
  private Integer score;

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public Date getDateCreateDate() {
    return dateCreateDate;
  }

  public void setDateCreateDate(Date dateCreateDate) {
    this.dateCreateDate = dateCreateDate;
  }

  public Integer getScore() {
    return score;
  }

  public void setScore(Integer score) {
    this.score = score;
  }
}
