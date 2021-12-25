import * as Types from '../../constants/ActionTypes'

const status = {openFormAddExercise: false, openFormEditExercise: false}

const statusFormAdminExercise = (state = status, action) => {
    switch (action.type) {
        case Types.FORM_ADD_EXERCISE_ON:
            return {...state, openFormAddExercise: true}
        case Types.FORM_ADD_EXERCISE_OFF:
            return {...state, openFormAddExercise: false}
        case Types.FORM_EDIT_EXERCISE_ON:
            return {...state, openFormEditExercise: true}
        case Types.FORM_EDIT_EXERCISE_OFF:
            return {...state, openFormEditExercise: false}
        default:
            return state
    }
}

export default statusFormAdminExercise;