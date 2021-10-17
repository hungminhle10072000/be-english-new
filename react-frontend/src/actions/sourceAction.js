import * as Types from '../constants/ActionTypes'
import CourseService from '../services/CourseService'

// get all courses
const actFetchCourseRequest = () => {
    return(dispatch) => {
        return (
            CourseService.getCourses().then((res) => {
                dispatch(actFetchCourses(res.data))
            })
        )
    }
}

const actFetchCourses = (course) => {
    return {
        type: Types.FETCH_COURSES,
        course
    }
}