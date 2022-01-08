import * as Types from '../../constants/ActionTypes'

const itemExerciseEditState = {};

const itemExerciseEdit = (state = itemExerciseEditState, action) => {

    switch (action.type) {
        case Types.GET_EXERCISE_WITH_ID:
            return action.itemExercise
        default:
            return state
    }
}

export default itemExerciseEdit