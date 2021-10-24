import axios from "axios";
const LESSON_API_BASE_URL = 'http://localhost:8080/api/lesson'
class LessonService {
    //Get all lesson
    getLessons() {
        return axios.get(LESSON_API_BASE_URL+'/getAll')
    }
    //
    getLessonByCourseId(courseId) {
        return axios.get(LESSON_API_BASE_URL+'/getLessonByCourseId/'+courseId)
    }

    addLesson(lesson) {
        let formData = new FormData()
        const jsonLesson = JSON.stringify(lesson)
        const blob = new Blob([jsonLesson], {
            type: 'application/json'
        });
        
        formData.append("lessonDto",blob)

        return axios.post(LESSON_API_BASE_URL+'/add',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    getLessonById(id) {
        return axios.get(LESSON_API_BASE_URL + '/getLessonById/' + id);
    }

    deleteLesson(id) {
        return axios.delete(LESSON_API_BASE_URL+'/delete/'+id);
    }

    updateLesson(lesson) {
        console.log('Service: ',lesson)
        let formData = new FormData()
        const jsonLesson = JSON.stringify(lesson)
        const blob = new Blob([jsonLesson], {
            type: 'application/json'
        });
        
        formData.append("lessonDto",blob)
        return axios.put(LESSON_API_BASE_URL+'/update',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export default new LessonService()