import {FETCH_LESSONS, ADD_LESSON, EDIT_LESSON, DELETE_LESSON, UPDATE_LESSON} from '../../constants/ActionTypes'

// const initialState = { lessons: [] }
const initialState = []

const lessonReducer = (state=initialState, action) => {
    const {lessons} = action
    switch(action.type) {
        case FETCH_LESSONS:
            console.log('Lessons: ',lessons)
            return [...lessons].sort((a,b) => a.numPriority - b.numPriority)
        case ADD_LESSON:
            return [...state,action.lesson].sort((a,b) => a.numPriority - b.numPriority)
        case DELETE_LESSON:
            for (var i = state.length - 1; i >= 0; i--) {
                if (state[i].id === action.lesson.id) {
                    state.splice(i, 1);
                }
               }
            
            return [...state]
        case UPDATE_LESSON:
            for (var i = state.length - 1; i >= 0; i--) {
                if (state[i].id === action.lesson.id) {
                    state[i]=action.lesson;
                }
            }
            return [...state]        
        default:
            return state
    }
}

export default lessonReducer;