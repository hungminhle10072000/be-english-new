package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.AddExerciseDto;
import com.hungnghia.springbootbackend.entities.ExerciseEntity;
import com.hungnghia.springbootbackend.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AdminExerciseController {

    private final ExerciseService exerciseService;

    @Autowired
    public AdminExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    /*Get all exercise */
    @GetMapping("/exercise")
    public List<ExerciseEntity> getAllExercise(){
        return exerciseService.getAllExercise();
    }

    /*Delete exercise with id*/
    @DeleteMapping("/exercise/{id}")
    public ResponseEntity<Boolean> deleteExerciseWithId(@PathVariable Long id){
        boolean result = exerciseService.deleteExercise(id);
        return ResponseEntity.ok(result);
    }

    /*Add exercise */
    @PostMapping("/exercise")
    public ResponseEntity<ExerciseEntity> addExercise (@RequestPart("AddExerciseDto") AddExerciseDto addExerciseDto, @RequestPart(name = "img_des") MultipartFile img_des){
        return ResponseEntity.ok(exerciseService.addExercise(addExerciseDto, img_des));
    }

}
