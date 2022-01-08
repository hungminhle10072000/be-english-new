import axios from "axios";
import {authHeader} from './auth-header';

const EXERCISE_API_END_POINT = "/api/exercise";

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

class ExerciseService {

    // get all EXERCISE
    getAllExercise(){
        return axios.get(EXERCISE_API_END_POINT, {
            headers: {...headers, ...authHeader()},
        })
    }

    // delete user
    deleteExerciseWithId(id){
        return axios.delete(EXERCISE_API_END_POINT + '/' + id,{headers: {...headers,...authHeader()}});
    }

    // add exercise
    addExercise(AddExerciseDto, img_des){
        console.log(AddExerciseDto)
        let formData = new FormData();

        const json = JSON.stringify(AddExerciseDto);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append("AddExerciseDto",blob);
        formData.append("img_des",img_des);

        return axios.post(EXERCISE_API_END_POINT, formData, {
            headers:{...headers, ...authHeader(),'Content-Type': 'multipart/form-data'}
        })
    }

    resetExercise(userId,exerciseId){
        return axios.put(EXERCISE_API_END_POINT+"/reset/"+userId+"/"+exerciseId, {
            headers: {...headers, ...authHeader()},
        })
    }

}

export default new ExerciseService()