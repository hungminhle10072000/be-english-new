import * as Types from '../constants/ActionTypes';
import GrammarService from '../services/GrammarService'

// user get all users
const actUserFetchAllGrammarRequest = () => {
    return(dispatch) => {
        return (
            GrammarService.userGetAllGrammar().then((res) => {
                dispatch(actUserFetchAllGrammar(res.data))
                dispatch(actUserCreateValueSelectGrammar(res.data))
                if(res.data.length > 0){
                    dispatch(actUserGetLearnGrammarRequest(res.data[0].id))
                }
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

const actUserCreateValueSelectGrammar = (listValueKeySelect) => {
    return {
        type: Types.USER_CREATE_VALUE_SELECT_GRAMMAR,
        listValueKeySelect
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actUserFetchAllGrammarRequest,
    actUserGetLearnGrammarRequest,
    actUserCreateValueSelectGrammar
}