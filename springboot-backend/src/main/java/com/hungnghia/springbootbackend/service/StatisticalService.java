package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.StatisticalConverter;
import com.hungnghia.springbootbackend.dto.StatisticalDto;
import com.hungnghia.springbootbackend.entities.StatisticalEntity;
import com.hungnghia.springbootbackend.repository.StatisticalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class StatisticalService {
  @Autowired
  private StatisticalRepository statisticalRepository;
  @Autowired
  private StatisticalConverter statisticalConverter;
  public StatisticalDto addStatistical(StatisticalDto statisticalDto) {
    if (statisticalDto.getDateCreateDate() == null) {
      statisticalDto.setDateCreateDate(new Date());
    }
    StatisticalEntity statisticalEntity = statisticalConverter.toEntity(statisticalDto);
    StatisticalEntity statisticalRes = statisticalRepository.save(statisticalEntity);
    return statisticalConverter.toDto(statisticalRes);
  }
}
