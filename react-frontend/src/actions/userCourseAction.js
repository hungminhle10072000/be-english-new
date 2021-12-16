import * as Types from '../constants/ActionTypes'
import UserCourseService from '../services/UserCourseService'

const actAddUserCourseRequest = (userCourse) => {
    return (dispatch) => {
        return(
            UserCourseService.addUserCourse(userCourse).then((res)=> {
                dispatch(actAddUserCourse(res.data))
            })
        )
    }
}

const actAddUserCourse = (userCourse) => {
    return {
        type: Types.ADD_USERCOURSE,
        userCourse
    }
}

export default {
    actAddUserCourseRequest,
}