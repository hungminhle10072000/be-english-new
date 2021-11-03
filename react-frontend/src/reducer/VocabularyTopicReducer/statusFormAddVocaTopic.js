import * as Types from '../../constants/ActionTypes'

const status = {openFormAddVocaTopic: false, openFormEditVocaTopic: false}

const statusFormAddVocaTopic = (state = status, action) => {
    switch (action.type) {
        case Types.FORM_ADD_VOCA_TOPIC_ON:
            return {...state, openFormAddVocaTopic: true}
        case Types.FORM_ADD_VOCA_TOPIC_OFF:
            return {...state, openFormAddVocaTopic: false}
        case Types.FORM_EDIT_VOCA_TOPIC_ON:
            return {...state, openFormEditVocaTopic: true}
        case Types.FORM_EDIT_VOCA_TOPIC_OFF:
            return {...state, openFormEditVocaTopic: false}
        default:
            return state
    }
}

export default statusFormAddVocaTopic;