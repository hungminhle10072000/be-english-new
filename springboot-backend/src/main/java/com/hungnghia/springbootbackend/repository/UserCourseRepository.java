package com.hungnghia.springbootbackend.repository;

import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.entities.User_Course_Entity;
import com.hungnghia.springbootbackend.entities.User_Course_Key;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCourseRepository extends JpaRepository<User_Course_Entity, User_Course_Key> {

}
