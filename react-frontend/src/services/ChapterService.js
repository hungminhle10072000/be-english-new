import axios from "axios";
const CHAPTER_API_BASE_URL = 'http://localhost:8080/api/chapter'
class ChapterService {
    //Get all chapter
    getChapters() {
        return axios.get(CHAPTER_API_BASE_URL+'/getAll')
    }
    //
    getChapterByCourseId(courseId) {
        return axios.get(CHAPTER_API_BASE_URL+'/getChapterByCourseId/'+courseId)
    }

    addChapter(chapter) {
        let formData = new FormData()
        const jsonChapter = JSON.stringify(chapter)
        const blob = new Blob([jsonChapter], {
            type: 'application/json'
        });
        
        formData.append("chapterDto",blob)

        return axios.post(CHAPTER_API_BASE_URL+'/add',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    getChapterById(id) {
        return axios.get(CHAPTER_API_BASE_URL + '/getChapterById/' + id);
    }

    deleteChapter(id) {
        return axios.delete(CHAPTER_API_BASE_URL+'/delete/'+id);
    }

    updateChapter(chapter) {
        console.log('Service: ',chapter)
        let formData = new FormData()
        const jsonChapter = JSON.stringify(chapter)
        const blob = new Blob([jsonChapter], {
            type: 'application/json'
        });
        
        formData.append("chapterDto",blob)
        return axios.put(CHAPTER_API_BASE_URL+'/update',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export default new ChapterService()