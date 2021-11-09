import * as Types from '../../constants/ActionTypes'

const status = {openFormAddVoca: false, openFormEditVoca: false}

const statusFormAddVoca = (state = status, action) => {
    switch (action.type) {
        case Types.FORM_ADD_VOCA_ON:
            return {...state, openFormAddVoca: true}
        case Types.FORM_ADD_VOCA_OFF:
            return {...state, openFormAddVoca: false}
        case Types.FORM_EDIT_VOCA_ON:
            return {...state, openFormEditVoca: true}
        case Types.FORM_EDIT_VOCA_OFF:
            return {...state, openFormEditVoca: false}
        default:
            return state
    }
}

export default statusFormAddVoca;