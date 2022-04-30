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

    getCommentByTopicId(topicId) {
        return axios.get(COMMENT_API_BASE_URL+'/getCommentByVocabularyTopicId/'+topicId,{
            headers: {...headers, ...authHeader()},
        })
    }
    getCommentByGrammarId(grammarId) {
        return axios.get(COMMENT_API_BASE_URL+'/getCommentByGrammarId/'+grammarId,{
            headers: {...headers, ...authHeader()},
        })
    }


    addComment(comment) {
        return axios.post(COMMENT_API_BASE_URL+'/add',comment,{
            headers: {
                ...headers,
                ...authHeader()
            }
        })
    }
    deleteComment(id) {
        return axios.delete(COMMENT_API_BASE_URL+'/delete/'+id,{
            headers: {...headers, ...authHeader()},
        })
    }
    updateComment(comment) {
        return axios.put(COMMENT_API_BASE_URL+'/update',comment,{
            headers: {
                ...headers,
                ...authHeader()
            }
        })
    }

}

export default new CommentService()