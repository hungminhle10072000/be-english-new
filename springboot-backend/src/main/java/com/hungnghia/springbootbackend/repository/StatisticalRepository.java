package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.DateWriteEntity;
import com.hungnghia.springbootbackend.entities.StatisticalEntity;
import com.hungnghia.springbootbackend.entities.Use_Statistical_Key;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatisticalRepository extends JpaRepository<StatisticalEntity, Use_Statistical_Key> {
  List<StatisticalEntity> findStatisticalEntitiesByUserEntity_Id(Long userId);
}
