import * as Types from '../constants/ActionTypes';
import VocabularyService from '../services/VocabularyService'
import userItemLoadingAction from './userItemLoadingAction'
import adminAlertInfoAction from './admin-alert-infoAction'

// user get all users
const actUserFetchListVocaWithTopicsRequest = (nameTopic, topicId) => {
    return(dispatch) => {
        return (
            VocabularyService.userGetAllVocabularyByTopicId(topicId).then((res) => {
                dispatch(actUserFetchListWithVocaTopics(nameTopic,res.data))
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

const actUserFetchListWithVocaTopics = (nameTopic, vocasWithTopic) => {
    return {
        type: Types.USER_FETCH_VOCABULARY_WITH_TOPIC,
        payload: {
            nameTopic: nameTopic,
            vocasWithTopic: vocasWithTopic
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actUserFetchListVocaWithTopicsRequest
}