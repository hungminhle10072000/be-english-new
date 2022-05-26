package com.hungnghia.springbootbackend.dto;

import java.util.List;

public class StatisticalMasterDto {
  private List<StatisticalDto> statisticalDtoList;
  private String fullname;
  private double process;
  private int streak;

  public StatisticalMasterDto() {
    this.process = 0.0;
    this.streak = 0;
  }

  public List<StatisticalDto> getStatisticalDtoList() {
    return statisticalDtoList;
  }

  public void setStatisticalDtoList(List<StatisticalDto> statisticalDtoList) {
    this.statisticalDtoList = statisticalDtoList;
  }

  public String getFullname() {
    return fullname;
  }

  public void setFullname(String fullname) {
    this.fullname = fullname;
  }

  public double getProcess() {
    return process;
  }

  public void setProcess(double process) {
    this.process = process;
  }

  public int getStreak() {
    return streak;
  }

  public void setStreak(int streak) {
    this.streak = streak;
  }
}
