import * as Types from '../constants/ActionTypes';

const status = {openFormSendMail: false}
const statusFormSendMail = (state = status, action) => {
    switch (action.type) {
        case Types.FORM_SEND_MAIL_ON:
            return {openFormSendMail: true}
        case Types.FORM_SEND_MAIL_OFF:
            return {openFormSendMail: false}
        default:
            return state
    }
}

export default statusFormSendMail;