package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.StatisticalConverter;
import com.hungnghia.springbootbackend.dto.StatisticalDto;
import com.hungnghia.springbootbackend.entities.StatisticalEntity;
import com.hungnghia.springbootbackend.entities.Use_Statistical_Key;
import com.hungnghia.springbootbackend.repository.StatisticalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.*;

@Component
public class StatisticalService {
  @Autowired
  private StatisticalRepository statisticalRepository;
  @Autowired
  private StatisticalConverter statisticalConverter;

  public List<StatisticalDto> findStatisticalOfMonthByUserId(long userId) {
    List<StatisticalEntity> statisticalEntitiesOfMonth = new ArrayList<>();
    List<StatisticalEntity> statisticalEntities = statisticalRepository.findStatisticalEntitiesByUserEntity_Id(userId);
    if (statisticalEntities != null && statisticalEntities.size() > 0) {
      for (int i=0 ;i < statisticalEntities.size();i++) {
        if (statisticalEntities.get(i).getUse_statistical_key().getDateCreateId().getMonth() == new Date().getMonth() &&
                statisticalEntities.get(i).getUse_statistical_key().getDateCreateId().getYear() == new Date().getYear()) {
          statisticalEntitiesOfMonth.add(statisticalEntities.get(i));
        }
      }
    }
    List<StatisticalDto> statisticalDtos = new ArrayList<>();
    if (statisticalEntitiesOfMonth.size() > 0) {
      statisticalDtos = statisticalConverter.toListDtos(statisticalEntitiesOfMonth);
    }
    return statisticalDtos;
  }

  public StatisticalDto addScore(StatisticalDto statisticalDto) {
    StatisticalEntity statisticalRes = null;
    if (statisticalDto.getDateCreateDate() == null) {
      statisticalDto.setDateCreateDate(new Date(System.currentTimeMillis()/(24*60*60*1000)*(24*60*60*1000)));
    }
    StatisticalEntity statisticalEntity = statisticalConverter.toEntity(statisticalDto);
    if (statisticalEntity != null) {
      Use_Statistical_Key statisticalKey = statisticalEntity.getUse_statistical_key();
      Optional<StatisticalEntity> existStatisticalOptional = statisticalRepository.findById(statisticalKey);

      if (existStatisticalOptional.isPresent()) {
        StatisticalEntity existStatistical = existStatisticalOptional.get();
        existStatistical.setScore(existStatistical.getScore()+statisticalDto.getScore());
        statisticalRes = statisticalRepository.save(existStatistical);
      } else {
        statisticalRes = statisticalRepository.save(statisticalEntity);
      }
    }
    return statisticalConverter.toDto(statisticalRes);
  }
  public StatisticalDto addStatistical(StatisticalDto statisticalDto) {
    if (statisticalDto.getDateCreateDate() == null) {
        statisticalDto.setDateCreateDate(new Date(System.currentTimeMillis()/(24*60*60*1000)*(24*60*60*1000)));
    }
    StatisticalEntity statisticalEntity = statisticalConverter.toEntity(statisticalDto);
    StatisticalEntity statisticalRes = statisticalRepository.save(statisticalEntity);
    return statisticalConverter.toDto(statisticalRes);
  }
  private Date getStartOfDay(Date date) {
    Calendar calendar = Calendar.getInstance();
    int year = calendar.get(Calendar.YEAR);
    int month = calendar.get(Calendar.MONTH);
    int day = calendar.get(Calendar.DATE);
    calendar.set(year, month, day, 0, 0, 0);
    return calendar.getTime();
  }
}
