import * as Types from '../constants/ActionTypes';

const changeFormAddVocaTopicOn = () => {
    return{
        type: Types.FORM_ADD_VOCA_TOPIC_ON
    }
}

const changeFormAddVocaTopicOff = () => {
    return {
        type: Types.FORM_ADD_VOCA_TOPIC_OFF
    }
}

const chagneFormEditVocaTopicOn = () => {
    return{
        type: Types.FORM_EDIT_VOCA_TOPIC_ON
    }
}

const chagneFormEditVocaTopicOff = () => {
    return{
        type: Types.FORM_EDIT_VOCA_TOPIC_OFF
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    changeFormAddVocaTopicOn,
    changeFormAddVocaTopicOff,
    chagneFormEditVocaTopicOn,
    chagneFormEditVocaTopicOff
}