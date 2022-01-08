package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.AddExerciseDto;
import com.hungnghia.springbootbackend.entities.ExerciseEntity;
import com.hungnghia.springbootbackend.entities.QuestionEntity;
import com.hungnghia.springbootbackend.entities.ResultDetailEntity;
import com.hungnghia.springbootbackend.entities.ResultEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.ExerciseRepository;
import com.hungnghia.springbootbackend.repository.QuestionRepository;
import com.hungnghia.springbootbackend.repository.ResultDetailRepository;
import com.hungnghia.springbootbackend.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private ResultRepository resultRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ResultDetailRepository resultDetailRepository;

    @Autowired
    private AmazonClient amazonClient;

    public List<ExerciseEntity> getAllExercise() {
        return exerciseRepository.findAll();
    }

    public ExerciseEntity getExerciseWithId(Long id) {
        return exerciseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại bài tập với id : " + id));
    }

    public boolean resetExercise(Long userId, Long exerciseId) {
        List<ResultEntity> resultEntityList = resultRepository.findResultEntitiesByUserEntity_IdAndExerciseEntity_Id(userId, exerciseId);
        if (resultEntityList !=null) {
            if (resultEntityList.get(0) != null) {
                ResultEntity result = resultEntityList.get(0);
                result.setTotal_wrong(0);
                result.setTotal_right(0);
                resultRepository.save(result);
                List<ResultDetailEntity> resultDetailEntityList = resultDetailRepository.findResultDetailEntitiesByUserEntity_IdAndQuestionEntity_ExerciseEntity_Id(userId, exerciseId);
                if (resultDetailEntityList != null) {
                    for (ResultDetailEntity item : resultDetailEntityList) {
                        item.setUser_answer(null);
                        resultDetailRepository.save(item);
                    }
                }
            }
            return true;
        }
        return false;
    }

    public boolean deleteExercise(Long id){
        ExerciseEntity exerciseEntity = getExerciseWithId(id);
        try {
            exerciseRepository.delete(exerciseEntity);
            return true;
        } catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    public ExerciseEntity addExercise(AddExerciseDto addExerciseDto, MultipartFile img){
        try {
            ExerciseEntity exerciseEntityAdd = new ExerciseEntity();
            exerciseEntityAdd.setName(addExerciseDto.getName());
            String imgUrl = amazonClient.uploadFile(img);
            exerciseEntityAdd.setImage(imgUrl);
            exerciseEntityAdd.setType(addExerciseDto.getType());
            exerciseEntityAdd.setDescription(addExerciseDto.getDescription());
            return exerciseRepository.save(exerciseEntityAdd);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public ExerciseEntity updateExerciese(Long id,AddExerciseDto updateExerciseDto, MultipartFile img){
        try{
            ExerciseEntity exerciseEntityUpdate = getExerciseEntityById(id);
            exerciseEntityUpdate.setName(updateExerciseDto.getName());
            exerciseEntityUpdate.setType(updateExerciseDto.getType());
            exerciseEntityUpdate.setDescription(updateExerciseDto.getDescription());
            if(!(img == null)){
                String imgUrl = amazonClient.uploadFile(img);
                exerciseEntityUpdate.setImage(imgUrl);
            }
            return exerciseRepository.save(exerciseEntityUpdate);
        } catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    public ExerciseEntity getExerciseEntityById(Long id){
        return exerciseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại bài tập với id :" + id));
    }
}
