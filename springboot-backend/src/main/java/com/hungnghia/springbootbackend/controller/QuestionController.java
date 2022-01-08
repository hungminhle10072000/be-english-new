package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.QuestionDto;
import com.hungnghia.springbootbackend.dto.QuestionReadAddDto;
import com.hungnghia.springbootbackend.dto.QuestionRes;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/question")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @GetMapping("/findQuestionByExerciseId/{exerciseId}")
    public List<QuestionRes> findQuestionByExerciseId(@PathVariable Long exerciseId) {
        List<QuestionRes> data = questionService.findQuestionByExerciseId(exerciseId);
        return data;
    }

    @GetMapping("/{exerciseId}")
    public ResponseEntity<List<QuestionEntity>> adminFindQuestionByExerciseId(@PathVariable Long exerciseId){
        try {
            List<QuestionEntity> result = questionService.adminGetAllQuesttionWithExercise(exerciseId);
            return ResponseEntity.ok(result);
        } catch (Exception e)
        {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity<Boolean> deleteQuestionWithId (@PathVariable Long questionId){
        boolean result = questionService.deleteQuestion(questionId);
        if(result){
            return ResponseEntity.ok(result);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<QuestionEntity> addQuestion(@RequestPart("QuestionReadAddDto") QuestionReadAddDto questionReadAddDto){
        QuestionEntity result = questionService.addQuestion(questionReadAddDto);
        if(result != null){
            return ResponseEntity.ok(result);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getQuestion/{idQuestion}")
    public ResponseEntity<QuestionEntity> getQuestionById(@PathVariable Long idQuestion){
        try{
            QuestionEntity questionEntity = questionService.getQuestionById(idQuestion);
            return ResponseEntity.ok(questionEntity);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/updateQuestion/{idQuestion}")
    public ResponseEntity<QuestionEntity> updateQuestion(@PathVariable Long idQuestion, @RequestPart("questionReadUpdateDto") QuestionReadAddDto questionReadUpdateDto){
        QuestionEntity questionEntityUpdate = questionService.updateQuestion(idQuestion, questionReadUpdateDto);
        if(questionEntityUpdate != null){
            return ResponseEntity.ok(questionEntityUpdate);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
