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

    /*
    Delete Chapter:
    Với những chapter có numOfpriority > chapter bị xoá thì giảm 1;

    Update Chapter:
       + numOfPriority tăng: Giảm 1 với những chapter có numOfPriority > Olđ and numOfPriority <= New
       + numOfPriority giảm: Tăng 1 với những chapter có numOfPriority < Old and numOfPriority >= New
     */
    private void updateNumOfPriorityWhenDelete(ChapterEntity chapterEntity) {
        List<ChapterEntity> chapterEntities = chapterRepository.getChapterEntitiesByCourseEntity_IdAndNumPriorityGreaterThan(chapterEntity.getCourseEntity().getId(),chapterEntity.getNumPriority());
        if (chapterEntities != null) {
            for (ChapterEntity item : chapterEntities) {
                item.setNumPriority(item.getNumPriority()-1);
                chapterRepository.save(item);
            }
        }
    }
    private void updateNumOfPriorityWhenUpdate(ChapterEntity oldChapter, ChapterEntity newChapter) {
        if (newChapter.getNumPriority() - oldChapter.getNumPriority() > 0) {
            List<ChapterEntity> chapterEntities = chapterRepository.getChapterEntitiesByCourseEntity_IdAndNumPriorityGreaterThanAndNumPriorityLessThanEqual(oldChapter.getCourseEntity().getId(),oldChapter.getNumPriority(),newChapter.getNumPriority());
            if (chapterEntities != null) {
                for (ChapterEntity item : chapterEntities) {
                    item.setNumPriority(item.getNumPriority()-1);
                    chapterRepository.save(item);
                }
            }
        } else {
            List<ChapterEntity> chapterEntities = chapterRepository.getChapterEntitiesByCourseEntity_IdAndNumPriorityLessThanAndNumPriorityGreaterThanEqual(oldChapter.getCourseEntity().getId(),oldChapter.getNumPriority(),newChapter.getNumPriority());
            if (chapterEntities != null) {
                for (ChapterEntity item : chapterEntities) {
                    item.setNumPriority(item.getNumPriority()+1);
                    chapterRepository.save(item);
                }
            }
        }
    }

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
        try {
            ChapterEntity newChapterEntity = chapterConverter.toEntity(newChapterDto);
            ChapterEntity oldChapterEntity = chapterRepository.getById(newChapterDto.getId());

            if (newChapterEntity.getName() ==null) {
                newChapterEntity.setName(oldChapterEntity.getName());
            }
            if (newChapterEntity.getNumPriority() != oldChapterEntity.getNumPriority()) {
                updateNumOfPriorityWhenUpdate(oldChapterEntity,newChapterEntity);
//                newChapterEntity.setNumPriority(oldChapterEntity.getNumPriority());
            }
            if (newChapterEntity.getCourseEntity() ==null) {
                newChapterEntity.setCourseEntity(oldChapterEntity.getCourseEntity());
            }
            if (newChapterEntity.getLessonEntityList() ==null) {
                newChapterEntity.setLessonEntityList(oldChapterEntity.getLessonEntityList());
            }
            ChapterEntity chapterEntity = chapterRepository.save(newChapterEntity);
            ChapterDto chapter = chapterConverter.toDto(chapterEntity);
            return chapter;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ChapterDto> getChapterByCourseId(long courseId) {
        List<ChapterEntity> chapterEntities = chapterRepository.getChapterEntitiesByCourseEntity_Id(courseId);
        return chapterConverter.toListDto(chapterEntities);
    }

    public ChapterDto deleteChapter(long id) {
        try {
            ChapterEntity chapter = chapterRepository.getById(id);
            updateNumOfPriorityWhenDelete(chapter);
            chapterRepository.deleteById(id);
            return chapterConverter.toDto(chapter);
        } catch (Exception ex) {
            return null;
        }
    }

    public ChapterDto getChapterById(long id) {
        ChapterEntity chapterEntity = chapterRepository.getById(id);
        return chapterConverter.toDto(chapterEntity);
    }
}
