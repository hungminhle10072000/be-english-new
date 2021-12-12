package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class LessonConverter {
    @Autowired
    private ChapterRepository chapterRepository;
    public LessonEntity toEntity(LessonDto lessonDto) {
        LessonEntity lessonEntity = new LessonEntity();
        lessonEntity.setId(lessonDto.getId());
        lessonEntity.setName(lessonDto.getName());
        lessonEntity.setNumPriority(lessonDto.getNumPriority());
        lessonEntity.setVideo(lessonDto.getVideo());
        ChapterEntity chapterEntity = chapterRepository.getById((long)lessonDto.getChapterId());
        lessonEntity.setChapterEntity(chapterEntity);
        return lessonEntity;
    }

    public LessonDto toDto(LessonEntity lessonEntity) {
        LessonDto lessonDto = new LessonDto();
        lessonDto.setId(lessonEntity.getId());
        lessonDto.setName(lessonEntity.getName());
        lessonDto.setNumPriority(lessonEntity.getNumPriority());
        lessonDto.setVideo(lessonEntity.getVideo());
        lessonDto.setChapterId(lessonEntity.getChapterEntity().getId());
        lessonDto.setChapterName(lessonEntity.getChapterEntity().getName());
        lessonDto.setCourseName(lessonEntity.getChapterEntity().getCourseEntity().getName());
        List<LessonEntity> lessonEntities = lessonEntity.getChapterEntity().getLessonEntityList();
        if (lessonEntities != null) {
            lessonDto.setNumLessonOfChapter(lessonEntities.size());
        } else {
            lessonDto.setNumLessonOfChapter(0);
        }

        return lessonDto;
    }

    public List<LessonDto> toListDtos(List<LessonEntity> lessonEntities) {
        List<LessonDto> lessons = new ArrayList<>();
        if (lessonEntities != null) {
            for (LessonEntity t:lessonEntities) {
                LessonDto lessonDto = toDto(t);
                lessons.add(lessonDto);
            }
        }
        return lessons;
    }
}
