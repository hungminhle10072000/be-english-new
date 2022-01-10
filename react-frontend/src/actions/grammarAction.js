import * as Types from '../constants/ActionTypes';
import GrammarService from '../services/GrammarService'
import adminAlertInfoAction from './admin-alert-infoAction';
import openFormAddGrammar from './openFormAddGrammar';
import userItemLoadingAction from './userItemLoadingAction'
import statusButtonLoadingAction from './statusButtonLoadingAction'

// get all grammar
const actFetchGrammarRequest = () => {
    return (dispatch) => {
        return(
            GrammarService.getAllGrammar().then((res) => {
                dispatch(userItemLoadingAction.closeItemLoading())
                dispatch(actFetchGrammar(res.data))              
            }).catch(
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!!","danger"))
                }
            )
        )
    }
}

const actFetchGrammar = (grammars) => {
    return {
        type: Types.FETCH_GRAMMAR,
        grammars
    }
}

// delete grammar
const actDeleteGrammarRequest = (id) => {
    return (dispatch) => {
        GrammarService.deleteGrammarId(id).then((res) => {
            dispatch(actDeleteGrammar(id))
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Xóa bài học thành công !","danger"))
        })
    }
}

const actDeleteGrammar = (id) => {
    return {
        type: Types.DELETE_GRAMMAR,
        id
    }
}

// add grammar with name
const actAddGrammarNameRequest = (nameGrammar) => {
    return(dispatch) => {
        return(
            GrammarService.addGrammarWithName(nameGrammar).then((res) => {
                dispatch(actAddGrammarName(res.data))
                dispatch(userItemLoadingAction.closeItemLoading())
                dispatch(openFormAddGrammar.changeFormGrammarOff())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm bài học thành công !","success"))
            })
            .catch(
                error => {
                    dispatch(userItemLoadingAction.closeItemLoading())
                    dispatch(adminAlertInfoAction.changeAdminAlertOff("Tác vụ thất bại!!! Xin hãy thử lại","danger"))
                }
            )
        )
    }
}

const actAddGrammarName = (grammar) => {
    return {
        type: Types.ADD_GRAMMAR,
        grammar
    }
}

// get grammar with id
const actGetGrammarEditRequest = (id) => {
    return (dispatch) => {
        GrammarService.getGrammarWithId(id).then((res) => {
            dispatch(actGetGrammarEdit(res.data))
        })
    }
}

const actGetGrammarEdit = (itemGrammarEdit) => {
    return {
        type: Types.GET_GRAMMAR_ID,
        itemGrammarEdit
    }
}

// update name grammar
const actUpdateNameGrammarRequest = (id,name_grammar) => {
    return(dispatch) => {
        GrammarService.updateNameGrammar(id,name_grammar).then((res) => {
            dispatch(actUpdateNameGrammar(res.data))
            dispatch(statusButtonLoadingAction.closeButtonLoading())
            dispatch(openFormAddGrammar.changeFormEditGrammarOff())
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công !","success"))
        })
        .catch(
            error => {
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!! Xin hãy thử lại","danger"))
            }
        )
    }
}

const actUpdateNameGrammar = (grammar) => {
    return {
        type: Types.UPDATE_NAME_GRAMMAR,
        grammar
    }
}

// update content grammar
const actUpdateContentGrammarRequest = (id, content_grammar) => {
    return(dispatch) => {
        GrammarService.updateContentGrammar(id,content_grammar).then((res) => {
            dispatch(actUpdateConentGrammar(res.data))
            dispatch(statusButtonLoadingAction.closeButtonLoading())
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công !","success"))
        })
        .catch(
            error => {
                dispatch(statusButtonLoadingAction.closeButtonLoading())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Tác vụ thất bại!!! Xin hãy thử lại", "danger"))
            }
        )
    }
}

const actUpdateConentGrammar = (grammar) => {
    return {
        type: Types.UPDATE_CONTENT_GRAMMAR,
        grammar
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actFetchGrammarRequest,
    actDeleteGrammarRequest,
    actAddGrammarNameRequest,
    actGetGrammarEditRequest,
    actUpdateNameGrammarRequest,
    actUpdateContentGrammarRequest
}