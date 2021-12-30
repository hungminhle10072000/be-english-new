package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.entities.User_Course_Entity;
import com.hungnghia.springbootbackend.repository.ChapterRepository;
import com.hungnghia.springbootbackend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class CourseConverter {
    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    private ChapterConverter chapterConverter;
    @Autowired
    private UserConverter userConverter;
    public CourseEntity toEntity(CourseDto courseDto) {
        CourseEntity courseEntity = new CourseEntity();
        courseEntity.setId(courseDto.getId());
        courseEntity.setName(courseDto.getName());
        courseEntity.setImage(courseDto.getImage());
        courseEntity.setIntroduce(courseDto.getIntroduce());

        List<ChapterDto> lstChapterDto = courseDto.getChapters();
        if (lstChapterDto!= null) {
            List<ChapterEntity> lstChapterEntity = new ArrayList<>();
            for (ChapterDto t: lstChapterDto) {
                ChapterEntity chapterEntity = chapterConverter.toEntity(t);
                lstChapterEntity.add(chapterEntity);
            }
            courseEntity.setChapterEntityList(lstChapterEntity);
        }

//        List<UserDto> lstUserDto = courseDto.getUsers();
       // Add list user

        return courseEntity;
    }
    public CourseDto toDto(CourseEntity courseEntity) {
        CourseDto courseDto = new CourseDto();
        courseDto.setId(courseEntity.getId());
        courseDto.setName(courseEntity.getName());
        courseDto.setImage(courseEntity.getImage());
        courseDto.setIntroduce(courseEntity.getIntroduce());

        List<ChapterEntity> lstChapterEntity = chapterRepository.getChapterEntitiesByCourseEntity_Id(courseEntity.getId());
        List<ChapterDto> lstChapterDto = chapterConverter.toListDto(lstChapterEntity);
        if (lstChapterDto != null) {
            courseDto.setChapters(lstChapterDto);
            courseDto.setNumOfChapter(lstChapterDto.size());
        }


        /*if (lstChapterEntity != null) {
            List<ChapterDto> lstChapterDto = new ArrayList<>();
            for (ChapterEntity t: lstChapterEntity) {
                ChapterDto chapterDto = chapterConverter.toDto(t);
                lstChapterDto.add(chapterDto);
            }
            courseDto.setChapters(lstChapterDto);
        }*/

        // User Subscribe Course
        List<UserDto> lstUser = new ArrayList<>();
        if (courseEntity.getUser_course_entityList() != null) {
            for (User_Course_Entity item : courseEntity.getUser_course_entityList()) {
                lstUser.add(userConverter.toDto(item.getUserEntity()));
            }
        }
        courseDto.setUsers(lstUser);
        return courseDto;
    }
    public List<CourseDto> toListDto(List<CourseEntity> courseEntities) {
        List<CourseDto> courseDtos = new ArrayList<>();
        if (courseEntities != null) {
            for(CourseEntity t: courseEntities) {
                courseDtos.add(toDto(t));
            }
        }
        return courseDtos;
    }
}
