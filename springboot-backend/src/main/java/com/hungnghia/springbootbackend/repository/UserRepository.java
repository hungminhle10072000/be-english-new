package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);
    UserEntity findByEmail(String email);

    @Query("from UserEntity u where u.username = ?1 and u.email = ?2")
    UserEntity checkUsernameEmail(String username, String email);
}
