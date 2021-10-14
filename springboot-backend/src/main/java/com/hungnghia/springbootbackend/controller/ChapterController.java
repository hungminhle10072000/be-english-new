package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.ChapterDto;
import com.hungnghia.springbootbackend.entities.ChapterEntity;
import com.hungnghia.springbootbackend.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapter")
public class ChapterController {
    @Autowired
    ChapterService chapterService;

    @PostMapping("/add")
    ChapterDto addChapter(@RequestBody ChapterDto chapterDto) {
        ChapterDto chapter = chapterService.addChapter(chapterDto);
        return chapter;
    }

    @PutMapping("update")
    ChapterDto updateChapter(@RequestBody ChapterDto chapterDto) {
        ChapterDto chapter = chapterService.updateChapter(chapterDto);
        return chapter;
    }

    @GetMapping("/getAll")
    List<ChapterDto> getAllChapter() {
        return chapterService.getAllChapter();
    }

}
