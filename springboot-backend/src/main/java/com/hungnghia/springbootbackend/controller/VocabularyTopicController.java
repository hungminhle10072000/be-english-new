package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.entities.VocabularyTopicEntity;
import com.hungnghia.springbootbackend.service.VocabularyTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")

public class VocabularyTopicController {

    private final VocabularyTopicService vocabularyTopicService;

    @Autowired
    public VocabularyTopicController(VocabularyTopicService vocabularyTopicService) {
        this.vocabularyTopicService = vocabularyTopicService;
    }

    /*Add topic vocabulary*/
    @PostMapping("/topic-vocas")
    public VocabularyTopicEntity addTopicVoca(@RequestPart("name_topic") String name_topic, @RequestPart("file")MultipartFile image){
        return vocabularyTopicService.addVocabularyToipc(name_topic, image);
    }

    /*Get all vocabulary topic*/
    @GetMapping("/topic-vocas")
    public List<VocabularyTopicEntity> getVocabularyTopics(){
        return vocabularyTopicService.getVocabularyTopics();
    }

    @GetMapping("/user-topic-vocas")
    public List<VocabularyTopicEntity> userGetAllVocabularyTopics(){
        return vocabularyTopicService.getVocabularyTopics();
    }

    /*Delete vocabulary topic*/
    @DeleteMapping("/topic-vocas/{id}")
    public ResponseEntity<VocabularyTopicEntity> deleteVocaTopic(@PathVariable Long id){
        VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicService.deleteVocabularyTopics(id);
        return ResponseEntity.ok(vocabularyTopicEntity);
    }

    /*Get topic with id*/
    @GetMapping("/topic-vocas/{id}")
    public ResponseEntity<VocabularyTopicEntity> getVocaTopicById(@PathVariable Long id){
        VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicService.getVocaTopic(id);
        return ResponseEntity.ok(vocabularyTopicEntity);
    }

    /*Edit topic */
    @PutMapping("/topic-vocas/{id}")
    public ResponseEntity<VocabularyTopicEntity> updateVocaTopic(@PathVariable Long id, @RequestParam("name_topic") String name_topic, @RequestParam(name = "file", required = false) MultipartFile image){
        VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicService.updateVocaTopic(id, name_topic, image);
        return ResponseEntity.ok(vocabularyTopicEntity);
    }
}
