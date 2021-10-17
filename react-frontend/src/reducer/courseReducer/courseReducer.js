import {FETCH_COURSES} from '../../constants/ActionTypes'

const initialState = []

const courseReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_COURSES:
            state =action.courses
            return [...state]

        default:
            return state
    }
}

export default courseReducer;