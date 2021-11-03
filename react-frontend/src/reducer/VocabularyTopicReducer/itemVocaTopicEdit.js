import * as Types from '../../constants/ActionTypes'

var itemVocaTopicEditState = {};

const itemVocaTopicEdit = (state = itemVocaTopicEditState, action) => {
    switch (action.type) {
        case Types.GET_VOCA_TOPIC_ID:
            return action.itemVocaTopicEdit
        default:
            return state
    }
}

export default itemVocaTopicEdit;