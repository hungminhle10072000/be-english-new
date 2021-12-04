import axios from "axios";
import {authHeader} from './auth-header';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

const COMMENT_API_BASE_URL = '/api/comment'
class CommentService {
    //Get all chapter
    getComments() {
        return axios.get(COMMENT_API_BASE_URL+'/getAll',{
            headers: {...headers, ...authHeader()},
        })
    }
    //
    getCommentByLessonId(lessonId) {
        return axios.get(COMMENT_API_BASE_URL+'/getCommentByLessonId/'+lessonId,{
            headers: {...headers, ...authHeader()},
        })
    }

}

export default new CommentService()