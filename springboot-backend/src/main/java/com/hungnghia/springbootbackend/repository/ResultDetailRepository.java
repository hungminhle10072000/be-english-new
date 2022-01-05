package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.entities.ResultDetail_Key;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultDetailRepository extends JpaRepository<ResultDetailEntity, ResultDetail_Key> {
}
