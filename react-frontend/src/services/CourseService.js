import axios from "axios";
const COURSE_API_BASE_URL = 'http://localhost:8080/api/course'
class CourseService {
    //Get all course
    getCourses() {
        return axios.get(COURSE_API_BASE_URL+'/getAll')
    }

    addCourse(course,image) {
        let formData = new FormData()
        const jsonCourse = JSON.stringify(course)
        const blob = new Blob([jsonCourse], {
            type: 'application/json'
        });
        
        formData.append("courseDto",blob)
        formData.append("file",image)

        return axios.post(COURSE_API_BASE_URL+'/add',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    getCourseById(id) {
        return axios.get(COURSE_API_BASE_URL + '/edit/' + id);
    }

    deleteCourse(id) {
        return axios.delete(COURSE_API_BASE_URL+'/delete/'+id);
    }

    updateCourse(course,image) {
        let formData = new FormData()
        const jsonCourse = JSON.stringify(course)
        const blob = new Blob([jsonCourse], {
            type: 'application/json'
        });
        
        formData.append("courseDto",blob)
        formData.append("file",image)
        return axios.put(COURSE_API_BASE_URL+'/update',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export default new CourseService()