import * as Types from '../constants/ActionTypes';

const changeFormSendMailOn = () => {
    return{
        type: Types.FORM_SEND_MAIL_ON
    }
}

const changeFormSendMailOff = () => {
    return {
        type: Types.FORM_SEND_MAIL_OFF
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    changeFormSendMailOn,
    changeFormSendMailOff
}