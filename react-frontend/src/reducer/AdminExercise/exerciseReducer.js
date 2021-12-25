import * as Types from '../../constants/ActionTypes';

const nameInitialState = []

var findIndex = (allExercise, id) => {
    var result = 1;
    allExercise.forEach((item, index) => {
        if (item.id === id){
            result = index;
        }
    });
    return result;
}

const exerciseReducer = (state = nameInitialState, action) => {

    let index = -1;
    const {id} = action

    switch (action.type) {
        case Types.FETCH_EXERCISE:
            state = action.allExercise
            return [...state]
        case Types.ADD_EXERCISE:
            state.push(action.exercise)
            return [...state]
        case Types.DELETE_EXERCISE_WITH_ID:
            index = findIndex(state, id)
            state.splice(index,1)
            return[...state]
        default:
            return state
    }
}

export default exerciseReducer;