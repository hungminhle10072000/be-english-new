import * as Types from '../../constants/ActionTypes'

const userListGrammarInitialState = []

const userListGrammar = (state = userListGrammarInitialState, action) => {
    switch (action.type) {
        case Types.USER_FETCH_ALL_GRAMMAR:
            return action.userListAllGrammar
        default:
            return state
    }
}

export default userListGrammar;
