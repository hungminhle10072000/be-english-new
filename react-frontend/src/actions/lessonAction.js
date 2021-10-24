import * as Types from '../constants/ActionTypes'
import LessonService from '../services/LessonService'

// get all lessons
const actFetchLessonRequest = () => {
    return (dispatch) => {
        return (
            LessonService.getLessons().then((res) => {
                dispatch(actFetchLessons(res.data))
            })
        )
    }
}

const actFetchLessons = (lessons) => {
    return {
        type: Types.FETCH_LESSONS,
        lessons
    }
}

// add lesson

const actAddLessonRequest = (lesson) => {
    return (dispatch) => {
        return(
            LessonService.addLesson(lesson).then((res)=> {
                dispatch(actAddLesson(res.data))
            })
        )
    }
}

const actAddLesson = (lesson) => {
    return {
        type: Types.ADD_LESSON,
        lesson
    }
}
// get by id
// get lesson by id
const actGetLessonRequest = (id) => {
    return dispatch => {
        return (
            LessonService.getLessonById(id).then((res) => {
                dispatch(actGetLesson(res.data));
            })
        )
    }
}

const actGetLesson = (lesson) => {
    console.log('Lesson2: ',lesson)
    return {
        type:Types.EDIT_LESSON,
        lesson
    }
}

// get by id
// get lesson by course id
const actGetLessonByCourseIdRequest = (courseId) => {
    return dispatch => {
        return (
            LessonService.getLessonByCourseId(courseId).then((res) => {
                dispatch(actGetLessonByCourseId(res.data));
            })
        )
    }
}

const actGetLessonByCourseId = (lessons) => {
    return {
        type:Types.FETCH_LESSONS,
        lessons
    }
}
//update lesson 
const actUpdateLessonRequest = (lesson) => {
    return dispatch => {
        LessonService.updateLesson(lesson).then((res) => {
            dispatch(actUpdateLesson(res.data))
        })
    }
}

const actUpdateLesson = (lesson) =>{
    return {
        type: Types.UPDATE_LESSON,
        lesson
    }
}

//delete lesson by id

const actDeleteLessonRequest = (id) => {
    return dispatch => {
        return (
            LessonService.deleteLesson(id).then((res) => {
                dispatch(actDeleteLesson(res.data))
            })
        )
    }
}

const actDeleteLesson = (lesson) => {
    return {
        type: Types.DELETE_LESSON,
        lesson
    }
}

export default {
    actFetchLessonRequest,
    actAddLessonRequest,
    actGetLessonRequest,
    actDeleteLessonRequest,
    actUpdateLessonRequest,
    actGetLessonByCourseIdRequest
}