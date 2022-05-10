import * as Types from '../../constants/ActionTypes';

const topicVocaNewInit = []

const topicVocaNew = (state = topicVocaNewInit, action) => {

    switch(action.type) {
        case Types.USER_FETCH_VOCABULARY_TOPIC_NEW:
            state = action.topicsVocaNew
            return [...state]
        default:
            return state    
    }

}

export default topicVocaNew;
