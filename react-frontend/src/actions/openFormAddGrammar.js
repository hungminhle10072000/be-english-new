import * as Types from '../constants/ActionTypes';

const changeFormGrammarOn = () => {
    return{
        type: Types.FORM_ADD_GRAMMAR_ON
    }
}

const changeFormGrammarOff = () => {
    return{
        type: Types.FORM_ADD_GRAMMAR_OFF
    }
}

const changeFormEditGrammarOn = () => {
    return{
        type: Types.FORM_EDIT_GRAMMAR_ON
    }
}

const changeFormEditGrammarOff = () => {
    return{
        type: Types.FORM_EDIT_GRAMMAR_OFF
    }
}


export default {
    changeFormGrammarOn,
    changeFormGrammarOff,
    changeFormEditGrammarOn,
    changeFormEditGrammarOff
}