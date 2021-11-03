import * as Types from '../../constants/ActionTypes';

const vocabulary_topicInitialState = []

var findIndex = (vocaTopics, id) => {
    var result = 1;
    vocaTopics.forEach((topic, index) => {
        if (topic.id === id){
            result = index;
        }
    });
    return result;
}

const vocabularyTopics = (state = vocabulary_topicInitialState, action) => {

    let index = -1;
    const {id, vocabulary_topic} = action

    switch (action.type) {
        case Types.FETCH_VOCABULARY_TOPIC:
            state = action.topics
            return [...state]
        case Types.ADD_VOCABULARY_TOPIC:
            state.push(action.voca_topic)
            return [...state]
        case Types.DELETE_VOCABULARY_TOPIC:
            index = findIndex(state, id)
            state.splice(index,1)
            return[...state]
        case Types.UPDATE_VOCABULARY_TOPIC:
            state.forEach((item, index) => {
                if(item.id === vocabulary_topic.id){
                    state[index] = vocabulary_topic;
                }
            });
            return [...state]
        default:
            return state
    }
}

export default vocabularyTopics;