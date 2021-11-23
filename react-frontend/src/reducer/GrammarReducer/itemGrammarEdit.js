import * as Types from '../../constants/ActionTypes'

var itemGrammarEditInit = {};

const itemGrammarEdit = (state = itemGrammarEditInit, action) => {

    switch (action.type) {
        case Types.GET_GRAMMAR_ID:
            return action.itemGrammarEdit
        default:
            return state
    }
    
}

export default itemGrammarEdit;