import * as Types from '../../constants/ActionTypes';

const grammarsInitialState = []

const findIndex = (gramamrs, id) => {
    var result = 1;
    gramamrs.forEach((grammar, index) => {
        if (grammar.id === id){
            result = index;
        }
    });
    return result;
}

const grammarsReducer = (state = grammarsInitialState, action) => {

    let index = -1;
    const {id} = action

    switch (action.type) {
        case Types.FETCH_GRAMMAR:
            state = action.grammars
            return [...state]
        case Types.DELETE_GRAMMAR:
            index = findIndex(state, id)
            state.splice(index,1)
            return[...state]
        case Types.ADD_GRAMMAR:
            state.push(action.grammar)
            return [...state]
        case Types.UPDATE_NAME_GRAMMAR:
            state.forEach((item, index) => {
                if(item.id === action.grammar.id){
                    state[index] = action.grammar
                }
            });
        case Types.UPDATE_CONTENT_GRAMMAR:
            state.forEach((item, index) => {
                if(item.id === action.grammar.id){
                    state[index] = action.grammar
                }
            });
        default:
            return state
    }
}

export default grammarsReducer;