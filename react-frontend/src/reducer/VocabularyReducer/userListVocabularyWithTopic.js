import * as Types from '../../constants/ActionTypes'

const userVocabularyWithTopicInit = {nameTopic: '', vocasWithTopic:[]}


const userVocabularyWithTopic = (state = userVocabularyWithTopicInit, action) => {
    switch (action.type) {
        case Types.USER_FETCH_VOCABULARY_WITH_TOPIC:
            return {...action.payload}
        default:
            return state
    }
}

export default userVocabularyWithTopic;