import * as Types from '../constants/ActionTypes';
import VocabularyTopicService from '../services/VocabularyTopicService';
import userItemLoadingAction from './userItemLoadingAction'
import adminAlertInfoAction from './admin-alert-infoAction'


// get all topic new
const actUserFetchTopicsVocaNewRequest = () => {
    return(dispatch) => {
        return (
            VocabularyTopicService.userGetTopicNew().then((res) => {
                dispatch(actUserFetchTopicVocaNews(res.data))
            })
            .catch(
                error => {
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))           
                }
            )
        )
    }
}

const actUserFetchTopicVocaNews = (topicsVocaNew) => {
    return {
        type: Types.USER_FETCH_VOCABULARY_TOPIC_NEW,
        topicsVocaNew
    }
}

// get all users
const actUserFetchVocaTopicsRequest = () => {
    return(dispatch) => {
        return (
            VocabularyTopicService.userGetAllVocaTopic().then((res) => {
                dispatch(actUserFetchVocaTopics(res.data))
            }).then(() => {
                dispatch(userItemLoadingAction.closeItemLoading())
            })
            .catch(      
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())    
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))           
                }        
            )
        )
    }
}

const actUserFetchVocaTopics = (vocabularyTopics) => {
    return {
        type: Types.USER_FETCH_VOCABULARY_TOPIC,
        vocabularyTopics
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actUserFetchVocaTopicsRequest,
    actUserFetchTopicsVocaNewRequest
}