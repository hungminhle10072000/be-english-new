package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.QuestionRes;
import com.hungnghia.springbootbackend.dto.ResultDetailDto;
import com.hungnghia.springbootbackend.service.QuestionService;
import com.hungnghia.springbootbackend.service.ResultDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/resultdetail")
public class ResultDetailController {
    @Autowired
    private ResultDetailService resultDetailService;

    @GetMapping("/findResultDetailsByUserIdAndExerciseId/{userId}/{exerciseId}")
    public List<ResultDetailDto> findResultDetailsByUserIdAndExerciseId(@PathVariable Long userId,@PathVariable Long exerciseId) {
        List<ResultDetailDto> resultDetailDtos = resultDetailService.findResultDetailEntitiesByUserEntity_IdAndQuestionEntity_ExerciseEntity_Id(userId,exerciseId);
        return resultDetailDtos;
    }

    @PostMapping("/addAnswers")
    public boolean addAnswers(@RequestPart("answers")  List<ResultDetailDto> answers) {
        boolean result = resultDetailService.addAnswers(answers);
        return result;
    }
    @PostMapping("/addAnswersMobile")
    public boolean addAnswersMobile(@RequestBody List<ResultDetailDto> answers) {
        boolean result = resultDetailService.addAnswers(answers);
        return result;
    }
}
