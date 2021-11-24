package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.entities.GrammarEntity;
import com.hungnghia.springbootbackend.service.GrammarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class GrammarController {

    private final GrammarService grammarService;

    @Autowired
    public GrammarController(GrammarService grammarService) {
        this.grammarService = grammarService;
    }

    /*get all grammar*/
    @GetMapping("grammars")
    public List<GrammarEntity> getAllGrammar(){
        return grammarService.getAllGrammar();
    }

    /*delete grammar with id*/
    @DeleteMapping("grammars/{id}")
    public GrammarEntity deleteGramamWithId(@PathVariable Long id){
        return grammarService.deleteGrammar(id);
    }

    /*add grammar name*/
    @PostMapping("grammars")
    public ResponseEntity<GrammarEntity> addGrammarName(@RequestParam("name") String name){
        return ResponseEntity.ok(grammarService.addGrammarName(name));
    }

    /*get grammar with id*/
    @GetMapping("grammars/{id}")
    public GrammarEntity getGrammarWithId(@PathVariable Long id){
        return grammarService.getGrammarWithId(id);
    }

    /*update name grammar*/
    @PutMapping("grammars/{id}")
    public ResponseEntity<GrammarEntity> updateNameGramamr(@PathVariable Long id, @RequestParam("name_grammar") String name_grammar){
        return ResponseEntity.ok(grammarService.updateGrammarName(id,name_grammar));
    }

    /*update content grammar*/
    @PutMapping("grammars/content/{id}")
    public ResponseEntity<GrammarEntity> updateContentGrammar(@PathVariable Long id, @RequestParam("content_grammar") String content_grammar){
        return ResponseEntity.ok(grammarService.updateGrammarContent(id, content_grammar));
    }
}
