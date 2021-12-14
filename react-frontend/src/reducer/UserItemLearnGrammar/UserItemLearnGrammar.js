import * as Types from '../../constants/ActionTypes'

const UserItemLearnGrammarInit = {}

const UserItemLearnGrammar = (state = UserItemLearnGrammarInit, action) => {
    switch (action.type) {
        case Types.USER_GET_GRAMMAR_LEARN:
            return action.itemGrammarLearn;
        default:
            return state
    }
}

export default UserItemLearnGrammar

