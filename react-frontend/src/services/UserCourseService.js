import axios from "axios";
import {authHeader} from './auth-header';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

const CHAPTER_API_BASE_URL = '/api/usercourse'
class UserCourseService {

    addUserCourse(userCourseDto) {
        let formData = new FormData()
        const jsonUserCourse = JSON.stringify(userCourseDto)
        const blob = new Blob([jsonUserCourse], {
            type: 'application/json'
        });
        
        formData.append("userCourseDto",blob)


        return axios.post(CHAPTER_API_BASE_URL+'/add',formData,{
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data',
                ...authHeader()
            }
        })
    }


}

export default new UserCourseService()