import * as Types from '../constants/ActionTypes';
import adminAlertInfoAction from './admin-alert-infoAction';
import QuestionService from '../services/QuestionService'
import userItemLoadingAction from './userItemLoadingAction';
import statusButtonLoadingAction from './statusButtonLoadingAction';

// get all question exercise by id
const actGetAllQuestionExerciseByIdRequest = (nameExericse ,id) => {
    return (dispatch) => {
        return (
            QuestionService.getAllQuestionById(id).then((res) => {
                dispatch(userItemLoadingAction.closeItemLoading())
                dispatch(actGetAllQuestionExerciseById(nameExericse, res.data))
            }).catch(
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actGetAllQuestionExerciseById = (nameExericse, listQuestionExercise) => {
    return {
        type: Types.GET_ALL_QUESTION_EXERCISE_BY_ID,
        payload: {
            nameExericse: nameExericse,
            listQuestionExercise: listQuestionExercise
        }
    }
}

// delete question with id
const actDeleteQuestionWithIdRequest = (id) => {
    return(dispatch) => {
        return (
            QuestionService.deleteQuestionWitdId(id).then((res) => {
                dispatch(actDeleteQuestionWithId(id))
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa thành công!!!","success"))
            })
            .catch(
                error => {
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actDeleteQuestionWithId = (id) => {
    return {
        type: Types.DELETE_QUESTION_WITH_ID,
        id
    }
}

// add question 
const actAddQuestionRequest = (questionAddDto) => {
    return(dispatch) => {
        return (
            QuestionService.addQuestionRead(questionAddDto).then((res) => {
                dispatch(actAddQuestion(res.data))
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm thành công!!!","success"))
            })
            .catch(
                error => {
                    dispatch(statusButtonLoadingAction.closeButtonLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actAddQuestion = (questionReadAdd) => {
    return {
        type: Types.ADD_QUESTION_READ,
        questionReadAdd
    }
}

// add question listen 1
const actAddQuestionListenRequest = (questionListenAddDto, fileImage, fileAudio) => {
    return(dispatch) => {
        return(
            QuestionService.addQuestionListenType1(questionListenAddDto, fileImage, fileAudio).then((res) => {
                dispatch(actAddQuestionListen(res.data))
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm thành công!!!","success"))
            }).catch(
                error => {
                    dispatch(statusButtonLoadingAction.closeButtonLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actAddQuestionListen = (questionListenAdd) => {
    return {
        type: Types.ADD_QUESTION_LISTEN,
        questionListenAdd
    }
}

// get question by id
const actGetQuestionByIdRequest = (id) => {
    return(dispatch) => {
        return (
            QuestionService.getQuestionById(id).then((res) => {
                dispatch(actGetQuestionById(res.data))
                dispatch(userItemLoadingAction.closeItemLoading())
                
            })
            .catch(
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actGetQuestionById = (itemQuestionEdit) => {
    return {
        type: Types.GET_QUESTION_BY_ID,
        itemQuestionEdit
    }
}

// update question
const actUpdateQuestionRequest = (id, questionReadUpdateDto) => {
    return(dispatch) => {
        return (
            QuestionService.updateQuestion(id, questionReadUpdateDto).then((res) => {
                dispatch(actUpdateQuestion(res.data))
                dispatch(actGetQuestionByIdRequest(res.data.id))
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công!!!","success"))
            })
            .catch(
                error => {
                    dispatch(statusButtonLoadingAction.closeButtonLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại ! Xin hãy thử lại.","danger"))
                }
            )
        )
    }
}

const actUpdateQuestion = (itemQuestionUpdate) => {
    return {
        type: Types.UPDATE_QUESTION,
        itemQuestionUpdate
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actGetAllQuestionExerciseByIdRequest,
    actDeleteQuestionWithIdRequest,
    actAddQuestionRequest,
    actGetQuestionByIdRequest,
    actUpdateQuestionRequest,
    actAddQuestionListenRequest
}