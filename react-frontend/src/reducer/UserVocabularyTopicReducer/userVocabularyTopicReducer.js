import * as Types from '../../constants/ActionTypes'

var userVocabularyTopicReducerState = {};

const userVocabularyTopicReducer = (state = userVocabularyTopicReducerState, action) => {
    switch (action.type) {
        case Types.USER_FETCH_VOCABULARY_TOPIC:
            return action.vocabularyTopics;
        default:
            return state
    }
}
export default userVocabularyTopicReducer;