import * as Types from '../../constants/ActionTypes'

const vocabularyWithTopicInit = {nameTopic: '', vocasWithTopic:[]}


const findIndex = (vocabularies, id) => {
    
    let result = 1;
    
    vocabularies.forEach( (voca, index) => {
        if(voca.id === id){
            result = index;
        }
    });
    return result;
}

const listVocabularyWithTopic = (state = vocabularyWithTopicInit, action) => {

    let index = -1;
    const {id, vocabularyUpdate} = action

    switch(action.type) {
        case Types.FETCH_VOCABULARY_WITH_TOPIC:
            return {...action.payload}
        case Types.ADD_VOCABULARY:
            state.vocasWithTopic.push(action.vocabulary)
            return {...state}
        case Types.DELETE_VOCABULARY:
            index = findIndex(state.vocasWithTopic, id)
            state.vocasWithTopic.splice(index,1)
            return {...state}
        case Types.UPDATE_VOCABULARY:
            state.vocasWithTopic.forEach((item, index) => {
                if(item.id === vocabularyUpdate.id){
                    state.vocasWithTopic[index] = vocabularyUpdate;
                }
            })
            return {...state}
        default:
            return state;
    }
}

export default listVocabularyWithTopic;