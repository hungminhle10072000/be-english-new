import * as Types from '../constants/ActionTypes';
import VocabularyService from '../services/VocabularyService';
import adminAlertInfoAction from './admin-alert-infoAction';
import openFormAddVoca from './openFormAddVoca';
import userItemLoadingAction from './userItemLoadingAction'
import statusButtonLoadingAction from './statusButtonLoadingAction'


/// get all vocabulary with topicId
const actFetchVocaWithTopicRequest = (nameTopic, topicId) => {
    return(dispatch) => {
        return (
            VocabularyService.getAllVocabularyByTopicId(topicId).then(
                (res) => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(actFetchVocaWithTopic(nameTopic, res.data))
                }
            ).catch(
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!!","danger"))
                }
            )
        )
    }
}

const actFetchVocaWithTopic  = (nameTopic, vocasWithTopic) => {
    return {
        type: Types.FETCH_VOCABULARY_WITH_TOPIC,
        payload: {
            nameTopic: nameTopic,
            vocasWithTopic: vocasWithTopic
        }
    }
}

// add vocabulary for topic
const actAddVocaForTopicRequest = (vocaDto, file_audio, file_image) => {
    return (dispatch) => {
        return(
            VocabularyService.createVoca(vocaDto, file_audio, file_image)
            .then((res) => {
                dispatch(actAddVocabulary(res.data))
                dispatch(openFormAddVoca.changeFormAddVocaOff())
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm từ mới thành công !","success"))
            }).catch(
                error => {
                    dispatch(statusButtonLoadingAction.closeButtonLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!! Xin hãy thử lại","danger"))
                }
            )
        )
    }
}

const actAddVocabulary = (vocabulary) => {
    return {
        type: Types.ADD_VOCABULARY,
        vocabulary
    }
}

// delete vocabulary for topic
const actDeleteVocaForTopicRequest = (id) => {
    return (dispatch) => {
        return (
            VocabularyService.deleteVocabulary(id)
            .then((res) => {
                dispatch(actDeleteVocaForTopic(id))
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa từ mới thành công !","danger"))
            })
        )
    }
}

const actDeleteVocaForTopic = (id) => {
    return {
        type: Types.DELETE_VOCABULARY,
        id
    }
}

// get voca by id
const actGetVocaByIdRequest = (id) => {
    return (dispatch) => {
        return (
            VocabularyService.getVocabylary(id)
            .then((res) => {
                dispatch(actGetVocaById(res.data))
            })
        )
    }
}


const actGetVocaById = (itemVocaEdit) => {
    return {
        type: Types.GET_VOCA_ID,
        itemVocaEdit
    }
}


// update vocabulary
const actUpdateVocabularyRequest = (id , vocabularyUpdateDto, file_audio, image) => {
    return(dispatch) => {
        return (
            VocabularyService.updateVocabulary(id , vocabularyUpdateDto, file_audio, image)
            .then((res) => {
                dispatch(actUpdateVocabulary(res.data))
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(openFormAddVoca.changeFormEditVocaOff())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật từ mới thành công !","success"))
            })
            .catch(
                error => {
                    dispatch(statusButtonLoadingAction.closeButtonLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!! Xin hãy thử lại","danger"))
                }
            )
        )
    }
}

const actUpdateVocabulary = (vocabularyUpdate) => {
    return {
        type: Types.UPDATE_VOCABULARY,
        vocabularyUpdate
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actFetchVocaWithTopicRequest,
    actAddVocaForTopicRequest,
    actDeleteVocaForTopicRequest,
    actGetVocaByIdRequest,
    actUpdateVocabularyRequest
}