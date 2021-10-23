import * as Types from '../constants/ActionTypes'
import CourseService from '../services/CourseService'

// get all courses
const actFetchCourseRequest = () => {
    return (dispatch) => {
        return (
            CourseService.getCourses().then((res) => {
                dispatch(actFetchCourses(res.data))
            })
        )
    }
}

const actFetchCourses = (courses) => {
    return {
        type: Types.FETCH_COURSES,
        courses
    }
}

// add course

const actAddCourseRequest = (course,image) => {
    return (dispatch) => {
        return(
            CourseService.addCourse(course,image).then((res)=> {
                dispatch(actAddCourse(res.data))
            })
        )
    }
}

const actAddCourse = (course) => {
    return {
        type: Types.ADD_COURSE,
        course
    }
}
// get by id
// get course by id
const actGetCourseRequest = (id) => {
    return dispatch => {
        return (
            CourseService.getCourseById(id).then((res) => {
                dispatch(actGetCourse(res.data));
            })
        )
    }
}

const actGetCourse = (course) => {
    return {
        type:Types.EDIT_COURSE,
        course
    }
}
//update course 
const actUpdateCourseRequest = (course,image) => {
    console.log("Update", image)
    return dispatch => {
        CourseService.updateCourse(course,image).then((res) => {
            dispatch(actUpdateCourse(res.data))
        })
    }
}

const actUpdateCourse = (course) =>{
    return {
        type: Types.UPDATE_COURSE,
        course
    }
}

//delete course by id

const actDeleteCourseRequest = (id) => {
    return dispatch => {
        return (
            CourseService.deleteCourse(id).then((res) => {
                dispatch(actDeleteCourse(res.data))
            })
        )
    }
}

const actDeleteCourse = (course) => {
    return {
        type: Types.DELETE_COURSE,
        course
    }
}

export default {
    actFetchCourseRequest,
    actAddCourseRequest,
    actGetCourseRequest,
    actDeleteCourseRequest,
    actUpdateCourseRequest
}