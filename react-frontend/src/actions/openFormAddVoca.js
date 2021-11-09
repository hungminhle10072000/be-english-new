import * as Types from '../constants/ActionTypes';

const changeFormAddVocaOn = () => {
    return{
        type: Types.FORM_ADD_VOCA_ON
    }
}

const changeFormAddVocaOff = () => {
    return {
        type: Types.FORM_ADD_VOCA_OFF
    }
}

const changeFormEditVocaOn = () => {
    return {
        type: Types.FORM_EDIT_VOCA_ON
    }
}

const changeFormEditVocaOff = () => {
    return {
        type: Types.FORM_EDIT_VOCA_OFF
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    changeFormAddVocaOn,
    changeFormAddVocaOff,
    changeFormEditVocaOn,
    changeFormEditVocaOff
}