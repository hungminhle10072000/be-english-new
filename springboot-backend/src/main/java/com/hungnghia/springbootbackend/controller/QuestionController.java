package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.QuestionDto;
import com.hungnghia.springbootbackend.dto.QuestionRes;
import com.hungnghia.springbootbackend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
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
}
