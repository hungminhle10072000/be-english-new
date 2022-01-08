import * as Types from '../../constants/ActionTypes'

const itemQuestionEditInit = {}

const itemQuestionEditReducer = (state = itemQuestionEditInit, action) => {
    switch (action.type) {
        case Types.GET_QUESTION_BY_ID:
            return action.itemQuestionEdit;
        default:
            return state
    }
}

export default itemQuestionEditReducer;