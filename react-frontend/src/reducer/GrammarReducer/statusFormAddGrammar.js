import * as Types from '../../constants/ActionTypes'

const status = {openFormAddGrammar: false, openFormEditGrammar: false}

const statusFormAddGrammar = (state = status, action) => {
    switch (action.type) {
        case Types.FORM_ADD_GRAMMAR_ON:
            return {...state, openFormAddGrammar: true}
        case Types.FORM_ADD_GRAMMAR_OFF:
            return {...state, openFormAddGrammar: false}
        case Types.FORM_EDIT_GRAMMAR_ON:
            return {...state, openFormEditGrammar: true}
        case Types.FORM_EDIT_GRAMMAR_OFF:
            return {...state, openFormEditGrammar: false}
        default:
            return state
    }
}

export default statusFormAddGrammar;