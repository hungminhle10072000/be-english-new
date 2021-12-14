import * as Types from '../constants/ActionTypes';
import GrammarService from '../services/GrammarService'

// user get all users
const actUserFetchAllGrammarRequest = () => {
    return(dispatch) => {
        return (
            GrammarService.userGetAllGrammar().then((res) => {
                dispatch(actUserFetchAllGrammar(res.data))
            })
        )
    }
}

const actUserFetchAllGrammar = (userListAllGrammar) => {
    return {
        type: Types.USER_FETCH_ALL_GRAMMAR,
        userListAllGrammar
    }
}

// user get learn grammar
const actUserGetLearnGrammarRequest = (grammarId) => {
    return(dispatch) => {
        return (
            GrammarService.userGetGrammarLearn(grammarId).then((res) => {
                dispatch(actUserGetLearnGrammar(res.data))
            })
        )
    }
}

const actUserGetLearnGrammar = (itemGrammarLearn) => {
    return {
        type: Types.USER_GET_GRAMMAR_LEARN,
        itemGrammarLearn
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actUserFetchAllGrammarRequest,
    actUserGetLearnGrammarRequest
}