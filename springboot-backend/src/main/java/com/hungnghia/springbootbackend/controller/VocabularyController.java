package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.VocabularyDto;
import com.hungnghia.springbootbackend.dto.VocabularyUpdateDto;
import com.hungnghia.springbootbackend.entities.VocabularyEntity;
import com.hungnghia.springbootbackend.service.VocabularyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class VocabularyController {

    private final VocabularyService vocabularyService;

    @Autowired
    public VocabularyController(VocabularyService vocabularyService) {
        this.vocabularyService = vocabularyService;
    }

    /*get all vocabulary with topic*/
    @GetMapping(value = "/vocabulary/{idTopic}")
    public List<VocabularyEntity> getAllVocabularyWithTopic(@PathVariable Long idTopic){
        return vocabularyService.findVocabularyByTopic(idTopic);
    }

    /*user getl all vocabulary with id topic*/
    @GetMapping(value = "/user-vocabulary/{idTopic}")
    public List<VocabularyEntity> userGetAllVocabularyWithTopic(@PathVariable Long idTopic){
        return vocabularyService.findVocabularyByTopic(idTopic);
    }

    /*add vocabulary for topicId*/
    @PostMapping("/vocabulary")
    public VocabularyEntity addVocabulary(@RequestPart("vocabularyDto") VocabularyDto vocabularyDto, @RequestPart("file_audio")MultipartFile file_audio, @RequestPart("file_image") MultipartFile file_image){
        return vocabularyService.addVocabulary(vocabularyDto, file_audio, file_image);
    }

    /*Delete vocabulary with id*/
    @DeleteMapping("/vocabulary/{id}")
    public ResponseEntity<VocabularyEntity> deleteVocabulary(@PathVariable String id){
        long idVoca = Long.parseLong(id);
        VocabularyEntity vocabularyEntity = vocabularyService.deleteVocabulary(idVoca);
        return ResponseEntity.ok(vocabularyEntity);
    }

    /*Get vocabulary with id*/
    @GetMapping("/vocabulary/getVocaByid/{id}")
    public ResponseEntity<VocabularyEntity> getVocabularyWithId(@PathVariable("id") Long id){
        VocabularyEntity vocabularyEntity = vocabularyService.getVoca(id);
        return ResponseEntity.ok(vocabularyEntity);
    }

    /*Update vocabulary*/
    @PutMapping("/vocabulary/{id}")
    public ResponseEntity<VocabularyEntity> updateVocabulary(@PathVariable("id") Long id, @RequestPart("vocabularyUpdateDto") VocabularyUpdateDto vocabularyUpdateDto,
                                                             @RequestParam(name="file_audio", required = false) MultipartFile file_audio, @RequestParam(name="file_image", required = false) MultipartFile file_image){
        VocabularyEntity vocabularyEntity = vocabularyService.updateVocabulary(id, vocabularyUpdateDto, file_audio, file_image);
        return ResponseEntity.ok(vocabularyEntity);
    }

}
