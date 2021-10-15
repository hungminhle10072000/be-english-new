package com.hungnghia.springbootbackend.converter;

import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.entities.CourseEntity;
import com.hungnghia.springbootbackend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class CourseConverter {

    @Autowired
    private ChapterConverter chapterConverter;

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

        return courseEntity;
    }

    public CourseDto toDto(CourseEntity courseEntity) {
        CourseDto courseDto = new CourseDto();
        courseDto.setId(courseEntity.getId());
        courseDto.setName(courseEntity.getName());
        courseDto.setImage(courseEntity.getImage());
        courseDto.setIntroduce(courseEntity.getIntroduce());

        List<ChapterEntity> lstChapterEntity = courseEntity.getChapterEntityList();
        List<ChapterDto> lstChapterDto = chapterConverter.toListDto(lstChapterEntity);
        courseDto.setChapters(lstChapterDto);
        /*if (lstChapterEntity != null) {
            List<ChapterDto> lstChapterDto = new ArrayList<>();
            for (ChapterEntity t: lstChapterEntity) {
                ChapterDto chapterDto = chapterConverter.toDto(t);
                lstChapterDto.add(chapterDto);
            }
            courseDto.setChapters(lstChapterDto);
        }*/
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
