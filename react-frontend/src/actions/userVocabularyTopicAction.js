import * as Types from '../constants/ActionTypes';
import VocabularyTopicService from '../services/VocabularyTopicService';

// get all users
const actUserFetchVocaTopicsRequest = () => {
    return(dispatch) => {
        return (
            VocabularyTopicService.userGetAllVocaTopic().then((res) => {
                dispatch(actUserFetchVocaTopics(res.data))
            })
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
    actUserFetchVocaTopicsRequest
}