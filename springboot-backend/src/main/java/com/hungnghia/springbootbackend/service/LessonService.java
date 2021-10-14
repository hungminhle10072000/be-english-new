package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.converter.LessonConverter;
import com.hungnghia.springbootbackend.dto.LessonDto;
import com.hungnghia.springbootbackend.entities.LessonEntity;
import com.hungnghia.springbootbackend.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class LessonService {
    @Autowired
    private LessonRepository lessonRepository;
    @Autowired
    private LessonConverter lessonConverter;
    @Autowired
    private AmazonClient amazonClient;

    public LessonDto addLesson(LessonDto lessonDto, MultipartFile video) {
        LessonEntity lessonEntity = lessonConverter.toEntity(lessonDto);
        String videoUrl = amazonClient.uploadFile(video); //
        lessonEntity.setVideo(videoUrl);
        LessonEntity lessonResult = lessonRepository.save(lessonEntity);
        return lessonConverter.toDto(lessonResult);
    }
    public LessonDto updateLesson(LessonDto lessonDto,MultipartFile video) {
        LessonEntity newLessonEntity = lessonConverter.toEntity(lessonDto);
        LessonEntity oldLessonEntity = lessonRepository.getById(lessonDto.getId());

        if (newLessonEntity.getName() == null) {
            newLessonEntity.setName(oldLessonEntity.getName());
        }
        if (newLessonEntity.getNumber() == 0) {
            newLessonEntity.setNumber(oldLessonEntity.getNumber());
        }
        if (newLessonEntity.getChapterEntity()==null) {
            newLessonEntity.setChapterEntity(oldLessonEntity.getChapterEntity());
        }
        if (newLessonEntity.getCommentEntityList() ==null) {
            newLessonEntity.setCommentEntityList(oldLessonEntity.getCommentEntityList());
        }
        if (newLessonEntity.getQuestionEntityList() == null) {
            newLessonEntity.setQuestionEntityList(oldLessonEntity.getQuestionEntityList());
        }
        if (video.isEmpty()) {
            newLessonEntity.setVideo(oldLessonEntity.getVideo());
        } else {
            String videoUrl = amazonClient.uploadFile(video); //
            newLessonEntity.setVideo(videoUrl);
        }
        LessonEntity lesson =lessonRepository.save(newLessonEntity);
        return lessonConverter.toDto(lesson);
    }

    public List<LessonDto> getAllLesson() {
        List<LessonEntity> lessonEntities = lessonRepository.findAll();
        return lessonConverter.toListDtos(lessonEntities);
    }
}
