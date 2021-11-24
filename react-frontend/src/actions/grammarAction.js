import * as Types from '../constants/ActionTypes';
import GrammarService from '../services/GrammarService'
import adminAlertInfoAction from './admin-alert-infoAction';
import openFormAddGrammar from './openFormAddGrammar';

// get all grammar
const actFetchGrammarRequest = () => {
    return (dispatch) => {
        return(
            GrammarService.getAllGrammar().then((res) => {
                dispatch(actFetchGrammar(res.data))
            })
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
                dispatch(openFormAddGrammar.changeFormGrammarOff())
                dispatch(adminAlertInfoAction.changeAdminAlertOn("Thêm bài học thành công !","success"))
            })
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
            dispatch(openFormAddGrammar.changeFormEditGrammarOff())
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công !","success"))
        })
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
            dispatch(adminAlertInfoAction.changeAdminAlertOn("Cập nhật thành công !","success"))
        })
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