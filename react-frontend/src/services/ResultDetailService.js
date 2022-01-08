import axios from "axios";
import {authHeader} from './auth-header';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

const RESULTDETAIL_API_BASE_URL = '/api/resultdetail'
class ResultDetailService {

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