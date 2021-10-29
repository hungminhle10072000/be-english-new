package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.dto.CourseDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/chapter")
public class ChapterController {
    @Autowired
    ChapterService chapterService;

    @PostMapping("/add")
    ChapterDto addChapter(@RequestPart("chapterDto") ChapterDto chapterDto) {
        ChapterDto chapter = chapterService.addChapter(chapterDto);
        return chapter;
    }

    @PutMapping("/update")
    ChapterDto updateChapter(@RequestPart("chapterDto") ChapterDto chapterDto) {
        ChapterDto chapter = chapterService.updateChapter(chapterDto);
        return chapter;
    }

    @GetMapping("/getAll")
    List<ChapterDto> getAllChapter() {
        return chapterService.getAllChapter();
    }
    @GetMapping("/getChapterById/{id}")
    ChapterDto getChapterById(@PathVariable long id) {
        ChapterDto  chapter = chapterService.getChapterById(id);
        return chapter;
    }

    @GetMapping("/getChapterByCourseId/{courseId}")
    List<ChapterDto> getChapterByCourseId(@PathVariable long courseId) {
        List<ChapterDto> chapters = chapterService.getChapterByCourseId(courseId);
        return chapters;
    }

    @DeleteMapping("/delete/{id}")
    ChapterDto deleteChapter(@PathVariable long id) {
        ChapterDto chapter = chapterService.deleteChapter(id);
        return chapter;
    }

}
