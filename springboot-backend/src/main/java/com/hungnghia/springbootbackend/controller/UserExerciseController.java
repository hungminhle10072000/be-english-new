package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.ExerciseDto;
import com.hungnghia.springbootbackend.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/exercise")
public class UserExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @PutMapping("/reset/{userId}/{exerciseId}")
    public boolean resetExercise(@PathVariable Long userId,@PathVariable Long exerciseId) {
        exerciseService.resetExercise(userId, exerciseId);
        return true;
    }

    @GetMapping("/getAll")
    public List<ExerciseDto> getAll() {
        return exerciseService.getAllExerciseUser();
    }
}
