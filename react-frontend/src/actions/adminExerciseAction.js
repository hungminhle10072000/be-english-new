import * as Types from '../constants/ActionTypes';
import adminAlertInfoAction from './admin-alert-infoAction';
import ExerciseService from '../services/ExerciseService'

const changeFormAddExerciseOn = () => {
    return{
        type: Types.FORM_ADD_EXERCISE_ON
    }
}

const changeFormAddExerciseOff = () => {
    return{
        type: Types.FORM_ADD_EXERCISE_OFF
    }
}

const changeFormEditExerciseOn = () => {
    return{
        type: Types.FORM_EDIT_EXERCISE_ON
    }
}

const changeFormEditExerciseOff = () => {
    return {
        type: Types.FORM_EDIT_EXERCISE_OFF
    }
}

// get all exercise
const actFetchAllExerciseRequest = () => {
    return(dispatch) => {
        return (
            ExerciseService.getAllExercise().then((res) => {
                dispatch(actFetchAllExercise(res.data))
            }).catch(      
                error => {    
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))          
                }        
            )
        )
    }
}

const actFetchAllExercise = (allExercise) => {
    return {
        type: Types.FETCH_EXERCISE,
        allExercise
    }
}

// delete exercise with id
const actDeleteExerciseWithIdRequest = (id) => {
    return (dispatch) => (
        ExerciseService.deleteExerciseWithId(id).then((res) => {
            if(res.data === true){
                dispatch(actDeleteExerciseWithId(id))
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa thành công !!!", "success"))
            } else {
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa thất bại !!!", "danger"))
            }          
        }).catch(      
            error => {    
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))          
            }        
        )
    )
}

const actDeleteExerciseWithId = (id) => {
    return {
        type: Types.DELETE_EXERCISE_WITH_ID,
        id
    }
}

// add exercise
const actAddExerciseRequest = (AddExerciseDto, img_des) => {
    return (dispatch) => (
        ExerciseService.addExercise(AddExerciseDto, img_des).then((res) => {
            if(res.data === null){
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm thất bại !!!", "danger"))
            } else {
                dispatch(actAddExercise(res.data))
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm thành công !!!", "success"))
                dispatch(changeFormAddExerciseOff())
            }
        }).catch(      
            error => {    
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))          
            }        
        )
    )
}

const actAddExercise = (exercise) => {
    return {
        type: Types.ADD_EXERCISE,
        exercise
    }
}

// get exercise with id
const actGetExerciseWithIdRequest = (id) => {
    return (dispatch) => (
        ExerciseService.getExerciseById(id).then((res) => {
            dispatch(actGetExerciseWithId(res.data))
        }).catch(
            error => {
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))
            }
        )
    )
}

const actGetExerciseWithId = (itemExercise) => {
    return {
        type: Types.GET_EXERCISE_WITH_ID,
        itemExercise
    }
}


// update exercise
const actUpdateExerciseRequest = (id, UpdateExerciseDto, img_des) => {
    return (dispatch) => {
        ExerciseService.updateExercise(id, UpdateExerciseDto, img_des).then((res) => {
            dispatch(actUpdateExercise(res.data))
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công !!!", "success"))
            dispatch(changeFormEditExerciseOff())
        }).catch(
            error => {
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))
            }
        )
    }
}

const actUpdateExercise = (itemExerciseUpdate) => {
    return {
        type: Types.UPDATE_EXERCISE,
        itemExerciseUpdate
    }
}

export default {
    changeFormAddExerciseOn,
    changeFormAddExerciseOff,
    changeFormEditExerciseOn,
    changeFormEditExerciseOff,
    actFetchAllExerciseRequest,
    actDeleteExerciseWithIdRequest,
    actAddExerciseRequest,
    actGetExerciseWithIdRequest,
    actUpdateExerciseRequest
}