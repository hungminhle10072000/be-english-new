package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
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
}
