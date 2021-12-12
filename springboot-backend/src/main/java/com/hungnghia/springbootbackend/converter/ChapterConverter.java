package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.repository.CourseRepository;
import com.hungnghia.springbootbackend.repository.LessonRepository;
import com.hungnghia.springbootbackend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ChapterConverter {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private LessonConverter lessonConverter;

    public ChapterEntity toEntity(ChapterDto chapterDto) {
        ChapterEntity chapterEntity = new ChapterEntity();
        chapterEntity.setId(chapterDto.getId());
        chapterEntity.setName(chapterDto.getName());
        chapterEntity.setNumber(chapterDto.getNumber());

        CourseEntity courseEntity = courseRepository.getById((long) chapterDto.getCourseId());

        chapterEntity.setCourseEntity(courseEntity);
        return chapterEntity;
    }

    public ChapterDto toDto(ChapterEntity chapterEntity) {
        ChapterDto chapterDto = new ChapterDto();
        chapterDto.setId(chapterEntity.getId());
        chapterDto.setName(chapterEntity.getName());
        chapterDto.setNumber(chapterEntity.getNumber());
        chapterDto.setCourseId((int)chapterEntity.getCourseEntity().getId());
        chapterDto.setCourseName(chapterEntity.getCourseEntity().getName());
        List<LessonEntity> lstLessonEntity = chapterEntity.getLessonEntityList();
        List<LessonDto> lessons = lessonConverter.toListDtos(lstLessonEntity);
        chapterDto.setLessons(lessons);

        if (lstLessonEntity !=null) {
            chapterDto.setNumOfLesson(lstLessonEntity.size());
        } else {
            chapterDto.setNumOfLesson(0);
        }
        /*if (lstLesson != null) {
            List<LessonDto> lessons = new ArrayList<>();
            for (LessonEntity t:lstLesson) {
                LessonDto lessonDto = lessonConverter.toDto(t);
                lessons.add(lessonDto);
            }
            chapterDto.setLessons(lessons);
        }*/
        return chapterDto;
    }

    public List<ChapterDto> toListDto(List<ChapterEntity> chapterEntities) {
        List<ChapterDto> lstChapterDto = new ArrayList<>();
        if (chapterEntities != null) {
            for (ChapterEntity t: chapterEntities) {
                ChapterDto chapterDto = toDto(t);
                lstChapterDto.add(chapterDto);
            }
        }
        return lstChapterDto;
    }
}
