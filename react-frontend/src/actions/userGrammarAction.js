import * as Types from '../constants/ActionTypes';
import GrammarService from '../services/GrammarService'
import userItemLoadingAction from './userItemLoadingAction'
import adminAlertInfoAction from './admin-alert-infoAction'
import commentAction from './commentAction'

// user get all users
const actUserFetchAllGrammarRequest = () => {
    return(dispatch) => {
        return (
            GrammarService.userGetAllGrammar().then((res) => {
                dispatch(actUserFetchAllGrammar(res.data))
                dispatch(actUserCreateValueSelectGrammar(res.data))
                if(res.data.length > 0){
                    dispatch(actUserGetLearnGrammarRequest(res.data[0].id))
                    dispatch(commentAction.actGetCommentByGrammarIdRequest(res.data[0].id))
                } else {
                    dispatch(userItemLoadingAction.closeItemLoading())
                }
            })
            .catch(      
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))           
                }        
            )
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
            }).then(() => {
                dispatch(userItemLoadingAction.closeItemLoading())
            })
            .catch(      
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())    
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại !!! Xin hãy thử lại", "danger"))           
                }        
            )
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