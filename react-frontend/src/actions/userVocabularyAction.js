import * as Types from '../constants/ActionTypes';
import VocabularyService from '../services/VocabularyService'

// user get all users
const actUserFetchListVocaWithTopicsRequest = (nameTopic, topicId) => {
    return(dispatch) => {
        return (
            VocabularyService.userGetAllVocabularyByTopicId(topicId).then((res) => {
                dispatch(actUserFetchListWithVocaTopics(nameTopic,res.data))
            })
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