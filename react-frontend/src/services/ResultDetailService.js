import axios from "axios";
import {authHeader} from './auth-header';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

const RESULTDETAIL_API_BASE_URL = '/api/resultdetail'
class ResultDetailService {

    addAnswers(newListAnswer) {
        let formData = new FormData()
      const jsonLesson = JSON.stringify(newListAnswer)
      const blob = new Blob([jsonLesson], {
          type: 'application/json'
      });
      formData.append("answers",blob)

      axios.post(RESULTDETAIL_API_BASE_URL+'/addAnswers',formData,{
        headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
            ...authHeader()
        }
    })
    }

    getResultDetailByUserIdAndExerciseId(userId, exerciseId) {
        return axios.get(RESULTDETAIL_API_BASE_URL+'/findResultDetailsByUserIdAndExerciseId/'+userId+"/"+exerciseId,{
            headers: {
                ...headers,
                ...authHeader()
            }
        })
    }


}

export default new ResultDetailService()