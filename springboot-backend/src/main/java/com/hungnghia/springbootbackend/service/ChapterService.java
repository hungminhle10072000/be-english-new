package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.ChapterConverter;
import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private ChapterConverter chapterConverter;

    public ChapterDto addChapter(ChapterDto chapterDto) {
        ChapterEntity chapter = chapterConverter.toEntity(chapterDto);
        ChapterEntity chapterResult = chapterRepository.save(chapter);
        return chapterConverter.toDto(chapterResult);
    }

    public List<ChapterDto> getAllChapter() {
        List<ChapterEntity> lstChapter = chapterRepository.findAll();
        return chapterConverter.toListDto(lstChapter);
    }

    public ChapterDto updateChapter(ChapterDto newChapterDto) {
        ChapterEntity newChapterEntity = chapterConverter.toEntity(newChapterDto);
        ChapterEntity oldChapterEntity = chapterRepository.getById(newChapterDto.getId());

        if (newChapterEntity.getName() ==null) {
            newChapterEntity.setName(oldChapterEntity.getName());
        }
        if (newChapterEntity.getNumber() == 0) {
            newChapterEntity.setNumber(oldChapterEntity.getNumber());
        }
        if (newChapterEntity.getCourseEntity() ==null) {
            newChapterEntity.setCourseEntity(oldChapterEntity.getCourseEntity());
        }
        if (newChapterEntity.getLessonEntityList() ==null) {
            newChapterEntity.setLessonEntityList(oldChapterEntity.getLessonEntityList());
        }
        ChapterDto chapter = chapterConverter.toDto(newChapterEntity);
        return chapter;
    }
}