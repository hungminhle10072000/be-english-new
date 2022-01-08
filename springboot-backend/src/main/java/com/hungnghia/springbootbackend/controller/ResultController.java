package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.ResultDto;
import com.hungnghia.springbootbackend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/result")
public class ResultController {
    @Autowired
    private ResultService resultService;

    @GetMapping("/findResultsByUserId/{userId}")
    public List<ResultDto> findResultsByUserId(@PathVariable Long userId) {
        List<ResultDto> resultDtos = resultService.findResultsByUserId(userId);
        return resultDtos;
    }

    @GetMapping("/findResultsByUserIdAndExerciseId/{userId}/{exerciseId}")
    public List<ResultDto> findResultsByUserIdAndExerciseId(@PathVariable Long userId,@PathVariable Long exerciseId) {
        List<ResultDto> resultDtos = resultService.findResultsByUserIdAndExerciseId(userId, exerciseId);
        return resultDtos;
    }

    @PostMapping("/add")
    public ResultDto addResult(@RequestPart("resultDto") ResultDto result) {
        ResultDto resultRes = resultService.addResult(result);
        return resultRes;
    }

}
