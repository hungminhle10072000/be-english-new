package com.hungnghia.springbootbackend.converter;

import com.amazonaws.services.workmail.model.UserRole;
import com.hungnghia.springbootbackend.dto.ResultDto;
import com.hungnghia.springbootbackend.dto.StatisticalDto;
import com.hungnghia.springbootbackend.entities.*;
import com.hungnghia.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StatisticalConverter {
  @Autowired
  private UserRepository userRepository;

  public StatisticalEntity toEntity(StatisticalDto statisticalDto) {
    StatisticalEntity statisticalEntity = new StatisticalEntity();
    if (statisticalDto != null) {
      if (statisticalDto.getUserId() !=null && statisticalDto.getUserId() != -1 && statisticalDto.getDateCreateDate() != null ) {
        Use_Statistical_Key useStatisticalKey = new Use_Statistical_Key();
        useStatisticalKey.setUserId(statisticalDto.getUserId());
        useStatisticalKey.setDateCreateId(statisticalDto.getDateCreateDate());
        statisticalEntity.setUse_statistical_key(useStatisticalKey);
        UserEntity userEntity = userRepository.getById(statisticalDto.getUserId());
        statisticalEntity.setUserEntity(userEntity);
      }
      statisticalEntity.setScore(statisticalDto.getScore());

    }
    return  statisticalEntity;
  }

  public StatisticalDto toDto(StatisticalEntity statisticalEntity) {
    StatisticalDto statisticalDto = new StatisticalDto();
    if (statisticalEntity != null) {
      Use_Statistical_Key useStatisticalKey = statisticalEntity.getUse_statistical_key();
      if (useStatisticalKey != null) {
        statisticalDto.setUserId(useStatisticalKey.getUserId());
        statisticalDto.setDateCreateDate(useStatisticalKey.getDateCreateId());
      }
      statisticalDto.setScore(statisticalEntity.getScore());
    }

    return statisticalDto;
  }

  public List<StatisticalDto> toListDtos(List<StatisticalEntity> statisticalEntities) {
    List<StatisticalDto> statisticalDtos = new ArrayList<>();
    if (statisticalEntities != null) {
      for (StatisticalEntity t:statisticalEntities) {
        StatisticalDto resultDto = toDto(t);
        statisticalDtos.add(resultDto);
      }
    }
    return statisticalDtos;
  }
}
