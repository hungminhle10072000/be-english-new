import * as Types from '../constants/ActionTypes';
import VocabularyTopicService from '../services/VocabularyTopicService';
import adminAlertInfoAction from './admin-alert-infoAction';
import openFormAddVocaTopic from './openFormAddVocaTopic';

// get all users
const actFetchVocaTopicsRequest = () => {
    return(dispatch) => {
        return (
            VocabularyTopicService.getVocabularyTopic().then((res) => {
                dispatch(actFetchVocaTopics(res.data))
            })
        )
    }
}

const actFetchVocaTopics = (topics) => {
    return {
        type: Types.FETCH_VOCABULARY_TOPIC,
        topics
    }
}

const actAddVocaTopicRequest = (name, image) => {
    return(dispatch) => {
        return(
            VocabularyTopicService.createTopicVoca(name, image).then((res) => {
                dispatch(actAddVocaTopic(res.data))
                dispatch(openFormAddVocaTopic.changeFormAddVocaTopicOff())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm chủ đề thành công !","success"))
            })
        )
    }
}

const actAddVocaTopic = (voca_topic) => {
    return {
        type: Types.ADD_VOCABULARY_TOPIC,
        voca_topic
    }
}

const actDeleteVocaTopicRequest = (id) => {
    return (dispatch) => {
        return (
            VocabularyTopicService.deleteVocaTopic(id).then((res) => {
                dispatch(actDeleteVocaTopic(id))
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa chủ đề thành công !","danger"))
            })
        )
    }
}

const actDeleteVocaTopic = (id) => {
    return {
        type: Types.DELETE_VOCABULARY_TOPIC,
        id
    }
}

// get voca topic by id
const actGetVocaTopicRequest = (id) => {
    return (dispatch) => {
        VocabularyTopicService.getVocaTopicById(id).then((res) => {
            dispatch(actGetVocaTopic(res.data))
        })
    }
}

const actGetVocaTopic = (itemVocaTopicEdit) => {
    return {
        type: Types.GET_VOCA_TOPIC_ID,
        itemVocaTopicEdit
    }
}


// update voca topic
const actUpdateVocaTopicRequest = (id,name_topic,image) => {
    return(dispatch) => {
        VocabularyTopicService.updateVocaTopic(id,name_topic,image).then((res) => {
            dispatch(actUpdateVocaTopic(res.data))
            dispatch(openFormAddVocaTopic.chagneFormEditVocaTopicOff())
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật chủ đề thành công !","success"))
        })
    }
}

const actUpdateVocaTopic = (vocabulary_topic) => {
    return {
        type: Types.UPDATE_VOCABULARY_TOPIC,
        vocabulary_topic
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actFetchVocaTopicsRequest,
    actAddVocaTopicRequest,
    actDeleteVocaTopicRequest,
    actGetVocaTopicRequest,
    actUpdateVocaTopicRequest
}