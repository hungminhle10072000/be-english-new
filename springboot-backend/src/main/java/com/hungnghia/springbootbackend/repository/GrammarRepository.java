package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.GrammarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrammarRepository extends JpaRepository<GrammarEntity, Long> {
}
